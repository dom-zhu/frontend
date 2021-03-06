import { PostObj } from "../Thread";
import AddPost from "../AddPost";
import { useState, useEffect, useContext } from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostBody from "./PostBody";
import PostVotes from "./PostVotes";
import { UserContext } from "../../Home/UserContext";
import { PostContext } from "../../Home/PostContext";

interface Props {
  postID: string;
  threadID: string;
  loadThread: () => void;
  getPost: (postID: string) => PostObj | null;
  indentLevel: number;
  newPost: PostObj | null;
}

const server = process.env.REACT_APP_API_SERVER;

const Post = ({
  postID,
  threadID,
  loadThread,
  getPost,
  indentLevel,
  newPost,
}: Props) => {
  const defaultPost: PostObj = {
    childrenIDs: [],
    content: "loading...",
    date: "1",
    id: "",
    imageURL: "",
    parentID: "",
    username: "loading...",
  };
  const username = useContext(UserContext).username;

  // TODO fix later
  const [postNotProp, setPostNotProp] = useState<PostObj>(defaultPost);

  const [childrenPosts, setChildrenPosts] = useState<string[]>([]);
  // determines if the reply form will be rendered
  const [renderReplyForm, setRenderReplyForm] = useState<boolean>(false);

  // determines if children are rendered
  const [renderChildren, setRenderChildren] = useState<boolean>(true);
  const [newPostObj, setNewPostObj] = useState<PostObj | null>(newPost);

  const [deletedPost, setDeletedPost] = useContext(PostContext).deleteReload;

  // how many pixels each indent level is
  const padding = indentLevel * 20;

  useEffect(() => {
    let mounted = true;
    const loadPost = async () => {
      const r = await retrievePost(postID);
      if (mounted) {
        setPostNotProp(r);
        setChildrenPosts(r.childrenIDs);
      }
    };

    loadPost();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (deletedPost === postID) {
      const updatedPost = postNotProp;
      updatedPost.deleted = true;
      setPostNotProp(updatedPost);
      setDeletedPost(null);
    }
  }, [deletedPost]);

  useEffect(() => {
    if (newPost === null) {
      return;
    }

    if (newPost.parentID === postID) {
      setChildrenPosts((current) => [...current, newPost.id]);

      let updatedPost: PostObj = postNotProp;
      updatedPost.childrenIDs = [...postNotProp.childrenIDs, newPost.id];

      setPostNotProp(updatedPost);
      setNewPostObj(null);
      return;
    }

    setNewPostObj(newPost);
  }, [newPost]);

  /** toggles the reply form when reply clicked */
  function renderReply() {
    if (renderReplyForm) {
      return (
        <AddPost
          threadID={threadID}
          loadThread={loadThread}
          noRenderButton={true}
          parentPostID={postNotProp.id}
          setRenderReplyForm={setRenderReplyForm}
        />
      );
    }
  }

  /** Gets post */
  async function retrievePost(postID: string) {
    const payload = { threadID: threadID, postID: postID };

    const result = await fetch(server + "getPost", {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const response: PostObj = await result.json();
    // return response;

    // get hidden state.
    const result2 = await fetch(server + "isPostHidden", {
      body: JSON.stringify({
        username: username,
        postID: postID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const jsoned = await result2.json();
    // console.log(`post id: ${postID} is hidden: ${jsoned.status}`);
    setRenderChildren(!jsoned.status);

    // console.log(response);
    return response;
  }

  /** Deletes a post from the server */
  async function deletePost() {
    const payload = { threadID: threadID, postID: postID };

    try {
      const result = await fetch(server + "deletePost", {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const response: Object = await result.json();
      if (response.hasOwnProperty("status")) {
        const updatedpost = await retrievePost(postID);
        setPostNotProp(updatedpost);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // card
    <>
      <div style={{ marginLeft: padding, width: "auto" }}>
        <div className="my-3 d-flex border border-secondary rounded bg-dark">
          <PostVotes postID={postID} username={username} />
          <div className="container" style={{ paddingLeft: "0" }}>
            <PostHeader post={postNotProp} />
            <PostBody post={postNotProp} />
            <PostFooter
              post={postNotProp}
              renderChildren={renderChildren}
              setRenderReplyForm={setRenderReplyForm}
              setRenderChildren={setRenderChildren}
              deletePost={deletePost}
            />
          </div>
        </div>
        {renderReply()}
      </div>
      {/* Recursively render children */}
      {renderChildren &&
        childrenPosts.map((id) => {
          // console.log(childrenPosts.length);
          if (id !== null) {
            return (
              <Post
                key={id}
                loadThread={loadThread}
                postID={id}
                getPost={getPost}
                threadID={threadID}
                indentLevel={indentLevel + 1}
                newPost={newPostObj}
              />
            );
          }
          return null;
        })}
    </>
  );
};

export default Post;
