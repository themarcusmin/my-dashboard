(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{83:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(0),c=n.n(o),r=n(6),s=n(13),i=function(e){return e<10?"0"+e:e},l=function(){var e=(new Date).getHours()%12,t=(new Date).getMinutes()%60,n=(new Date).getSeconds()%60,c=(new Date).toLocaleTimeString().slice(-2),r=Object(o.useState)(e),l=Object(s.a)(r,2),u=l[0],d=l[1],h=Object(o.useState)(t),f=Object(s.a)(h,2),j=f[0],b=f[1],O=Object(o.useState)(n),m=Object(s.a)(O,2),g=m[0],S=m[1],p=Object(o.useState)(!1),v=Object(s.a)(p,2),w=v[0],x=v[1],k=(new Date).toDateString(),M=Object(o.useRef)(),N=Object(o.useRef)(),y=Object(o.useRef)();return M.current=g,N.current=j,y.current=w,Object(o.useEffect)((function(){var e=setInterval((function(){S((function(e){return(e+1)%60})),M.current||(b((function(e){return(e+1)%60})),x((function(e){return!0}))),!N.current&&y.current&&(d((function(e){return(e+1)%12})),x((function(e){return!1})))}),1e3);return function(){return clearInterval(e)}}),[]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{className:"clock f-subheadline lh-title",children:[i(u)," : ",i(j)," : ",i(g)," ",c]}),Object(a.jsx)("h3",{className:"dateTime f-subheadline lh-solid",children:k})]})},u=n(48),d=n(49),h=n(50),f=n(58),j=n(57),b=document.getElementById("modal"),O=function(e){var t=e.children,n=Object(o.useRef)(null);if(!n.current){var c=document.createElement("div");n.current=c}return Object(o.useEffect)((function(){return b.appendChild(n.current),function(){return b.removeChild(n.current)}}),[]),Object(r.createPortal)(Object(a.jsx)("div",{children:t}),n.current)},m=n.p+"static/media/email.282df571.svg",g=n(39),S=n.n(g),p=n(20);Object(g.init)(Object({NODE_ENV:"production",PUBLIC_URL:"/dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).EMAILJS_API);var v=function(e,t,n){if(0!==e.length)if(function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e).toLowerCase())}(e))if(0!==n.length){var a={recipient:e,today:t,message:function(e){return 1===e.length?e[0]:e.join("    |    ")}(n)};S.a.send("service_t04xzk6","template_form",a).then((function(){return p.NotificationManager.success("Mail Sent..","Success",4e3)}),(function(e){return p.NotificationManager.error(e.text)}))}else p.NotificationManager.error("No available tasks!","Error",4e3);else p.NotificationManager.error("Invalid Email Address!","Error",4e3)},w=n(51),x=n.n(w),k=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={showModal:!1,tasks:[],newtask:"",showMailModal:!1,defaultCardPosition:{x:0,y:0}},a.handleKeyDown=function(e){e.ctrlKey&&13===e.keyCode&&a.toggleModal()},a.toggleModal=function(){return a.setState({showModal:!a.state.showModal})},a.updateTask=function(){var e=document.getElementById("newtask").value;e&&a.setState({tasks:[].concat(Object(u.a)(a.state.tasks),[e])})},a.toggleMailModal=function(){return a.setState({showMailModal:!a.state.showMailModal})},a.sendMail=function(){var e=document.getElementById("recipientMail").value;v(e,(new Date).toDateString(),a.state.tasks)},a.delay=function(e){return new Promise((function(t){return setTimeout(t,e)}))},a.strikeThrough=function(e){e.target.checked?(document.getElementById(e.target.value).style.textDecoration="line-through",a.delay(5e3).then((function(){return a.setState({tasks:a.state.tasks.filter((function(t){return t!=e.target.value}))})}))):document.getElementById(e.target.value).style.textDecoration="none"},a.handleDraggable=function(e,t){var n={x:e,y:t};a.setState({defaultCardPosition:n});var o=JSON.stringify({x:e,y:t});window.localStorage.setItem("cardPosition",o)},a.inputRef=c.a.createRef(),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("tasks"));e&&this.setState({tasks:e});var t=JSON.parse(localStorage.getItem("cardPosition"));t&&this.setState({defaultCardPosition:t})}},{key:"componentDidUpdate",value:function(){var e=this,t=JSON.stringify(this.state.tasks);localStorage.setItem("tasks",t),(this.state.showModal||this.state.showMailModal)&&setTimeout((function(){return e.inputRef.current.focus()}),1),this.state.showMailModal?document.removeEventListener("keydown",this.handleKeyDown):document.addEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.state,n=t.showModal,o=t.tasks,c=t.showMailModal,r=t.defaultCardPosition;return Object(a.jsx)(x.a,{position:r,onStop:function(t,n){return e.handleDraggable(n.x,n.y)},children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{onClick:function(){return e.toggleMailModal()},src:m,className:"emailIcon",alt:"Mail Icon"}),Object(a.jsx)("form",{className:"pa4",onSubmit:function(t){t.preventDefault(),e.toggleModal()},children:Object(a.jsxs)("div",{id:"current_todos",className:"bn",children:[Object(a.jsx)("h2",{children:"Things to do: "}),o.length>0?o.map((function(t){return Object(a.jsxs)("div",{className:"flex items-center mb-2 eachTodo",children:[Object(a.jsx)("input",{onChange:function(t){return e.strikeThrough(t)},type:"checkbox",value:t,className:"mr2"}),Object(a.jsx)("label",{htmlFor:t,id:t,className:"lh-copy",children:t})]},t)})):Object(a.jsx)("div",{children:"You're chillin"}),Object(a.jsx)("button",{className:"addTodo",children:"Add New Task"})]})}),n?Object(a.jsx)(O,{children:Object(a.jsx)("div",{children:Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.updateTask(),e.toggleModal()},className:"modalForm",children:Object(a.jsx)("input",{id:"newtask",type:"input",className:"form_field",placeholder:"New Task",autoComplete:"off",ref:this.inputRef})})})}):null,c?Object(a.jsx)(O,{children:Object(a.jsx)("div",{children:Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.sendMail(),e.toggleMailModal()},className:"modalForm",children:Object(a.jsx)("input",{id:"recipientMail",type:"input",className:"form_field",placeholder:"Send to...",autoComplete:"off",ref:this.inputRef})})})}):null]})})}}]),n}(o.Component),M=n(55),N=n(101),y=n(102),D=n(54),I=n.n(D),E=n(53),T=n.n(E),_=function(e){var t=e.handlePhotoData,n=JSON.parse(window.localStorage.getItem("liked"))||!1,c=Object(o.useState)(n),r=Object(s.a)(c,2),i=r[0],l=r[1];return Object(o.useEffect)((function(){window.localStorage.setItem("liked",i),t(i)}),[i]),Object(a.jsx)("div",{className:"heart_checkbox",children:Object(a.jsx)(y.a,{control:Object(a.jsx)(N.a,{checked:i,onChange:function(){return l(!i)},icon:Object(a.jsx)(T.a,{}),checkedIcon:Object(a.jsx)(I.a,{className:"whiteHeart"}),name:"heart"}),label:"I love what I'm seeing"})})},C=Object(M.a)({accessKey:Object({NODE_ENV:"production",PUBLIC_URL:"/dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).UNSPLASH_API}),P=function(){var e=JSON.parse(window.localStorage.getItem("photo"))||null,t=JSON.parse(window.localStorage.getItem("photoDescription"))||"",n=Object(o.useState)(e),c=Object(s.a)(n,2),r=c[0],i=c[1],l=Object(o.useState)(t),u=Object(s.a)(l,2),d=u[0],h=u[1];Object(o.useEffect)((function(){return!r&&C.photos.getRandom({query:"nature"}).then((function(e){i(e.response.urls.full),h(e.response.location.name)})).catch((function(){return console.error})),function(){return console.log("cleanup")}}),[]);return document.body.style.backgroundImage="url(".concat(r,")"),Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)(_,{handlePhotoData:function(e){e?(window.localStorage.setItem("photo",JSON.stringify(r)),window.localStorage.setItem("photoDescription",JSON.stringify(d))):(window.localStorage.setItem("photo",null),window.localStorage.setItem("photoDescription",null))}}),Object(a.jsx)("div",{children:d})]})},R=(n(81),function(){return Object(a.jsxs)("div",{className:"bg2",children:[Object(a.jsx)(l,{}),Object(a.jsx)(k,{}),Object(a.jsx)(P,{}),Object(a.jsx)(p.NotificationContainer,{})]})});Object(r.render)(Object(a.jsx)(R,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.94afc3fb.chunk.js.map