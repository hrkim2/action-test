(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(293)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},c=r(6273),l=r(387),u=r(7190);var s={};function d(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),o=i.default.useMemo((function(){var t=a(c.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),f=o.href,h=o.as,m=e.children,p=e.replace,v=e.shallow,g=e.scroll,b=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var y=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,x=a(u.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],k=i.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);i.default.useEffect((function(){var e=j&&r&&c.isLocalURL(f),t="undefined"!==typeof b?b:n&&n.locale,a=s[f+"%"+h+(t?"%"+t:"")];e&&!a&&d(n,f,h,{locale:t})}),[h,f,j,b,r,n]);var E={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:i}))}(e,n,f,h,p,v,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(f)&&d(n,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof b?b:n&&n.locale,O=n&&n.isLocaleDomain&&c.getDomainLocale(h,N,n&&n.locales,n&&n.domainLocales);E.href=O||c.addBasePath(c.addLocale(h,N,n&&n.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(l){c=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,s=o.useRef(),d=a(o.useState(!1),2),f=d[0],h=d[1],m=a(o.useState(t?t.current:null),2),p=m[0],v=m[1],g=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),u.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(a);var t=u.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:p,rootMargin:r}))}),[n,p,r,f]);return o.useEffect((function(){if(!c&&!f){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&v(t.current)}),[t]),[g,f]};var o=r(7294),i=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},293:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),a=r(1163),o=r(7294),i=r(1664),c=function(e){var t=e.menu,r=e.activePath,a=void 0===r?"":r,c="dropdown_",l=(0,o.useState)("hidden"),u=l[0],s=l[1],d=t.name,f=t.url,h=t.children,m=a.startsWith(f)?"text-highlight":"",p=h.map((function(e){return e.part})).filter((function(e,t,r){return t===r.indexOf(e)})).map((function(e,t){return(0,n.jsxs)("ul",{className:"py-1 text-sm dark:text-efefef",children:[e&&""!==e.trim()&&(0,n.jsx)("span",{className:"pl-2 text-black text-xs font-bold",children:e}),h.filter((function(t){return t.part===e})).map((function(e,r){var o=a.startsWith("".concat(f).concat(e.url))?"bg-light text-white":"";return(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:"".concat(f).concat(e.url),children:(0,n.jsx)("a",{className:"block py-2 px-4 ".concat(o," hover:bg-light/20 duration-300 dark:hover:bg-gray-600 dark:hover:text-white"),children:e.name})})},"".concat(t,"-").concat(r))}))]},"ul-".concat(t))}));return(0,o.useEffect)((function(){var e=function(t){var r=t.target;r.dataset.dropdownFor!=="".concat(c).concat(d)&&null===r.closest("#".concat(c).concat(d))&&(s("hidden"),window.removeEventListener("click",e))};window.addEventListener("click",e)}),[u]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{"data-dropdown-for":"".concat(c).concat(d),className:"flex justify-between items-center py-2 pr-4 pl-3 w-full ".concat(m," font-medium border-b border-white hover:border-light duration-500 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700"),onClick:function(){return s("hidden"===u?"":"hidden")},children:[d," \ud83d\uddc2"]}),(0,n.jsx)("div",{id:"".concat(c).concat(d),className:"".concat(u," relative md:absolute z-0 md:z-10 w-auto bg-white rounded divide-y divide-light/70 bg-efefef/20 md:bg-white md:shadow mx-5 my-2 md:m-0 dark:bg-gray-700 dark:divide-gray-600"),children:p})]})},l=function(e){var t=e.menuList,r=e.activePath,a=(0,o.useState)("hidden"),l=a[0],u=a[1],s=t.map((function(e,t){var a=r.startsWith(e.url)?"text-highlight":"";return(0,n.jsx)("li",{children:e.children&&e.children.length>0?(0,n.jsx)(c,{menu:e,activePath:r}):(0,n.jsx)(i.default,{href:e.url,children:(0,n.jsxs)("a",{className:"block py-2 pr-4 pl-3 ".concat(a," border-b border-white hover:border-light duration-500 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700"),children:[e.name," \ud83d\udcc4"]})})},"".concat(t,"_0"))}));return(0,o.useEffect)((function(){var e=function(){window.innerWidth<768?u("hidden"):(u(""),window.addEventListener("resize",e))};window.addEventListener("resize",e)}),[l]),(0,n.jsx)("nav",{className:"py-1 px-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700",children:(0,n.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{className:"flex items-center",children:(0,n.jsx)("span",{className:"self-center text-xl text-default font-bold whitespace-nowrap dark:text-white",children:"MERRI`s DEVELOG"})})}),(0,n.jsxs)("button",{type:"button",className:"inline-flex justify-center items-center ml-3 rounded-lg md:hidden px-1 focus:outline-none focus:ring-2 focus:ring-light/20 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500",onClick:function(){return u("hidden"===l?"":"hidden")},children:[(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),"\ud83d\udcda"]}),(0,n.jsx)("div",{className:"".concat(l," w-full border-b border-efefef md:border-0 md:block md:w-auto"),children:(0,n.jsx)("ul",{className:"divide-y divide-efefef flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:divide-x md:divide-white",children:s})})]})})},u=JSON.parse('[{"name":"Blog","url":"/blog","children":[{"part":"FRONT","name":"Javascript","url":"/js"},{"part":"FRONT","name":"React","url":"/react"},{"part":"FRONT","name":"CSS","url":"/css"},{"part":"BACK","name":"Spring","url":"/spring"},{"part":"BACK","name":"Oracle","url":"/oracle"},{"part":"TOOLs","name":"Git","url":"/git"}]},{"name":"Portfolio","url":"/portfolio"},{"name":"About","url":"/about"},{"name":"Test","url":"/test","children":[{"name":"test1","url":"/test1"}]}]'),s=(0,n.jsx)("div",{className:"aside-non-role h-full flex-auto w-2"}),d=function(e){var t=e.asPath,r=e.children,a=(0,o.useState)(""),i=a[0],c=a[1],d=(0,o.useState)(0),f=d[0],h=d[1],m=(0,o.useState)("mt-5"),p=m[0],v=m[1];return(0,o.useEffect)((function(){var e=function(){var e=window.innerHeight,t=document.querySelector(".mainArea").clientHeight;v(e-150>t?"fixed bottom-0 w-full":"mt-5")};window.addEventListener("resize",e),e()}),[p,r]),(0,o.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY;c(e>36&&f>=e?"z-10 fixed top-0 w-full shadow":""),h(e)})),h(window.scrollY)}),[f]),(0,n.jsxs)("div",{className:"text-black",children:[(0,n.jsx)("header",{className:i,children:(0,n.jsx)(l,{menuList:u,activePath:t})}),(0,n.jsxs)("div",{className:"mainArea flex flex-row",children:[s,(0,n.jsx)("main",{className:"px-3 w-full lg:w-[1000px] my-4 flex-none",children:r}),s]}),(0,n.jsxs)("footer",{className:"p-5 bg-default ".concat(p," w-full text-white tracking-widest"),children:[(0,n.jsx)("div",{children:"\ud83d\udce7m3rri17@gmail.com"}),(0,n.jsx)("div",{children:"\xa92022 KimHyeRi. All rights reserved."})]})]})};r(472);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}var m=function(e){var t=e.Component,r=e.pageProps,o=(0,a.useRouter)().asPath;return(0,n.jsx)(d,{asPath:o,children:(0,n.jsx)(t,h({},r))})}},472:function(){},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);