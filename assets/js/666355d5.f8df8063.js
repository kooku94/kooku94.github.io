"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[3471],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4099:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],c={title:"HTTP Caching",date:new Date("2021-08-22T00:00:00.000Z"),cover:"",tags:["\uc131\ub2a5"],keywords:["http cache","caching","\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},i=void 0,p={permalink:"/blog/http-caching",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/http-caching.md",source:"@site/blog/http-caching.md",title:"HTTP Caching",description:"https://developer.mozilla.org/ko/docs/Web/HTTP/Caching \uae00\uc744 \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.",date:"2021-08-22T00:00:00.000Z",formattedDate:"2021\ub144 8\uc6d4 22\uc77c",tags:[{label:"\uc131\ub2a5",permalink:"/blog/tags/\uc131\ub2a5"}],readingTime:6.305,truncated:!0,authors:[],frontMatter:{title:"HTTP Caching",date:"2021-08-22T00:00:00.000Z",cover:"",tags:["\uc131\ub2a5"],keywords:["http cache","caching","\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},prevItem:{title:"\uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8",permalink:"/blog/\uc7ac\uc0ac\uc6a9-\uac00\ub2a5\ud55c-\ucef4\ud3ec\ub10c\ud2b8"},nextItem:{title:"React\uac00 Class Component\uc5d0\uc11c Functional Component\ub85c \ud328\ub7ec\ub2e4\uc784\uc744 \uc804\ud658\ud55c \uc774\uc720",permalink:"/blog/react\uac00-class-component\uc5d0\uc11c-functional-component\ub85c-\ud328\ub7ec\ub2e4\uc784\uc744-\uc804\ud658\ud55c-\uc774\uc720"}},u={authorsImageUrls:[]},s=[{value:"<code>Cache-control</code> \ud5e4\ub354",id:"cache-control-\ud5e4\ub354",level:2},{value:"\uce90\uc2dc\ud558\uc9c0 \uc54a\uc74c",id:"\uce90\uc2dc\ud558\uc9c0-\uc54a\uc74c",level:3},{value:"\uce90\uc2dc\ud558\uc9c0\ub9cc \uc7ac\uac80\uc99d",id:"\uce90\uc2dc\ud558\uc9c0\ub9cc-\uc7ac\uac80\uc99d",level:3},{value:"\uc0ac\uc124 \uce90\uc2dc\uc640 \uacf5\uac1c \uce90\uc2dc",id:"\uc0ac\uc124-\uce90\uc2dc\uc640-\uacf5\uac1c-\uce90\uc2dc",level:3},{value:"\ub9cc\ub8cc",id:"\ub9cc\ub8cc",level:3},{value:"\uac80\uc99d",id:"\uac80\uc99d",level:3},{value:"\uc720\ud6a8\uc131(Freshness)",id:"\uc720\ud6a8\uc131freshness",level:2},{value:"\uce90\uc2dc \uac80\uc99d",id:"\uce90\uc2dc-\uac80\uc99d",level:2},{value:"ETags",id:"etags",level:3},{value:"Example",id:"example",level:2},{value:"200 (from memory cache)(from disk cache)",id:"200-from-memory-cachefrom-disk-cache",level:3},{value:"memory cache vs disk cache",id:"memory-cache-vs-disk-cache",level:4},{value:"304 (Not Modified)",id:"304-not-modified",level:3},{value:"Reference",id:"reference",level:2}],d={toc:s};function m(e){var t=e.components,c=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/HTTP/Caching"},"https://developer.mozilla.org/ko/docs/Web/HTTP/Caching")," \uae00\uc744 \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("p",null,"\ube60\ub978 \uc6f9\uc0ac\uc774\ud2b8 \ub85c\ub529(First load times)\uc744 \uc704\ud55c \ubc29\ubc95\ub4e4\uc740 \uc5ec\ub7ec\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WebCache"),(0,o.kt)("li",{parentName:"ul"},"Code Compress"),(0,o.kt)("li",{parentName:"ul"},"Lazy loading"),(0,o.kt)("li",{parentName:"ul"},"Critical Rendering Path"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"\uc774\uc911 Http Caching\uc5d0 \ub300\ud574 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\nHTTP \uce90\uc2dc\ub4e4\uc740 \uc77c\ubc18\uc801\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),"\uc5d0 \ub300\ud55c \uc751\ub2f5\ub9cc\uc744 \uce90\uc2f1\ud569\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),"\uc774 REST\uc801 \uc758\ubbf8\ub85c \uac00\uc838\uc624\ub2e4\uc774\uae30 \ub54c\ubb38\uc5d0, \uac00\uc838\uc628 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud574\ub450\uace0 \ub450\uace0\ub450\uace0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c 200(\uc131\uacf5), 301(\ub2e4\ub978 \uc8fc\uc18c\ub85c \uc774\ub3d9 \ud6c4 \uac00\uc838\uc634), 404(\uac00\uc838\uc62c\uac8c \uc5c6\uc74c) \uc0c1\ud0dc \ucf54\ub4dc\ub85c \uc628 \uc751\ub2f5\uc744 \uce90\uc2f1\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"cache-control-\ud5e4\ub354"},(0,o.kt)("inlineCode",{parentName:"h2"},"Cache-control")," \ud5e4\ub354"),(0,o.kt)("p",null,"\uce90\uc2dc \uc815\ucc45\ub4e4\uc744 \uc815\uc758\ud560 \ub54c \uc4f0\ub294 \ud5e4\ub354\uc785\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\uce90\uc2dc\ud558\uc9c0-\uc54a\uc74c"},"\uce90\uc2dc\ud558\uc9c0 \uc54a\uc74c"),(0,o.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc694\uccad \ud639\uc740 \uc751\ub2f5\uc5d0 \ub300\ud574 \uc5b4\ub5a4 \uac83\ub3c4 \uc800\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Cache-Control: no-store\n")),(0,o.kt)("h3",{id:"\uce90\uc2dc\ud558\uc9c0\ub9cc-\uc7ac\uac80\uc99d"},"\uce90\uc2dc\ud558\uc9c0\ub9cc \uc7ac\uac80\uc99d"),(0,o.kt)("p",null,"\uce90\uc2dc\ub97c \uc0ac\uc6a9\ud558\uae30 \uc804\uc5d0 \uc11c\ubc84\uc5d0\uac8c \uc774 \uce90\uc2dc \uc9c4\uc9dc \uc368\ub3c4 \ub418\ub294\uc9c0 \ubb3c\uc5b4\ubd05\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Cache-Control: no-cache\n")),(0,o.kt)("h3",{id:"\uc0ac\uc124-\uce90\uc2dc\uc640-\uacf5\uac1c-\uce90\uc2dc"},"\uc0ac\uc124 \uce90\uc2dc\uc640 \uacf5\uac1c \uce90\uc2dc"),(0,o.kt)("p",null,'"public"\uc740 \uc5b4\ub5a4 \uce90\uc2dc(CDN)\uc5d0 \uc758\ud574\uc11c\ub4e0\uc9c0 \uce90\uc2dc\ub418\uc5b4\ub3c4 \uc88b\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4.'),(0,o.kt)("p",null,'"private"\ub294 \uacf5\uc720 \uce90\uc2dc\uc5d0 \uc800\uc7a5\ub418\uc5b4\uc11c\ub294 \uc548\ub41c\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4.(\ube0c\ub77c\uc6b0\uc800)'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Cache-Control: private\nCache-Control: public\n")),(0,o.kt)("h3",{id:"\ub9cc\ub8cc"},"\ub9cc\ub8cc"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"max-age"),"\\\n\ub9ac\uc18c\uc2a4\uac00 \uc720\ud6a8\ud558\ub2e4\uace0 \ud310\ub2e8\ub418\ub294 \ucd5c\ub300 \uc2dc\uac04\uc744 \ub9d0\ud569\ub2c8\ub2e4. \uc694\uccad \uc2dc\uac04\uc5d0 \uc0c1\ub300\uc801\uc774\uba70, ",(0,o.kt)("inlineCode",{parentName:"p"},"Expires"),"\uac00 \uc124\uc815\ub418\uc5b4 \uc788\uc5b4\ub3c4 \uadf8\ubcf4\ub2e4 \uc6b0\uc120\ud569\ub2c8\ub2e4. \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc744 \ud30c\uc77c\uc5d0 \ub300\ud574 \uae34\uc2dc\uac04 \uce90\uc2f1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c\ub4e4\uc5b4 \uc774\ubbf8\uc9c0, CSS \ud30c\uc77c, JS\ud30c\uc77c\uacfc \uac19\uc740 \uc815\uc801 \ud30c\uc77c\ub4e4\uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Cache-Control: max-age=3153600\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Age"),"\\\nAge \ud5e4\ub354\ub294 \uce90\uc2dc \uc751\ub2f5 \ub54c \ub098\ud0c0\ub098\ub294\ub370, max-age \uc2dc\uac04 \ub0b4\uc5d0\uc11c \uc5bc\ub9c8\ub098 \ud758\ub838\ub294\uc9c0 \ucd08 \ub2e8\uc704\ub85c \uc54c\ub824\uc90d\ub2c8\ub2e4.\nmax-age\ub97c 1\uc2dc\uac04\uc73c\ub85c \uc124\uc815\ud55c \ud6c4 1\ubd84\uc774 \uc9c0\ub098\uba74"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Cache-Control: max-age=3600\nAge: 60\n")),(0,o.kt)("p",null,"\uc774 \uce90\uc2dc \uc751\ub2f5 \ud5e4\ub354\uc5d0 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expires"),"\\\nCache-Control\uacfc \ubcc4\uac1c\ub85c \uc751\ub2f5\uc5d0 Expires\ub77c\ub294 \ud5e4\ub354\ub97c \uc904 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\\\nresponse contents\uac00 \uc5b8\uc81c \ub9cc\ub8cc\ub418\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\uba70, Cache-Control\uc758 max-age\uac00 \uc788\ub294 \uacbd\uc6b0 \uc774 \ud5e4\ub354\ub294 \ubb34\uc2dc\ub429\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\uac80\uc99d"},"\uac80\uc99d"),(0,o.kt)("p",null,"\ub9cc\ub8cc\ub41c \uce90\uc2dc\uba74 \uc11c\ubc84\uc5d0\uc11c \ud655\uc778\uc744 \ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Cache-Control: must-revalidate\n")),(0,o.kt)("h2",{id:"\uc720\ud6a8\uc131freshness"},"\uc720\ud6a8\uc131(Freshness)"),(0,o.kt)("p",null,"\ub9ac\uc18c\uc2a4\uac00 \uce90\uc2dc\uc5d0 \uc800\uc7a5\ub418\uace0 \ub098\uba74 \uc774\ub860\uc801\uc73c\ub85c\ub294 \uc601\uc6d0\ud788 \uce90\uc2dc\uc5d0 \uc758\ud574 \uc11c\ube44\uc2a4\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uce90\uc2dc\ub294 \uc720\ud55c\ud55c \uc800\uc7a5\uacf5\uac04\uc744 \uac00\uc9c0\ubbc0\ub85c \uc8fc\uae30\uc801\uc73c\ub85c \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\uc11c \uc81c\uac70\ub418\ub294\ub370 \uc774\ub97c \uce90\uc2dc\ucd95\ucd9c(cache eviction)\uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub9cc\ub8cc\uc2dc\uac04 \uc774\uc804\uc758 \ub9ac\uc18c\uc2a4\ub294 \uc720\ud6a8\ud558\ub2e4(fresh)\ub77c\uace0 \ubd80\ub974\uace0, \ub9cc\ub8cc\uc2dc\uac04 \uc774\ud6c4\uc758 \ub9ac\uc18c\uc2a4\ub294 \uc2e4\ud6a8(stale)\ub410\ub2e4\uace0 \uc774\uc57c\uae30 \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uce90\uc2dc\uac00 \uc2e4\ud6a8\ub41c \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud574 \uc694\uccad\uc744 \ubc1b\uc558\uc744 \ub54c(max-age \ucd08\uacfc, no-cache, must-revalidate) \ub9ac\uc18c\uc2a4\uac00 \uc544\uc9c1 \uc720\ud6a8\ud55c\uc9c0 \uc544\ub2cc\uc9c0\ub97c \ud655\uc778\ud558\uace0, \uc720\ud6a8\ud558\ub2e4\uba74 \uc11c\ubc84\ub294 \uc694\uccad\ub41c \ub9ac\uc18c\uc2a4 \ubcf8\ubb38\uc744 \uc804\uc1a1\ud558\uc9c0 \uc54a\uace0 304(Not Modified)\ud5e4\ub354\ub97c \ub3cc\ub824\ubcf4\ub0b4 \ub300\uc5ed\ud3ed\uc744 \uc808\uc57d\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uce90\uc2dc-\uac80\uc99d"},"\uce90\uc2dc \uac80\uc99d"),(0,o.kt)("p",null,"\uce90\uc2dc\ub41c \ub9ac\uc18c\uc2a4\uc758 \ub9cc\ub8cc\uc2dc\uac04\uc774 \uac00\uae4c\uc6cc\uc9c0\uba74, \ub9ac\uc18c\uc2a4\ub97c \uac80\uc99d\ud558\uac70\ub098 \ub2e4\uc2dc \ubd88\ub7ec\uc624\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"etags"},"ETags"),(0,o.kt)("p",null,"HTTP \ucee8\ud150\uce20\uac00 \ubc14\ub00c\uc600\ub294\uc9c0\ub97c \uac80\uc0ac\ud560 \uc218 \uc788\ub294 \ud0dc\uadf8\uc785\ub2c8\ub2e4. \uac19\uc740 \uc8fc\uc18c\uc758 \uc790\uc6d0\uc774\ub354\ub77c\ub3c4 \ucee8\ud150\uce20\uac00 \ub2ec\ub77c\uc84c\ub2e4\uba74 ETag\uac00 \ub2e4\ub985\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"200-from-memory-cachefrom-disk-cache"},"200 (from memory cache)(from disk cache)"),(0,o.kt)("p",null,"max-age\uac00 \uac70\uc758 \ubb34\ud55c\uc774\uace0, age\ub3c4 \ub9ce\uc774 \ud750\ub974\uc9c0 \uc54a\uc558\uae30\uc5d0 \uc720\ud6a8\ud55c \ub9ac\uc18c\uc2a4\ub77c memory\uc5d0 \uc788\ub294 \ub9ac\uc18c\uc2a4(\uce90\uc2dc\ub41c \ub9ac\uc18c\uc2a4)\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud55c\ub2e4."),(0,o.kt)("h4",{id:"memory-cache-vs-disk-cache"},"memory cache vs disk cache"),(0,o.kt)("p",null,"\ube0c\ub77c\uc6b0\uc800\uac00 \uce90\uc2dc\ub97c \uc0ac\uc6a9\ud560 \ub54c memory\uc5d0 \uc800\uc7a5\ub418\uc5b4 \uc788\ub294 \uce90\uc2dc\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 disk\uc5d0 \uc800\uc7a5\ub41c \uce90\uc2dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. memory\ub294 \ucd5c\uadfc\uc5d0 \uc0ac\uc6a9\ud588\ub2e4\uba74 \uc788\uc744 \uac83\uc774\uace0 \uadf8\ub807\uc9c0\uc54a\ub2e4\uba74 disk\uc5d0 \uc788\uc744 \uac83\uc774\ub2e4."),(0,o.kt)("p",null,"disk\uac00 memory\ubcf4\ub2e4 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \uc18d\ub3c4\uac00 \ub290\ub9ac\uae30\uc5d0 \ub2f9\uc5f0\ud788 \uc18d\ub3c4 \ucc28\uc774\uac00 \ub09c\ub2e4. (memory: 0ms, disk: 3ms)"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"cache-memory-disk",src:n(2277).Z,width:"1790",height:"314"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[General]\nRequest URL: https://abcd.com/a.js\nRequest Method: GET\nStatus Code: 200  (from memory cache)\nRemote Address: 54.192.175.42:443\nReferrer Policy: strict-origin-when-cross-origin\n\n[Response Headers]\naccept-ranges: bytes\nage: 34710\ncache-control: public, max-age=31536000, immutable\ncontent-encoding: gzip\ncontent-type: application/javascript; charset=UTF-8\ndate: Thu, 19 Aug 2021 04:48:26 GMT\netag: W/"1ffd7-17b5cba00f8"\nlast-modified: Thu, 19 Aug 2021 04:44:59 GMT\nserver: CloudFront\nvary: Accept-Encoding\nvia: 1.1 f681dbff28feeb503e3ad2f4be29ead3.cloudfront.net (CloudFront)\nx-amz-cf-id: Lcm5rnqwYZiSzQT9XETch79qqg6XHOpATvBUWVnefT4VlI2CNs9Veg==\nx-amz-cf-pop: ICN55-C1\nx-cache: Hit from cloudfront\n')),(0,o.kt)("h3",{id:"304-not-modified"},"304 (Not Modified)"),(0,o.kt)("p",null,"max-age=0 \uc774\ub77c \ucee8\ud150\uce20\uac00 \uc720\ud6a8\ud55c\uc9c0 sever\ub85c \uc7ac\uac80\uc99d\uc744 \ud558\uac8c \ub41c\ub2e4. \ud558\uc9c0\ub9cc CloudFront\uc5d0 \uc800\uc7a5\ub41c \ub9ac\uc18c\uc2a4 ETag \uc77c\uce58\ud558\ubbc0\ub85c \uc11c\ubc84\uc758 \ub9ac\uc18c\uc2a4\uac00 \uac31\uc2e0\ub418\uc9c0 \uc54a\uc558\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uace0 304 status code\ub97c \ubcf4\ub0b4\uc5b4 \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc800\uc7a5\ub41c \uce90\uc2dc\ub97c \uc7ac\uc0ac\uc6a9\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[General]\nRequest URL: https://abcd.com/a.png\nRequest Method: GET\nStatus Code: 304\nRemote Address: 54.192.175.42:443\nReferrer Policy: strict-origin-when-cross-origin\n\n[Response Headers]\naccept-ranges: bytes\ncache-control: public, max-age=0\ndate: Thu, 19 Aug 2021 14:27:09 GMT\netag: W/"82cc92-17b5cb83408"\nlast-modified: Thu, 19 Aug 2021 04:43:01 GMT\nserver: CloudFront\nvia: 1.1 f681dbff28feeb503e3ad2f4be29ead3.cloudfront.net (CloudFront)\nx-amz-cf-id: OgTtmM59-0C7A8KfeXsoiUWBrAduM1CHuVZnjHNFuFzPy6BgS7Datg==\nx-amz-cf-pop: ICN55-C1\nx-cache: Miss from cloudfront\n')),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/HTTP/Caching"},"https://developer.mozilla.org/ko/docs/Web/HTTP/Caching"))))}m.isMDXComponent=!0},2277:function(e,t,n){t.Z=n.p+"assets/images/cache-memory-disk-f62f848bb5f0505d0bdf02955a2a6a9d.png"}}]);