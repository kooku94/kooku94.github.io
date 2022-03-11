"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[9434],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,g=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8696:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={title:"Execution Context",date:new Date("2021-05-03T00:00:00.000Z"),cover:"../images/ec-cover.png",tags:["javascript"]},u=void 0,l={permalink:"/blog/execution-context",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/execution-context.md",source:"@site/blog/execution-context.md",title:"Execution Context",description:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \ud575\uc2ec \uac1c\ub150 \uc911 \ud558\ub098\ub85c, \uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uc81c\uacf5\ud560 \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uac1d\uccb4\uc785\ub2c8\ub2e4.",date:"2021-05-03T00:00:00.000Z",formattedDate:"2021\ub144 5\uc6d4 3\uc77c",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:6.6,truncated:!0,authors:[],frontMatter:{title:"Execution Context",date:"2021-05-03T00:00:00.000Z",cover:"../images/ec-cover.png",tags:["javascript"]},prevItem:{title:"Height Performace Animations",permalink:"/blog/height-performace-animations"},nextItem:{title:"Throttling & Debouncing",permalink:"/blog/throttling-debouncing"}},p={authorsImageUrls:[]},f=[],s={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \ud575\uc2ec \uac1c\ub150 \uc911 \ud558\ub098\ub85c, ",(0,a.kt)("strong",{parentName:"p"},"\uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uc81c\uacf5\ud560 \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uac1d\uccb4"),"\uc785\ub2c8\ub2e4.\n\ub3d9\uc77c\ud55c \ud658\uacbd\uc5d0 \uc788\ub294 \ucf54\ub4dc\ub4e4\uc744 \uc2e4\ud589\ud560 \ub54c \ud544\uc694\ud55c \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\uace0 \uc774\ub97c \ucf5c \uc2a4\ud0dd\uc5d0 \uc313\uc544\uc62c\ub838\ub2e4\uac00, \uac00\uc7a5 \uc704\uc5d0 \uc788\ub294 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 \uc2dd\uc73c\ub85c \uc804\uccb4 \ucf54\ub4dc\uc758 \ud658\uacbd\uacfc \uc21c\uc11c\ub97c \ubcf4\uc7a5\ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc11c '\ub3d9\uc77c\ud55c \ud658\uacbd', \uc989 \ud558\ub098\uc758 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc73c\ub85c \uc804\uc5ed\uacf5\uac04, eval() \ud568\uc218, \ud568\uc218 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294 \uc804\uc5ed\uacf5\uac04\uacfc \uc545\ub9c8\ub85c \ucde8\uae09\ubc1b\ub294 eval\uc744 \uc81c\uc678\ud558\uba74 \uc6b0\ub9ac\uac00 \ud754\ud788 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ud568\uc218\ub97c \uc2e4\ud589"),"\ud558\ub294 \uac83 \ubfd0\uc785\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);