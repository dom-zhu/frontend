(this.webpackJsonpfakeshop=this.webpackJsonpfakeshop||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(18),a=n.n(c),o=n(2),i=n(9),l=n(4),j=n.n(l),u=n(6),b=n(3),h=Object(r.createContext)(null),d=n(0),m=function(){var e="http://localhost:3001/api/",t=Object(r.useContext)(h),n=t.username,s=t.setUsername,c=Object(b.f)(),a=Object(b.g)();function o(){return(o=Object(u.a)(j.a.mark((function t(){var n,r,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("sessionID"),t.prev=1,t.next=4,fetch(e+"getUsername/"+n);case 4:return r=t.sent,t.next=7,r.json();case 7:if((o=t.sent).username||["/login","/register"].includes(a.pathname)){t.next=11;break}return c.push("/login"),t.abrupt("return");case 11:s(o.username),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(1);case 16:case"end":return t.stop()}}),t,null,[[1,14]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h6",{className:"text-white",children:n}),Object(d.jsxs)("div",{className:"d-flex flex-row",children:[Object(d.jsx)(i.b,{className:"mr-3",to:"/login",onClick:function(){localStorage.removeItem("sessionID"),s("")},children:n&&n.length>0?Object(d.jsx)("h5",{className:"text-primary",children:"logout"}):"/register"===a.pathname?Object(d.jsx)("h5",{children:"Login"}):void 0}),Object(d.jsx)(i.b,{to:"/register",children:function(){if("/register"!==a.pathname)return n?void 0:Object(d.jsx)("h5",{className:"font-weight-bold",children:"Register"})}()})]})]})},p=function(){return Object(d.jsxs)("div",{className:"bg-dark navbar w-100 fixed-top",children:[Object(d.jsx)(i.b,{to:"/home",children:Object(d.jsx)("h1",{className:"navbar-brand mx-3 text-light",children:"TEMPORARYNAMEgay"})}),Object(d.jsx)(m,{})]})},O=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(p,{})})},x=function(){return Object(d.jsx)("div",{className:"bg-dark w-100",style:{position:"fixed",bottom:0},children:Object(d.jsx)("h6",{className:"text-light m-2",children:"I am footer"})})},f=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(""),a=Object(o.a)(c,2),i=a[0],l=a[1],m=Object(r.useState)(""),p=Object(o.a)(m,2),O=p[0],x=p[1],f=Object(b.f)(),v=Object(r.useContext)(h),g=(v.username,v.setUsername),N="http://localhost:3001/api/";function y(){return(y=Object(u.a)(j.a.mark((function e(t){var r,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={username:n,password:i},N+"login",e.prev=3,e.next=6,fetch("http://localhost:3001/api/login",{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"POST"});case 6:return s=e.sent,e.next=9,s.json();case 9:if(!(c=e.sent).hasOwnProperty("error")){e.next=13;break}return x(c.error),e.abrupt("return");case 13:console.log("set sessionid"),localStorage.setItem("sessionID",c.sessionID),g(n),f.push("/"),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[3,19]])})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3",children:[Object(d.jsxs)("form",{className:"mt-5",children:[Object(d.jsx)("h1",{className:"mb-4 text-center",children:"Login"}),Object(d.jsxs)("div",{className:"form-group mb-2",children:[Object(d.jsx)("label",{children:"Username"}),Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)},className:"form-control",placeholder:"Enter username"})]}),Object(d.jsxs)("div",{className:"form-group mb-3",children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:i,onChange:function(e){return l(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(d.jsx)("button",{type:"submit",onClick:function(e){return y.apply(this,arguments)},className:"btn btn-primary",children:"Submit"})]}),O.length>0&&Object(d.jsx)("h5",{className:"mt-3 alert alert-danger",children:O})]})})})},v=function(e){var t=e.post;return Object(d.jsxs)("div",{className:"container my-3 border border-secondary rounded bg-dark",children:[Object(d.jsx)("div",{className:"row p-2",children:Object(d.jsx)("p",{className:"text-white",children:t.content})}),Object(d.jsxs)("div",{className:"row pl-2",children:[Object(d.jsxs)("h6",{className:"text-white",children:["-",t.username]}),Object(d.jsx)("h6",{className:"ml-3 text-white",children:t.date})]})]})},g=function(e){var t=e.threadID,n=e.loadThread,s=Object(r.useState)(!1),c=Object(o.a)(s,2),a=c[0],i=c[1],l="http://localhost:3001/api/",b=Object(r.useState)(""),m=Object(o.a)(b,2),p=m[0],O=m[1],x=Object(r.useContext)(h).username;function f(){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(j.a.mark((function e(){var r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={username:x,content:p,date:(new Date).toLocaleString(),threadID:t},e.prev=1,e.next=4,fetch(l+"makePost",{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"POST"});case 4:return s=e.sent,e.next=7,s.json();case 7:e.sent,n(),i((function(e){return!e})),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"mb-5",children:a?Object(d.jsxs)("div",{className:"form-group mt-4",children:[Object(d.jsx)("label",{className:"",children:"Content"}),Object(d.jsx)("textarea",{onChange:function(e){return O(e.target.value)},className:"form-control border border-secondary"}),Object(d.jsx)("button",{onClick:f,className:"btn btn-primary mt-2",children:"Submit"})]}):Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){return i((function(e){return!e}))},children:"Add Post"})})},N=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=(t[0],t[1],Object(r.useState)({title:"",content:"",username:"",_id:"",posts:[]})),s=Object(o.a)(n,2),c=s[0],a=s[1],i="http://localhost:3001/api/",l=Object(b.h)().id;function h(){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i+"getThread/"+l);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){h()}),[]),Object(d.jsxs)("div",{className:"container mt-3",children:[Object(d.jsx)("h1",{children:c.title}),Object(d.jsxs)("h6",{children:["- ",c.username]}),Object(d.jsx)("p",{children:c.content}),Object(d.jsx)("h4",{className:"mt-5",children:"Replies:"}),c.posts.map((function(e,t){return Object(d.jsx)(v,{post:e},t)})),Object(d.jsx)(g,{threadID:l,loadThread:h})]})},y=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(""),a=Object(o.a)(c,2),i=a[0],l=a[1],h=Object(r.useState)(""),m=Object(o.a)(h,2),p=m[0],O=m[1],x=Object(r.useState)(""),f=Object(o.a)(x,2),v=f[0],g=f[1],N=Object(r.useState)(""),y=Object(o.a)(N,2),w=y[0],S=y[1],k="http://localhost:3001/api/",C=Object(b.f)();function T(){if(i===p)return!0}function P(){return(P=Object(u.a)(j.a.mark((function e(t){var r,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),S(""),g(""),T()){e.next=5;break}return e.abrupt("return");case 5:return r={username:n,password:i},k+"register",e.prev=7,e.next=10,fetch("http://localhost:3001/api/register",{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"POST"});case 10:return s=e.sent,e.next=13,s.json();case 13:if(!(c=e.sent).hasOwnProperty("error")){e.next=17;break}return S(c.error),e.abrupt("return");case 17:return g(c.status),e.next=20,new Promise((function(e){return setTimeout(e,1500)}));case 20:C.push("/login"),console.log(c),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(7),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[7,24]])})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3",children:[Object(d.jsxs)("form",{className:"mt-5",children:[Object(d.jsx)("h1",{className:"mb-4 text-center",children:"Register"}),Object(d.jsxs)("div",{className:"form-group mb-2",children:[Object(d.jsx)("label",{children:"Username"}),Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)},className:"form-control",placeholder:"Enter username"})]}),Object(d.jsxs)("div",{className:"form-group mb-2",children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:i,onChange:function(e){return l(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(d.jsxs)("div",{className:"form-group mb-3",children:[Object(d.jsx)("label",{children:"Confirm Password"}),Object(d.jsx)("input",{type:"password",value:p,onChange:function(e){return O(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(d.jsx)("button",{type:"submit",onClick:function(e){return function(e){return P.apply(this,arguments)}(e)},className:"btn btn-primary",children:"Submit"})]}),v.length>0&&Object(d.jsx)("h5",{className:"mt-3 alert alert-success",children:v}),w.length>0&&Object(d.jsx)("h5",{className:"mt-3 alert alert-danger",children:w})]})})})},w=function(e){e.threadID;var t=e.loadThreads,n=Object(r.useState)(!1),s=Object(o.a)(n,2),c=s[0],a=s[1],i="http://localhost:3001/api/",l=Object(r.useState)(""),b=Object(o.a)(l,2),m=b[0],p=b[1],O=Object(r.useState)(""),x=Object(o.a)(O,2),f=x[0],v=x[1],g=Object(r.useContext)(h).username;function N(){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(j.a.mark((function e(){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:g,content:m,title:f},e.prev=1,e.next=4,fetch(i+"newThread",{body:JSON.stringify(n),headers:{"Content-Type":"application/json"},method:"POST"});case 4:return r=e.sent,e.next=7,r.json();case 7:e.sent,t(),a((function(e){return!e})),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"mb-5",children:c?Object(d.jsxs)("div",{className:"form-group mt-4",children:[Object(d.jsx)("label",{className:"",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("label",{className:"",children:"Content"}),Object(d.jsx)("textarea",{onChange:function(e){return p(e.target.value)},className:"form-control border border-secondary"}),Object(d.jsx)("button",{onClick:N,className:"btn btn-primary mt-2",children:"Submit"})]}):Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){return a((function(e){return!e}))},children:"Add Thread"})})},S=function(e){var t=e.thread,n=t._id,r=t.title,s=t.content;Object(b.f)();return Object(d.jsx)(i.b,{to:"/thread/".concat(n),children:Object(d.jsxs)("div",{className:"border border-primary rounded my-2 p-2",children:[Object(d.jsx)("h4",{children:r}),Object(d.jsx)("p",{children:s})]})})},k=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],c="http://localhost:3001/api/";function a(){return i.apply(this,arguments)}function i(){return(i=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c+"getThreads");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){a()}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"font-weight-bold my-3",children:"Home page"}),n.map((function(e){return Object(d.jsx)(S,{thread:e},e._id)})),Object(d.jsx)(w,{loadThreads:a})]})};n(31);var C=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(d.jsx)(i.a,{children:Object(d.jsxs)(h.Provider,{value:{username:n,setUsername:s},children:[Object(d.jsx)(O,{}),Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/register",children:Object(d.jsx)(y,{})}),Object(d.jsx)(b.a,{path:"/login",children:Object(d.jsx)(f,{})}),Object(d.jsx)(b.a,{path:"/thread/:id",children:Object(d.jsx)(N,{})}),Object(d.jsx)(b.a,{path:"/",children:Object(d.jsx)(k,{})})]}),Object(d.jsx)(x,{})]})})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.44ab44b2.chunk.js.map