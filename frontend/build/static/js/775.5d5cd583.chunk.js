"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[775],{7999:function(e,n,t){var s=t(4165),a=t(5861),c=(t(2791),t(2652),t(7689)),r=t(1243),i=t(3959),l=t(184);n.Z=function(e){var n=e.image,t=e.title,o=e.description,d=(e.image2,e.description2,e.image3,e.description3,e.category),u=e.isUser,g=e.blogId,h=e.slug,p=(0,c.s0)(),m=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.Z.delete("https://mern-backend-pi.vercel.app/api/blog/deleteblog/".concat(g)).then((function(e){})).catch((function(e){console.log(e)}));case 3:window.location.reload(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"oneBlog",children:[(0,l.jsxs)("div",{className:"oneBlogTop",children:[n&&(0,l.jsx)(i.ZP,{className:"oneBlogLazy",height:233,once:!0,children:(0,l.jsx)("img",{src:n,alt:"Blog_post_image"})}),(0,l.jsxs)("div",{className:"oneBlogTop1",children:[(0,l.jsx)("h2",{className:"oneBlogHeading",children:t}),(0,l.jsx)("p",{children:o}),(0,l.jsxs)("p",{className:"catPara",children:[" Category : ",(0,l.jsxs)("span",{className:"catSpan",children:[" ",d]}),"  "]})]})]}),u&&(0,l.jsxs)("div",{className:"oneBlogBottom",children:[(0,l.jsx)("button",{onClick:function(){p("/createblog/".concat(h))},className:"btn1",children:"Edit"}),(0,l.jsx)("button",{onClick:m,className:"btn2",children:"Delete"})]})]})})}},8775:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var s=t(9439),a=t(2791),c=t(4165),r=t(5861),i=t(1243),l=(t(2652),t(7999)),o=t(1087),d=t(184),u=function(e){var n=e.currentPage,t=e.setCurrentPage,u=(0,a.useState)([]),g=(0,s.Z)(u,2),h=g[0],p=g[1],m=(0,a.useState)(!1),x=(0,s.Z)(m,2),f=x[0],j=x[1],v=(0,a.useState)(1),b=(0,s.Z)(v,2),N=b[0],B=b[1],Z=function(){var e=(0,r.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,i.Z.get("https://mern-backend-pi.vercel.app/api/blog?page=".concat(n,"&limit=20")).then((function(e){p(e.data.blogs),B(e.data.totalPages),j(!1)})).catch((function(e){console.log(e),j(!1)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){Z()}),[n]);var k,w=localStorage.getItem("userid"),P=localStorage.getItem("user");return(0,a.useEffect)((function(){window.scrollTo(0,0)}),[n]),0===h.length?(0,d.jsx)("h2",{className:"allBlogsErrorHeading",children:"LOADING"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:"allBlogsHeading",children:"ALL BLOGS"}),f&&(0,d.jsx)("h2",{className:"loading",children:"Loading..."}),(0,d.jsxs)("div",{className:"allBlogs",children:[h&&h.map((function(e,n){return(0,d.jsx)("div",{children:(0,d.jsx)(l.Z,{blogId:e._id,isUser:w===e.user._id&&P,image:e.image,title:e.title,description:(0,d.jsxs)(o.OL,{to:"/blog/".concat(e.slug),children:[" ",(0,d.jsx)("button",{className:"readMoreBtn",children:"Read More"}),"  "]}),image2:e.image2,description2:e.description2,image3:e.image3,description3:e.description3,category:e.category,slug:e.slug})},e._id)})),k]}),h&&(0,d.jsxs)("div",{className:"pageBtns",children:[(0,d.jsx)("button",{className:"prevBtn",onClick:function(){n>1&&t(n-1)},disabled:1===n,children:"Prev"}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:n}),"OF",(0,d.jsx)("span",{children:N})]}),(0,d.jsx)("button",{className:"nextBtn",onClick:function(){n<N&&t(n+1)},disabled:n===N,children:"Next"})]})]})},g=function(e,n){return e.currentPage===n.currentPage},h=a.memo(u,g),p=t(7691),m=t(7638),x=t(6907),f=a.memo(m.Z),j=function(){var e=(0,a.useState)(1),n=(0,s.Z)(e,2),t=n[0],c=n[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x.ql,{children:(0,d.jsx)("title",{children:"All Blogs | Literature Alley "})}),(0,d.jsx)(p.Z,{}),(0,d.jsx)(h,{currentPage:t,setCurrentPage:c}),(0,d.jsx)(f,{})]})}}}]);
//# sourceMappingURL=775.5d5cd583.chunk.js.map