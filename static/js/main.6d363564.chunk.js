(this["webpackJsonpmovie-nom"]=this["webpackJsonpmovie-nom"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),o=a(16),i=a.n(o),s=(a(87),a(7)),l=a(14),j=(a(88),a(144)),h=a(149),d=a(41),b=a(5),u=a(148),m=a(159),O=a(146),f=Object(j.a)((function(e){return{title:{textAlign:"center",textShadow:"1px 1px #0000002b",color:function(e){return{color:e.color}}}}})),g=function(e){var t=f();return Object(n.jsx)(O.a,{className:t.title,variant:e.variant,component:e.component,children:e.children})},x=Object(b.a)((function(e){return{root:{width:96,height:50,padding:2,display:"flex",overflow:"initial"},switchBase:{padding:0,color:"#fff","&$checked":{transform:"translateX(48px)",color:"white","& + $track":{opacity:1,backgroundColor:"#39603D"}}},thumb:{width:48,height:50,boxShadow:"none"},track:{border:"1px solid #A3BCB6",borderRadius:32,opacity:1,backgroundColor:"#A3BCB6"},checked:{}}}))(m.a);function p(e){var t=r.a.useState({checkedA:!0,checkedB:!0,checkedC:!1}),a=Object(l.a)(t,2),c=a[0],o=a[1];return Object(n.jsx)(u.a,{children:Object(n.jsx)(O.a,{component:"div",children:Object(n.jsxs)(h.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(n.jsx)(h.a,{item:!0,children:Object(n.jsx)(g,{variant:"h5",component:"h4",children:"Search"})}),Object(n.jsx)(h.a,{item:!0,children:Object(n.jsx)(x,{checked:c.checkedC,onChange:function(t){e.handleTitleChange(!c.checkedC),o(Object(s.a)(Object(s.a)({},c),{},Object(d.a)({},t.target.name,t.target.checked)))},name:"checkedC"})}),Object(n.jsx)(h.a,{item:!0,children:Object(n.jsx)(g,{variant:"h5",component:"h4",children:"Noms"})})]})})})}var v=Object(j.a)((function(e){return{root:{flexGrow:1,height:"22vh",width:"100%",overflow:"hidden",marginTop:64,backgroundColor:"#DADED4",color:"#3C403D"},bigHeader:{padding:e.spacing(2),textAlign:"center",color:"#3C403D"}}})),S=function(e){var t=v(),a=r.a.useRef(!1),c=r.a.useState({title:"Search for Movies"}),o=Object(l.a)(c,2),i=o[0],j=o[1];return r.a.useEffect((function(){void 0!==e.gold&&(a.current=e.gold,j(Object(s.a)(Object(s.a)({},i),{},{gold:a.current})))}),[e.gold]),Object(n.jsx)("div",{className:t.root,children:Object(n.jsxs)(h.a,{container:!0,spacing:3,children:[Object(n.jsx)(h.a,{item:!0,xs:3,children:Object(n.jsx)(p,{handleTitleChange:function(t){t?(j(Object(s.a)(Object(s.a)({},i),{},{title:"Your Nominations"})),e.handleSwitch(!1)):(j(Object(s.a)(Object(s.a)({},i),{},{title:"Search for Movies"})),e.handleSwitch(!0))}})}),Object(n.jsx)(h.a,{item:!0,xs:6,className:t.bigHeader,children:Object(n.jsx)(g,{variant:"h2",component:"h2",children:i.title})}),Object(n.jsx)(h.a,{item:!0,xs:3,children:(i.gold,Object(n.jsxs)(g,{variant:"h4",component:"h4",children:[e.totalNominations,"/5 ",Object(n.jsx)("br",{}),"Nominations"]}))})]})})},k=a(150),y=a(160),N=a(158),w=Object(j.a)((function(e){return{root:{margin:"64px 0px",color:"white",textShadow:"1px 1px #0000001b"},form:{margin:0,color:"white"},input:{fontWeight:"bold"}}})),C=function(e){var t=w(),a=r.a.useState(),c=Object(l.a)(a,2),o=c[0],i=c[1];return Object(n.jsx)("form",{className:t.root,noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),0!==o.searchValue.length&&e.handleSearch(o.searchValue)},children:Object(n.jsxs)(k.a,{variant:"outlined",fullWidth:!0,className:t.form,children:[Object(n.jsx)(y.a,{htmlFor:"component-outlined",color:"primary",children:"Search"}),Object(n.jsx)(N.a,{className:t.input,id:"component-outlined",onChange:function(e){i(Object(s.a)(Object(s.a)({},o),{},{searchValue:e.target.value}))},label:"Search",color:"primary"})]})})},D=a(53),I=a(152),T=a(71),E=a.n(T),A=a(151),F=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(A.a,{variant:"contained",color:"secondary",onClick:e.click,children:Object(n.jsx)(O.a,{style:{color:"white"},children:"Nominate"})})})},B=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(A.a,{variant:"contained",color:"default",onClick:e.click,children:Object(n.jsx)(O.a,{style:{color:"black"},children:"Remove"})})})},P=Object(j.a)((function(e){return{root:{textAlign:"center"},poster:{objectFit:"contain !important"},textDiv:{height:"12vh"},paper:{padding:8}}}));function J(e){var t=P(),a=r.a.useState({imdbID:e.data.imdbID,Title:e.data.Title,Year:e.data.Year,Poster:e.data.Poster,isNominated:!1}),c=Object(l.a)(a,2),o=c[0],i=c[1];return r.a.useEffect((function(){null!==localStorage.getItem(JSON.stringify(o.imdbID))&&i(Object(s.a)(Object(s.a)({},o),{},{isNominated:!0}))}),[]),Object(n.jsx)(h.a,{item:!0,xs:4,children:Object(n.jsxs)(I.a,{elevation:1,className:t.paper,variant:"elevation",children:[Object(n.jsxs)("div",{className:t.textDiv,children:[Object(n.jsx)(g,{variant:"h5",component:"h5",children:e.data.Title}),Object(n.jsx)(O.a,{children:e.data.Year})]}),Object(n.jsx)(E.a,{className:t.poster,src:e.data.Poster,alt:e.data.Title+"'s Movie Poster",animationDuration:"1000"}),Object(n.jsx)("br",{}),!0===o.isNominated?Object(n.jsx)(B,{click:function(){localStorage.removeItem(JSON.stringify(o.imdbID)),i(Object(s.a)(Object(s.a)({},o),{},{isNominated:!1})),e.calcNoms()}}):Object(n.jsx)(F,{click:function(){Object.keys(localStorage).length>=5!==!0&&(localStorage.setItem(JSON.stringify(o.imdbID),JSON.stringify({imdbID:o.imdbID,Title:o.Title,Year:o.Year,Poster:o.Poster})),i(Object(s.a)(Object(s.a)({},o),{},{isNominated:!0})),console.log(Object.keys(localStorage)),e.calcNoms())}}),Object(n.jsx)("br",{})]})},e.data.imdbID)}var Y=Object(j.a)((function(e){return{root:{textAlign:"center"}}}));function M(e){var t=e.children,a=Y();return Object(n.jsx)("div",{className:a.root,children:Object(n.jsx)(h.a,{container:!0,spacing:4,children:t})})}var G=Object(j.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),V=function(e){G();var t,a,c=[],o=[],i=[];if(e.results&&!0===e.display){e.results.data.Search&&(t=e.results.data.Search.length,a=e.results.data.Search);for(var s=0;s<t;s++)c.push(Object(n.jsx)(J,{data:a[s],calcNoms:e.calcNoms})),3===c.length?(o.push(c),c=[]):t===s+1&&o.push(c);var l,j=Object(D.a)(o);try{for(j.s();!(l=j.n()).done;){var h=l.value;i.push(Object(n.jsx)(M,{children:h}))}}catch(O){j.e(O)}finally{j.f()}}else if(e.nominations){t=e.nominations.length,a=e.nominations;for(var d=0;d<t;d++)c.push(Object(n.jsx)(J,{data:a[d],calcNoms:e.calcNoms})),3===c.length?(o.push(c),c=[]):t===d+1&&o.push(c);var b,u=Object(D.a)(o);try{for(u.s();!(b=u.n()).done;){var m=b.value;i.push(Object(n.jsx)(M,{children:m}))}}catch(O){u.e(O)}finally{u.f()}}return Object(n.jsx)(r.a.Fragment,{children:i})},z=a(153),H=a(155),R=a(75),_=a(154),L=a(72),W=a.n(L);var $=a(73),X=a.n($),q=a(74),K=a.n(q),Q=Object(j.a)((function(e){return{link:{"&:hover, &:focus, &:visited, &:active":{textDecoration:"none",color:"#39603D"}}}})),U=function(){var e=Q();return Object(n.jsx)("footer",{style:{margin:"8vh 0",textAlign:"center"},children:Object(n.jsxs)(O.a,{variant:"h6",children:[Object(n.jsx)("a",{className:e.link,target:"_blank",rel:"noreferrer",href:"https://cochranc.com",children:"Cochranc.com"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{className:e.link,target:"_blank",rel:"noreferrer",href:"https://twitter.com/intent/tweet?text=https%3A//chrscchrn.github.io/ShopifyFrontEnd/",children:Object(n.jsx)(X.a,{})})," ",Object(n.jsx)("a",{className:e.link,target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A//chrscchrn.github.io/ShopifyFrontEnd/",children:Object(n.jsx)(K.a,{})})]})})},Z=a(156),ee=a(157);function te(e){return Object(n.jsx)(ee.a,Object(s.a)({elevation:6,variant:"filled"},e))}var ae=Object(j.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(4)}}}}));function ne(e){var t=ae(),a=r.a.useState(!1),c=Object(l.a)(a,2),o=c[0],i=c[1],s=r.a.useState({open:!1,vertical:"top",horizontal:"center"}),j=Object(l.a)(s,2),h=j[0],d=(j[1],h.vertical),b=h.horizontal;r.a.useEffect((function(){i(e.open)}),[e.open]);var u=function(t,a){"clickaway"!==a&&(i(!1),e.close())};return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(Z.a,{open:o,autoHideDuration:6e3,onClose:u,anchorOrigin:{vertical:d,horizontal:b},children:Object(n.jsx)(te,{onClose:u,severity:e.severity,children:e.message})},d+b)})}var ce=Object(R.a)({palette:{primary:{light:"#DCE1E3",main:"#3C403D",dark:"#002884",contrastText:"#000"},secondary:{light:"#ff7961",main:"#39603D",dark:"#ba000d",contrastText:"#000"},gold:{main:"#a69344"}}});function re(){var e=r.a.useState({results:null,display:!1,isSearching:!0,nominations:null}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=r.a.useState({message:null,severity:null,open:!1}),i=Object(l.a)(o,2),j=i[0],h=i[1];function d(){5===Object.keys(localStorage).length?(c(Object(s.a)(Object(s.a)({},a),{},{totalNominations:Object.keys(localStorage).length,makeNumberGold:!0})),h({message:"You've hit the limit of 5 nominations. Check them out by clicking the switch.",severity:"success",open:!0})):c(Object(s.a)(Object(s.a)({},a),{},{totalNominations:Object.keys(localStorage).length,makeNumberGold:!1}))}return r.a.useEffect((function(){if(a.results)switch(a.results.data.Error){case"Too many results.":case"Movie not found!":h({message:a.results.data.Error,severity:"error",open:!0})}}),[a,a.results]),r.a.useEffect((function(){d()}),[]),Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(z.a,{}),Object(n.jsxs)(_.a,{theme:ce,children:[Object(n.jsxs)(H.a,{fixed:!0,children:[Object(n.jsx)(S,{handleSwitch:function(e){if(e)c(Object(s.a)(Object(s.a)({},a),{},{isSearching:!0,nominations:null}));else{for(var t=[],n=0;n<Object.keys(localStorage).length;n++)t.push(JSON.parse(localStorage.getItem(localStorage.key(n))));c(Object(s.a)(Object(s.a)({},a),{},{isSearching:!1,results:null,nominations:t}))}},totalNominations:a.totalNominations,gold:a.makeNumberGold}),a.isSearching?Object(n.jsx)(C,{handleSearch:function(e){var t;(t=e,W.a.get("https://www.omdbapi.com/?apikey=".concat("7037cccb","&type=movie&s=").concat(t))).then((function(e){e.data&&c(Object(s.a)(Object(s.a)({},a),{},{results:e,display:!0}))})).catch((function(e){return console.log(e)}))}}):null,Object(n.jsx)(V,{results:a.results,nominations:a.nominations,display:a.display,calcNoms:d})]}),Object(n.jsx)(ne,{message:j.message,severity:j.severity,open:j.open,close:function(){h(Object(s.a)(Object(s.a)({},j),{},{open:!1}))}}),Object(n.jsx)(U,{})]})]})}var oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,161)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(re,{})}),document.getElementById("root")),oe()},87:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.6d363564.chunk.js.map