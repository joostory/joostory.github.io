(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7983)}])},8810:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=r(8420),o=r(5313);function s(e){var t=e.dateString,r=(0,a.Z)(t);try{var s=(0,o.Z)(r,"yyyy.MM.dd HH:mm");return(0,n.jsx)("time",{dateTime:t,children:s})}catch(l){return console.error(l),(0,n.jsx)("time",{dateTime:t,children:t})}}},6561:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893);function a(){return(0,n.jsx)("footer",{className:"bg-slate-100 border-t border-accent-2 mt-6",children:(0,n.jsx)("div",{className:"py-4 flex flex-col items-center justify-center text-xs text-slate-500",children:(0,n.jsx)("a",{href:"https://twitter.com/@JooStory",children:"@JooStory"})})})}var o=r(9008);function s(){return(0,n.jsx)(o.default,{children:(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})})}function l(e){var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{}),(0,n.jsx)("div",{className:"min-h-screen",children:(0,n.jsx)("main",{children:t})}),(0,n.jsx)(a,{})]})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(c){l=!0,a=c}finally{try{s||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=r(7294))&&o.__esModule?o:{default:o},l=r(1003),c=r(880),i=r(9246);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=s.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,p=o.as,h=s.default.useRef(d),x=s.default.useRef(p),m=e.children,v=e.replace,y=e.shallow,j=e.scroll,g=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var b=(t=s.default.Children.only(m))&&"object"===typeof t&&t.ref,w=a(i.useIntersection({rootMargin:"200px"}),3),N=w[0],_=w[1],S=w[2],E=s.default.useCallback((function(e){x.current===p&&h.current===d||(S(),x.current=p,h.current=d),N(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[p,b,d,S,N]);s.default.useEffect((function(){var e=_&&r&&l.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,a=u[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(n,d,p,{locale:t})}),[p,d,_,g,r,n]);var L={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:s}))}(e,n,d,p,v,y,j,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof g?g:n&&n.locale,M=n&&n.isLocaleDomain&&l.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);L.href=M||l.addBasePath(l.addLocale(p,C,n&&n.defaultLocale))}return s.default.cloneElement(t,L)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7983:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return y},default:function(){return j}});var n=r(5893),a=r(5675),o=r.n(a),s=r(8810),l=(r(4184),r(1664)),c=r.n(l);function i(e){var t=e.title,r=e.coverImage,a=e.date,l=e.excerpt,i=e.slug;return(0,n.jsxs)("div",{children:[(0,n.jsx)(c(),{as:"/posts/".concat(i),href:"/posts/[slug]",children:(0,n.jsxs)("a",{className:"group flex space-x-5",children:[(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("strong",{className:"group-hover:text-yellow-600 font-normal text-lg",children:t}),(0,n.jsx)("p",{className:"text-md leading-relaxed text-slate-600",children:l})]}),r&&(0,n.jsx)("div",{className:"w-32",children:(0,n.jsx)(o(),{src:r,alt:"Cover Image for ".concat(t),layout:"responsive",width:"100vw",height:"100vh"})})]})}),(0,n.jsx)("div",{className:"text-xs mt-4",children:(0,n.jsx)("span",{className:"text-slate-500",children:(0,n.jsx)(s.Z,{dateString:a})})})]})}function u(e){var t=e.posts;return(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"divide-y",children:t.map((function(e){return(0,n.jsx)("div",{className:"py-6",children:(0,n.jsx)(i,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)},e.slug)}))})})}var f=r(6561);function d(){return(0,n.jsxs)("div",{className:"flex flex-col items-center space-y-3",children:[(0,n.jsx)(o(),{src:"/assets/profile.jpg",className:"rounded-full",width:"100",height:"100"}),(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("div",{className:"text-xl",children:"Joo"}),(0,n.jsx)("div",{className:"text-sm text-slate-400",children:"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]})}var p=r(9008),h="JooStory.net",x="\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc744 \ud558\uace0 \uc788\ub294 Joo\uc785\ub2c8\ub2e4.",m="https://joostory.net/assets/og.png";function v(){return(0,n.jsxs)(p.default,{children:[(0,n.jsx)("title",{children:h}),(0,n.jsx)("meta",{name:"description",content:x}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:h}),(0,n.jsx)("meta",{property:"og:description",content:x}),(0,n.jsx)("meta",{property:"og:image",content:m}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:h}),(0,n.jsx)("meta",{name:"twitter:description",content:x}),(0,n.jsx)("meta",{property:"twitter:image",content:m})]})}var y=!0;function j(e){var t=e.allPosts;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(v,{}),(0,n.jsx)("div",{className:"pt-24 pb-20 border-b-[1px]",children:(0,n.jsx)(d,{})}),(0,n.jsx)("div",{className:"max-w-3xl mx-auto mt-6 mb-16",children:t.length>0&&(0,n.jsx)(u,{posts:t})})]})})}},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[494,675,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);