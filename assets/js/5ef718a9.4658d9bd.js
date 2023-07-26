"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[3317],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(i,".").concat(g)]||d[g]||s[g]||l;return n?r.createElement(m,u(u({ref:t},p),{},{components:n})):r.createElement(m,u({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,u=new Array(l);u[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<l;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71203:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const l={title:"Throttling & Debouncing",date:new Date("2021-05-03T00:00:00.000Z"),cover:"",tags:["\uc131\ub2a5"],keywords:["\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},u=void 0,a={permalink:"/blog/throttling-debouncing",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/throttling-debouncing.md",source:"@site/blog/throttling-debouncing.md",title:"Throttling & Debouncing",description:"Throttle\uacfc Debounce\ub294 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \uc774\ubca4\ud2b8\ub098 \ud568\uc218\uc758 \uc2e4\ud589 \ube48\ub3c4\ub97c \uc904\uc5ec \uc131\ub2a5\uc0c1\uc5d0 \uc774\uc810\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4.",date:"2021-05-03T00:00:00.000Z",formattedDate:"2021\ub144 5\uc6d4 3\uc77c",tags:[{label:"\uc131\ub2a5",permalink:"/blog/tags/\uc131\ub2a5"}],readingTime:2.63,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Throttling & Debouncing",date:"2021-05-03T00:00:00.000Z",cover:"",tags:["\uc131\ub2a5"],keywords:["\uc131\ub2a5","\uc544\ud0a4\ud14d\ucc98","\ud504\ub860\ud2b8\uc5d4\ub4dc \uc544\ud0a4\ud14d\ucc98","\uc6f9 \uc131\ub2a5"]},prevItem:{title:"Execution Context",permalink:"/blog/execution-context"},nextItem:{title:"Use WebP images",permalink:"/blog/use-webp-images"}},i={authorsImageUrls:[]},c=[{value:"Throttling",id:"throttling",level:2},{value:"Debouncing",id:"debouncing",level:2},{value:"Throttle \uacfc Debounce\uc758 \ucc28\uc774\uc810",id:"throttle-\uacfc-debounce\uc758-\ucc28\uc774\uc810",level:2},{value:"\uad6c\ud604",id:"\uad6c\ud604",level:2},{value:"Sample Code",id:"sample-code",level:3},{value:"Throttle",id:"throttle",level:3},{value:"Debounce",id:"debounce",level:3},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Throttle\uacfc Debounce\ub294 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \uc774\ubca4\ud2b8\ub098 \ud568\uc218\uc758 \uc2e4\ud589 \ube48\ub3c4\ub97c \uc904\uc5ec \uc131\ub2a5\uc0c1\uc5d0 \uc774\uc810\uc744 \uac00\uc838\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"throttling"},"Throttling"),(0,o.kt)("p",null,"Throttle\uc740 \uc77c\uc815 \uc8fc\uae30\uc5d0 \uc5ec\ub7ec\ubc88 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\ub97c \ud55c \ubc88\ub9cc \uc2e4\ud589\uc2dc\ud0a4\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"debouncing"},"Debouncing"),(0,o.kt)("p",null,"Debounce\ub294 \uc5ec\ub7ec\ubc88 \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc5d0\uc11c \uac00\uc7a5 \ub9c8\uc9c0\ub9c9 \uc774\ubca4\ud2b8\ub9cc \uc2e4\ud589\uc2dc\ud0a4\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"throttle-\uacfc-debounce\uc758-\ucc28\uc774\uc810"},"Throttle \uacfc Debounce\uc758 \ucc28\uc774\uc810"),(0,o.kt)("p",null,"Debounce\ub294 \uc785\ub825\uc774 \ub05d\ub0a0\ub54c\uae4c\uc9c0 \ubb34\ud55c\uc801\uc73c\ub85c \uae30\ub2e4\ub9ac\uc9c0\ub9cc Throttle\uc740 \uc785\ub825\uc774 \uc2dc\uc791\ub418\uba74 \uc77c\uc815 \uc8fc\uae30\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uad6c\ud604"},"\uad6c\ud604"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uc785\ub825\uc5d0 \ub530\ub978 \uc790\ub3d9\uc644\uc131 \ucf54\ub4dc\ub85c \uc608\uc2dc\ub97c \ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("h3",{id:"sample-code"},"Sample Code"),(0,o.kt)("p",null,"\ub9cc\uc57d \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"\uc548\ub155\ud558\uc138\uc694")," \ub77c\uace0 \uc785\ub825\ud588\uc744 \ub54c api\ub294 \ucd1d 12\ubc88 \ud638\ucd9c\ub418\uac8c \ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const handleKeyup = (e) => {\n  const value = e.target.value;\n  fetch(`https://api.com/search?value=${value}`)\n    .then((res) => {\n      return res.json();\n    })\n    .then((res) => console.log(res));\n};\n\ndocument.getElementById("input").addEventListener("keyup", handleKeyup);\n')),(0,o.kt)("h3",{id:"throttle"},"Throttle"),(0,o.kt)("p",null,"\ud0a4\uac00 \uc785\ub825\ub418\uc5c8\uc744 \ub54c\ub9c8\ub2e4 api\uac00 \ud638\ucd9c\ub418\ub294\uac83\uc774 \uc544\ub2cc 0.5s \ub9c8\ub2e4 api\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let throttle = null;\n\nfunction getAutoComplete(value) {\n  fetch(`https://api.com/search?value=${value}`)\n    .then((res) => {\n      return res.json();\n    })\n    .then((res) => console.log(res));\n}\n\nconst handleKeyup = (e) => {\n  const value = e.target.value;\n  if (!throttle) {\n    throttle = setTimeout(() => {\n      throttle = null;\n      getAutoComplete(value);\n    }, 500);\n  }\n};\n\ndocument.getElementById("input").addEventListener("keyup", handleKeyup);\n')),(0,o.kt)("h3",{id:"debounce"},"Debounce"),(0,o.kt)("p",null,"\ud0a4\uac00 \uc785\ub825\ub418\ub294 \uc774\ubca4\ud2b8\uac00 \ub05d\ub098\uace0 0.2s \ub3d9\uc548 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub2e4\uba74 api\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let debounce = null;\n\nfunction getAutoComplete(value) {\n  fetch(`https://api.com/search?value=${value}`)\n    .then((res) => {\n      return res.json();\n    })\n    .then((res) => console.log(res));\n}\n\nconst handleKeyup = (e) => {\n  const value = e.target.value;\n  if (debounce) {\n    clearTimeout(debounce);\n  }\n\n  debounce = setTimeout(() => {\n    getAutoComplete(value);\n  }, 200);\n};\n\ndocument.getElementById("input").addEventListener("keyup", handleKeyup);\n')),(0,o.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,o.kt)("p",null,"Throttling \uacfc Debouncing \uc740 \uc131\ub2a5\uc744 \ub192\ud790 \uc218 \uc788\ub294 \uc815\ub9d0 \uc720\uc6a9\ud55c \uae30\ubc95\uc785\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 autocomplete\ub97c \uc608\uc2dc\ub85c \ub4e4\uc5c8\uc9c0\ub9cc \uc9c0\ub3c4 api\ub4f1\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub54c \ub9e4\uc6b0 \ub192\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \uacbd\ud5d8\ud560 \uc218 \uc788\uc744 \uac83\uc774\ub77c \uc0dd\uac01\ub429\ub2c8\ub2e4.\nunderscore ",(0,o.kt)("inlineCode",{parentName:"p"},"_.debounce")," \uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"_.throttle")," \uc744 \uc0ac\uc6a9\ud558\uba74 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \uc9c1\uc811 \uad6c\ud604\ud574\ubcf4\uba74\uc11c \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \ud655\uc778\ud574\ubcfc \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);