(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{9808:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(8662)}])},8810:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(5893),a=n(8420),s=n(5313);function i(t){var e=t.dateString,n=(0,a.Z)(e);try{var i=(0,s.Z)(n,"yyyy.MM.dd HH:mm");return(0,r.jsx)("time",{dateTime:e,children:i})}catch(o){return console.error(o),(0,r.jsx)("time",{dateTime:e,children:e})}}},9454:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(5893);function a(t){var e=t.children;return(0,r.jsx)("div",{className:"w-[650px] mx-auto mt-6 mb-16",children:e})}},6561:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(5893);function a(){return(0,r.jsx)("footer",{className:"bg-slate-100 border-t border-accent-2 mt-6",children:(0,r.jsx)("div",{className:"py-4 flex flex-col items-center justify-center text-xs text-slate-500",children:(0,r.jsx)("a",{href:"https://twitter.com/@JooStory",children:"@JooStory"})})})}var s=n(9008);function i(){return(0,r.jsx)(s.default,{children:(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})})}function o(t){var e=t.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:e})}),(0,r.jsx)(a,{})]})}},8662:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return y},default:function(){return b}});var r=n(5893),a=n(1163),s=n(2918),i=n(6561),o=n(1664),c=n.n(o),l=n(8810);function u(t){var e=t.children;return(0,r.jsx)("h1",{className:"font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center text-3xl",children:e})}function d(t){var e=t.title,n=t.date,a=t.tags;return(0,r.jsxs)("div",{className:"pt-40 pb-36 px-20 border-b-[1px] relative",children:[(0,r.jsx)(u,{children:e}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("em",{className:"text-sm",children:(0,r.jsx)(l.Z,{dateString:n})})}),(0,r.jsx)("div",{className:"flex justify-center space-x-2",children:a.map((function(t){return(0,r.jsx)(c(),{as:"/tags/".concat(t),href:"/tags/[tag]",children:(0,r.jsx)("a",{className:"group",children:(0,r.jsx)("span",{className:"text-xs text-slate-500 group-hover:text-yellow-400",children:t},t)})},t)}))})]})}function m(t){var e=t.content;return(0,r.jsx)("div",{className:"pt-10 pb-20 mx-auto",children:(0,r.jsx)("article",{dangerouslySetInnerHTML:{__html:e},className:"prose"})})}var x=n(9008);function g(t){var e=t.title,n=t.summary,a=t.ogImage;return(0,r.jsxs)(x.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:image",content:a.url}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:e}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{property:"twitter:image",content:a.url})]})}var p=n(7294);function h({id:t,repo:e,repoId:a,category:s,categoryId:i,mapping:o,term:c,reactionsEnabled:l,emitMetadata:u,inputPosition:d,theme:m,lang:x,loading:g}){return(0,p.useEffect)((()=>{n.e(904).then(n.bind(n,904))}),[]),(0,r.jsx)("giscus-widget",{id:t,repo:e,repoid:a,category:s,categoryid:i,mapping:o,term:c,reactionsenabled:l,emitmetadata:u,inputposition:d,theme:m,lang:x,loading:g})}function j(){return(0,r.jsx)("div",{className:"pt-0 pb-20 mx-auto",children:(0,r.jsx)(h,{id:"comments",repo:"joostory/joostory.github.io",repoId:"MDEwOlJlcG9zaXRvcnkxOTk2MjkxNQ==",category:"General",categoryId:"DIC_kwDOATCcI84COuRD",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:"light",lang:"ko",loading:"lazy",crossOrigin:"anonymous",async:!0})})}var f=n(9454);function v(t){var e=t.title,n=t.content,i=t.tags,o=t.summary,c=t.ogImage,l=t.coverImage,u=t.date;return(0,a.useRouter)().isFallback||e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{title:e,summary:o,ogImage:c}),(0,r.jsx)(d,{title:e,date:u,tags:i,coverImage:l,author:{name:"Joo"}}),(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(m,{content:n}),(0,r.jsx)(j,{})]})]}):(0,r.jsx)(s.default,{statusCode:404})}var y=!0;function b(t){var e=t.post;return(0,a.useRouter)().isFallback||(null===e||void 0===e?void 0:e.slug)?(0,r.jsx)(i.Z,{children:(0,r.jsx)(v,{title:e.title,content:e.content,summary:e.excerpt,ogImage:e.ogImage,author:e.author,tags:e.tags,coverImage:e.coverImage,date:e.date})}):(0,r.jsx)(s.default,{statusCode:404})}},2918:function(t,e,n){t.exports=n(67)},1163:function(t,e,n){t.exports=n(880)}},function(t){t.O(0,[395,774,888,179],(function(){return e=9808,t(t.s=e);var e}));var e=t.O();_N_E=e}]);