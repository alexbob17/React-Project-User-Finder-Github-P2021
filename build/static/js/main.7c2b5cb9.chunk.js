(this["webpackJsonpgithub-users-app"]=this["webpackJsonpgithub-users-app"]||[]).push([[0],{185:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(18),i=n.n(s),o=n(74),l=n(215),j=n(217),u=n(218),b=n(220),d=n(219),h=n(221),x=n(11),O=Object(l.a)({media:{height:140}}),m=function(e){var t=e.id,n=e.login,a=e.avatar_url,c=e.followers,s=O();return Object(r.jsx)(j.a,{className:s.root,children:Object(r.jsx)(x.a,{to:"/user/".concat(n),children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(d.a,{className:s.media,image:a,title:n}),Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(h.a,{variant:"body1",component:"h3",children:[Object(r.jsx)("i",{className:"fas fa-id-badge"}),"Id: ",Object(r.jsx)("strong",{children:t})]}),Object(r.jsxs)(h.a,{variant:"subtitle1",component:"h4",children:[Object(r.jsx)("i",{className:"fab fa-github"}),"Username:",Object(r.jsx)("strong",{children:n})]}),Object(r.jsxs)(h.a,{variant:"subtitle1",component:"h4",children:[Object(r.jsx)("i",{className:"fas fa-user-friends"}),"Followers:",Object(r.jsxs)("strong",{children:[" ",c]})]})]})]})})})},g=function(e){var t=e.users;return Object(r.jsx)("div",{className:"list-of-user",children:t.map((function(e){return Object(r.jsx)(m,Object(o.a)({},e),e.id)}))})},f=n(9),p=n(13),v=n.n(p),w=n(21),N=function(){var e=Object(w.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(w.a)(v.a.mark((function e(){var t,n,r,a,c,s,i,o,l,j=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.length>0&&void 0!==j[0]?j[0]:{},n=t.keyword,r="https://api.github.com/search/users?q=".concat(n,"&page=1&per_page=10"),e.prev=2,e.next=5,fetch(r);case 5:return a=e.sent,e.next=8,a.json();case 8:if(c=e.sent,s=c.items,i=void 0===s?[]:s,!Array.isArray(i)){e.next=17;break}return o=function(){var e=Object(w.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.map((function(e){return N(e.login)})),e.next=3,Promise.all(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=15,o();case 15:return l=e.sent,e.abrupt("return",l.sort((function(e,t){return e.followers>t.followers?-1:e.followers<t.followers?1:0})));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(){return e.apply(this,arguments)}}();function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{keyword:null},t=e.keyword,n=Object(a.useState)(!1),r=Object(f.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)([]),o=Object(f.a)(i,2),l=o[0],j=o[1];return Object(a.useEffect)((function(){var e=t||localStorage.getItem("lastKeyword")||"random";s(!0),_({keyword:e}).then((function(e){j(e),s(!1),localStorage.setItem("lastKeyword",t)}))}),[t]),{loading:c,users:l}}var k=n(187),S=n(232),B=n(222),I=n(72),C=n.n(I),F=Object(l.a)((function(e){return{root:{padding:"4px 4px",display:"flex",alignItems:"center",width:"100%",maxWidth:"500px",margin:"100px auto"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})),A=function(){var e=F(),t=Object(a.useState)(""),n=Object(f.a)(t,2),c=n[0],s=n[1],i=Object(x.c)(),o=Object(f.a)(i,2),l=(o[0],o[1]),j=function(){return"react"!==c&&!(c.length<4)};return Object(r.jsxs)(k.a,{component:"form",className:e.root,onSubmit:function(e){if(e.preventDefault(),!j())return C.a.fire({title:"Ingrese un usuario valido",text:"".concat(c,", no es un usuario de github"),icon:"error",confirmButtonText:"Ok"});l("/search/".concat(c))},children:[Object(r.jsx)(S.a,{className:e.input,value:c,onChange:function(e){s(e.target.value)},placeholder:"Buscar un usuario",inputProps:{"aria-label":"Buscar un usuario"}}),Object(r.jsx)(B.a,{type:"submit",className:e.iconButton,"aria-label":"search",children:Object(r.jsx)("i",{className:"fas fa-search"})})]})},L=function(){return Object(r.jsx)(x.a,{to:"/",children:Object(r.jsx)("div",{className:"logo",children:Object(r.jsxs)(h.a,{align:"center",variant:"h3",component:"h1",children:[Object(r.jsx)("i",{className:"fab fa-github"}),"Coders"]})})})},E=n(223),P=function(){return Object(r.jsx)("div",{className:"page",children:Object(r.jsx)(E.a,{})})},T=n(73),U=function(e){var t=e.users,n=Object(a.useState)({}),c=Object(f.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){!function(e,t){i({labels:e,datasets:[{label:"Usuarios con mas seguidores ",data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)"],borderWidth:1}]})}(t.map((function(e){return e.login})),t.map((function(e){return e.followers})))}),[t]),Object(r.jsx)("section",{className:"chart__container",children:Object(r.jsx)(T.Bar,{data:s,options:{scales:{yAxes:[{ticks:{beginAtZero:!1}}]},responsive:!0,maintainAspectRatio:!1}})})},q=function(){var e=y(),t=e.loading,n=e.users;return t?Object(r.jsx)(P,{}):Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(L,{}),Object(r.jsx)(A,{}),Object(r.jsx)(U,{users:n}),Object(r.jsx)(h.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Ultima busqueda"}),Object(r.jsx)(g,{users:n})]})},D=function(e){var t=y({keyword:e.params.keyword}),n=t.loading,a=t.users;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(L,{}),Object(r.jsx)(A,{}),Object(r.jsx)(U,{users:a}),Object(r.jsx)(h.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Lista de usuarios"}),n?Object(r.jsx)(P,{}):Object(r.jsx)(g,{users:a})]})},J=function(){var e=Object(w.a)(v.a.mark((function e(t){var n,r,a,c,s,i,o,l,j,u,b,d,h;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.github.com/users/".concat(t),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.next=10,fetch(a.repos_url);case 10:return c=e.sent,e.next=13,c.json();case 13:return s=e.sent,i=a.id,o=a.login,l=a.avatar_url,j=a.location,u=a.followers,b=a.following,d=a.bio,h=a.name,e.abrupt("return",{id:i,login:o,avatar_url:l,location:j,followers:u,following:b,bio:d,name:h,repos:s});case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}();var K=n(225),W=n(229),M=n(228),R=n(224),V=n(226),Z=n(227),z=n(230),G=Object(l.a)({table:{width:"100%",margin:"16px auto"}});function H(e){var t=e.repos,n=G();return Object(r.jsx)(R.a,{component:k.a,className:n.table,children:Object(r.jsxs)(K.a,{"aria-label":"a dense table",children:[Object(r.jsx)(V.a,{children:Object(r.jsxs)(Z.a,{children:[Object(r.jsx)(M.a,{children:"Id"}),Object(r.jsx)(M.a,{align:"left",children:"Nombre"}),Object(r.jsx)(M.a,{align:"center",children:"Forks"}),Object(r.jsx)(M.a,{align:"center",children:"Issues abiertos"}),Object(r.jsx)(M.a,{align:"center",children:"Acci\xf3n"})]})}),Object(r.jsx)(W.a,{children:t&&t.map((function(e){var t=e.id,n=e.name,a=e.forks,c=e.open_issues,s=e.html_url;return Object(r.jsxs)(Z.a,{children:[Object(r.jsx)(M.a,{component:"th",scope:"row",children:t}),Object(r.jsx)(M.a,{align:"left",children:n}),Object(r.jsx)(M.a,{align:"center",children:a}),Object(r.jsx)(M.a,{align:"center",children:c}),Object(r.jsx)(M.a,{align:"center",children:Object(r.jsx)(z.a,{href:s,target:"_blank",color:"primary",children:"Ver"})})]},t)}))})]})})}var Q=n(231),X=function(){return Object(r.jsx)("div",{className:"container button_container",children:Object(r.jsx)(B.a,{children:Object(r.jsx)(x.a,{to:"/",children:Object(r.jsx)("i",{className:"fas fa-times"})})})})},Y=Object(l.a)((function(e){return{divider:{height:20,margin:6}}})),$=function(e){var t=function(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)({}),i=Object(f.a)(s,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){c(!0),J(e).then((function(e){l(e),c(!1)}))}),[e]),{loading:r,user:o}}(e.params.login),n=t.loading,c=t.user,s=Y();return n?Object(r.jsx)(P,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(X,{}),Object(r.jsxs)("div",{className:"profile__container",children:[Object(r.jsx)("figure",{className:"image__container",children:Object(r.jsx)("img",{src:c.avatar_url,alt:c.login})}),Object(r.jsxs)("section",{className:"text__container",children:[Object(r.jsxs)(h.a,{variant:"h5",component:"h3",color:"primary",align:"center",children:["Nombre: ",c.name]}),Object(r.jsxs)("div",{className:"location__container",children:[Object(r.jsxs)(h.a,{variant:"subtitle1",component:"h4",children:[Object(r.jsx)("i",{className:"fab fa-github"}),c.login]}),Object(r.jsx)(Q.a,{className:s.divider,orientation:"vertical"}),c.location&&Object(r.jsxs)(h.a,{variant:"subtitle1",component:"h3",children:[Object(r.jsx)("i",{className:"fas fa-globe-americas"}),c.location]})]}),c.bio&&Object(r.jsx)(h.a,{variant:"body1",component:"h3",color:"textSecondary",align:"center",children:c.bio}),Object(r.jsxs)("div",{className:"metrics__container",children:[Object(r.jsxs)("div",{className:"metrics__item",children:[Object(r.jsx)(h.a,{align:"center",variant:"h5",component:"h2",children:c.followers}),Object(r.jsx)(h.a,{align:"center",color:"textSecondary",gutterBottom:!0,children:"Seguidores"})]}),Object(r.jsxs)("div",{className:"metrics__item",children:[Object(r.jsx)(h.a,{align:"center",variant:"h5",component:"h2",children:c.following}),Object(r.jsx)(h.a,{align:"center",color:"textSecondary",gutterBottom:!0,children:"Siguiendo"})]}),Object(r.jsxs)("div",{className:"metrics__item",children:[Object(r.jsx)(h.a,{align:"center",variant:"h5",component:"h2",children:c.id}),Object(r.jsx)(h.a,{align:"center",color:"textSecondary",gutterBottom:!0,children:"Id"})]})]})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(h.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"Lista de repositorios"}),Object(r.jsx)(H,{repos:c.repos})]})]})},ee=(n(185),function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("section",{children:[Object(r.jsx)(x.b,{path:"/",default:!0,component:q}),Object(r.jsx)(x.b,{path:"/search/:keyword",component:D}),Object(r.jsx)(x.b,{path:"/user/:login",component:$})]})})}),te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ee,{})}),document.getElementById("root")),te()}},[[186,1,2]]]);
//# sourceMappingURL=main.7c2b5cb9.chunk.js.map