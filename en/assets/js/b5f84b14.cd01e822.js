"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[7290],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6411:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(3117),o=r(102),l=(r(7294),r(3905)),i=["components"],a={title:"Render-Blocking CSS",date:new Date("2021-04-11T00:00:00.000Z"),cover:"",tags:["\uc131\ub2a5"],keywords:["\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},c=void 0,u={permalink:"/en/blog/render-blocking-css",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/render-blocking-css.md",source:"@site/blog/render-blocking-css.md",title:"Render-Blocking CSS",description:"\uae30\ubcf8\uc801\uc73c\ub85c CSS\ub294 rendering-blocking resource\uc785\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uac00 \ub80c\ub354\ub9c1\uc744 \ud558\uae30 \uc704\ud55c render tree\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 DOM tree \uc640 CSSOM\uc774 \ubaa8\ub450 \ud544\uc694\ud569\ub2c8\ub2e4. CSSOM\uc774 \ub9cc\ub4e4\uc5b4\uc9c0\uc9c0 \uc54a\uc558\ub2e4\uba74 render tree\ub3c4 \ub9cc\ub4e4\uc218\uac00 \uc5c6\ub294\uac70\uc8e0.",date:"2021-04-11T00:00:00.000Z",formattedDate:"April 11, 2021",tags:[{label:"\uc131\ub2a5",permalink:"/en/blog/tags/\uc131\ub2a5"}],readingTime:1.41,truncated:!0,authors:[],frontMatter:{title:"Render-Blocking CSS",date:"2021-04-11T00:00:00.000Z",cover:"",tags:["\uc131\ub2a5"],keywords:["\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},prevItem:{title:"DOMContentLoaded vs onLoad",permalink:"/en/blog/domcontentloaded-vs-onload"},nextItem:{title:"Resource Priority",permalink:"/en/blog/resource-priority"}},s={authorsImageUrls:[]},p=[{value:"media=&quot;all&quot;",id:"mediaall",level:3},{value:"media=&quot;print&quot;",id:"mediaprint",level:3},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2},{value:"Reference",id:"reference",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c CSS\ub294 rendering-blocking resource\uc785\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uac00 \ub80c\ub354\ub9c1\uc744 \ud558\uae30 \uc704\ud55c render tree\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 DOM tree \uc640 CSSOM\uc774 \ubaa8\ub450 \ud544\uc694\ud569\ub2c8\ub2e4. CSSOM\uc774 \ub9cc\ub4e4\uc5b4\uc9c0\uc9c0 \uc54a\uc558\ub2e4\uba74 render tree\ub3c4 \ub9cc\ub4e4\uc218\uac00 \uc5c6\ub294\uac70\uc8e0. ",(0,l.kt)("br",null),"\nCSS\uac00 \uc0ac\uc6a9 \uac00\ub2a5\ud574\uc9c8 \ub54c\uae4c\uc9c0(CSSOM\uc774 \ub9cc\ub4e4\uc5b4\uc9c8 \ub54c\uae4c\uc9c0)\ub80c\ub354\ub9c1\uc774 \ucc28\ub2e8\ub418\uae30\uc5d0 ",(0,l.kt)("strong",{parentName:"p"},"media type"),"\uacfc ",(0,l.kt)("strong",{parentName:"p"},"media query"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<link href="style.css" rel="stylesheet" />\n<link href="print.css" rel="stylesheet" media="print" />\n<link href="other.css" rel="stylesheet" media="(min-width: 40em)" />\n')),(0,l.kt)("p",null,"\uccab \ubc88\uc9f8 \uc904\uc740 \ud56d\uc0c1 \ub80c\ub354\ub9c1\uc744 \ucc28\ub2e8\ud569\ub2c8\ub2e4. \ubc18\uba74\uc5d0 \ub450 \ubc88\uc9f8 stylesheet \ub294 \ucf58\ud150\uce20\uac00 \uc778\uc1c4\ub420 \ub54c\ub9cc \ub80c\ub354\ub9c1\uc744 \ucc28\ub2e8\ud569\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9 stylesheet\ub294 \ube0c\ub77c\uc6b0\uc800\uac00 \uc2e4\ud589\ud558\ub294 ",(0,l.kt)("strong",{parentName:"p"},"media query"),"\uc640 \uc77c\uce58\ud560 \ub54c \ube0c\ub77c\uc6b0\uc800\uac00 \ub80c\ub354\ub9c1\uc744 \ucc28\ub2e8\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"mediaall"},'media="all"'),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:r(4130).Z,width:"1752",height:"770"})),(0,l.kt)("h3",{id:"mediaprint"},'media="print"'),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:r(881).Z,width:"1758",height:"778"})),(0,l.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,l.kt)("p",null,"styleseet \uc124\uc815\uc73c\ub85c \uc131\ub2a5\uc744 \ub192\ud790 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \ub80c\ub354\ub9c1\uc744 \ube60\ub974\uac8c \ud558\uae30 \uc704\ud55c \ud55c \uac00\uc9c0 \ud301\uc73c\ub85c\ub9cc \uc0dd\uac01\ud558\uba74 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css"},"Render-Blocking CSS :: developer.google.com"))))}m.isMDXComponent=!0},4130:function(e,t,r){t.Z=r.p+"assets/images/media-all-16cc6792b91533b0b29ec880a2d3cdc5.png"},881:function(e,t,r){t.Z=r.p+"assets/images/media-print-457b7996999368c4e0c94254af83074f.png"}}]);