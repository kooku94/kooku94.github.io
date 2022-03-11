"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[3288],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return v}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),v=a,s=d["".concat(c,".").concat(v)]||d[v]||u[v]||i;return t?r.createElement(s,o(o({ref:n},m),{},{components:t})):r.createElement(s,o({ref:n},m))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1234:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={title:"Execution Context",date:new Date("2021-05-03T00:00:00.000Z"),cover:"../images/ec-cover.png",tags:["javascript"]},c=void 0,p={permalink:"/en/blog/execution-context",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/execution-context.md",source:"@site/blog/execution-context.md",title:"Execution Context",description:"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \ud575\uc2ec \uac1c\ub150 \uc911 \ud558\ub098\ub85c, \uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uc81c\uacf5\ud560 \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uac1d\uccb4\uc785\ub2c8\ub2e4.",date:"2021-05-03T00:00:00.000Z",formattedDate:"May 3, 2021",tags:[{label:"javascript",permalink:"/en/blog/tags/javascript"}],readingTime:6.6,truncated:!0,authors:[],frontMatter:{title:"Execution Context",date:"2021-05-03T00:00:00.000Z",cover:"../images/ec-cover.png",tags:["javascript"]},prevItem:{title:"Height Performace Animations",permalink:"/en/blog/height-performace-animations"},nextItem:{title:"Throttling & Debouncing",permalink:"/en/blog/throttling-debouncing"}},m={authorsImageUrls:[]},u=[{value:"Lexical Environment",id:"lexical-environment",level:2},{value:"Environment Recode",id:"environment-recode",level:3},{value:"Outer Environment Reference",id:"outer-environment-reference",level:3},{value:"Variable Environment",id:"variable-environment",level:2},{value:"Variable Environment vs Lexical Environment",id:"variable-environment-vs-lexical-environment",level:3},{value:"ThisBinding",id:"thisbinding",level:2},{value:"Reference",id:"reference",level:2}],d={toc:u};function v(e){var n=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uac00\uc7a5 \uc911\uc694\ud55c \ud575\uc2ec \uac1c\ub150 \uc911 \ud558\ub098\ub85c, ",(0,i.kt)("strong",{parentName:"p"},"\uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uc81c\uacf5\ud560 \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544\ub193\uc740 \uac1d\uccb4"),"\uc785\ub2c8\ub2e4.\n\ub3d9\uc77c\ud55c \ud658\uacbd\uc5d0 \uc788\ub294 \ucf54\ub4dc\ub4e4\uc744 \uc2e4\ud589\ud560 \ub54c \ud544\uc694\ud55c \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \ubaa8\uc544 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\uace0 \uc774\ub97c \ucf5c \uc2a4\ud0dd\uc5d0 \uc313\uc544\uc62c\ub838\ub2e4\uac00, \uac00\uc7a5 \uc704\uc5d0 \uc788\ub294 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 \uc2dd\uc73c\ub85c \uc804\uccb4 \ucf54\ub4dc\uc758 \ud658\uacbd\uacfc \uc21c\uc11c\ub97c \ubcf4\uc7a5\ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc11c '\ub3d9\uc77c\ud55c \ud658\uacbd', \uc989 \ud558\ub098\uc758 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc73c\ub85c \uc804\uc5ed\uacf5\uac04, eval() \ud568\uc218, \ud568\uc218 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\ub294 \uc804\uc5ed\uacf5\uac04\uacfc \uc545\ub9c8\ub85c \ucde8\uae09\ubc1b\ub294 eval\uc744 \uc81c\uc678\ud558\uba74 \uc6b0\ub9ac\uac00 \ud754\ud788 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc740 ",(0,i.kt)("strong",{parentName:"p"},"\ud568\uc218\ub97c \uc2e4\ud589"),"\ud558\ub294 \uac83 \ubfd0\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud55c \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \ucf5c \uc2a4\ud0dd\uc758 \ub9e8 \uc704\uc5d0 \uc313\uc774\ub294 \uc21c\uac04\uc774 \uace7 \ud604\uc7ac \uc2e4\ud589\ud560 \ucf54\ub4dc\uc5d0 \uad00\uc5ec\ud558\uac8c \ub418\ub294 \uc2dc\uc810\uc785\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \ud574\ub2f9 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uad00\ub828\ub41c \ucf54\ub4dc\ub4e4\uc744 \uc2e4\ud589\ud558\ub294 \ub370 \ud544\uc694\ud55c \ud658\uacbd \uc815\ubcf4\ub4e4\uc744 \uc218\uc9d1\ud574\uc11c \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8 \uac1d\uccb4\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc774 \uac1d\uccb4\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc774 \ud65c\uc6a9\ud560 \ubaa9\uc801\uc73c\ub85c \uc0dd\uc131\ud560 \ubfd0 \uac1c\ubc1c\uc790\uac00 \ucf54\ub4dc\ub97c \ud1b5\ud574 \ud655\uc778\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \ub2f4\uae30\ub294 \uc815\ubcf4\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"VariableEnvironment: \ud604\uc7ac \ucee8\ud14d\uc2a4\ud2b8 \ub0b4\uc758 \uc2dd\ubcc4\uc790\ub4e4\uc5d0 \ub300\ud55c \uc815\ubcf4 + \uc678\ubd80 \ud658\uacbd \uc815\ubcf4, \uc120\uc5b8 \uc2dc\uc810\uc758 LexicalEnvironment\uc758 \uc2a4\ub0c5\uc0f7\uc73c\ub85c, \ubcc0\uacbd \uc0ac\ud56d\uc740 \ubc18\uc601\ub418\uc9c0 \uc54a\uc74c."),(0,i.kt)("li",{parentName:"ul"},"LexicalEnvironment: \ucc98\uc74c\uc5d0\ub294 VariableEnvironment\uc640 \uac19\uc9c0\ub9cc \ubcc0\uacbd \uc0ac\ud56d\uc774 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubc18\uc601\ub428."),(0,i.kt)("li",{parentName:"ul"},"ThisBinding: this \uc2dd\ubcc4\uc790\uac00 \ubc14\ub77c\ubd10\uc57c \ud560 \ub300\uc0c1 \uac1d\uccb4.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"VariableEnvironment"),(0,i.kt)("td",{parentName:"tr",align:"left"},"- environmentRecord (snapshot)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"- outerEnvironmentReference (snapshot)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"LexicalEnvironment"),(0,i.kt)("td",{parentName:"tr",align:"left"},"- environmentRecord")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"- outerEnvironmentReference")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ThisBinding"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"lexical-environment"},"Lexical Environment"),(0,i.kt)("p",null,"Lexical Environment\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc5d0\uc11c \ubcc0\uc218\ub098 \ud568\uc218 \ub4f1\uc758 \uc2dd\ubcc4\uc790\ub97c \uc815\uc758\ud558\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \uac1d\uccb4\ub85c \uc0dd\uac01\ud558\uba74 \uc27d\uc2b5\ub2c8\ub2e4. Lexical Environment\ub294 \uc2dd\ubcc4\uc790\uc640 \ucc38\uc870 \ud639\uc740 \uac12\uc744 \uae30\ub85d\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"environmentRecode"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"outerEnvironmentReference"),"\ub77c\ub294 \ub610 \ub2e4\ub978 Lexical Environment\ub97c \ucc38\uc870\ud558\ub294 \ud3ec\uc778\ud130\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"environment-recode"},"Environment Recode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"environmentRecode"),"\ub294 \ud604\uc7ac \ucee8\ud14d\uc2a4\ud2b8\uc640 \uad00\ub828\ub41c \uc2dd\ubcc4\uc790 \uc815\ubcf4\ub4e4\uc774 \uc800\uc7a5\ub429\ub2c8\ub2e4. \ucee8\ud14d\uc2a4\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ud568\uc218\uc5d0 \uc9c0\uc815\ub41c \ub9e4\uac1c\ubcc0\uc218 \uc2dd\ubcc4\uc790, \uc120\uc5b8\ud55c \ud568\uc218\uac00 \uc788\uc744 \uacbd\uc6b0 \uadf8 \ud568\uc218 \uc790\uccb4, var\ub85c \uc120\uc5b8\ub41c \ubcc0\uc218\uc758 \uc2dd\ubcc4\uc790 \ub4f1\uc774 \uc2dd\ubcc4\uc790\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. \ucee8\ud14d\uc2a4\ud2b8 \ub0b4\ubd80 \uc804\uccb4\ub97c \ucc98\uc74c\ubd80\ud130 \ub05d\uae4c\uc9c0 \ucb49 \ud6d1\uc5b4\ub098\uac00\uba70 \uc21c\uc11c\ub300\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4. \ubcc0\uc218 \uc815\ubcf4\ub97c \uc218\uc9d1\ud558\ub294 \uacfc\uc815\uc744 \ubaa8\ub450 \ub9c8\ucce4\ub354\ub77c\ub3c4 \uc544\uc9c1 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uac00 \uad00\uc5ec\ud560 \ucf54\ub4dc\ub4e4\uc740 \uc2e4\ud589\ub3c4\uae30 \uc804\uc758 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\uae30 \uc804\uc784\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc5d4\uc9c4\uc740 \uc774\ubbf8 \ud574\ub2f9 \ud658\uacbd\uc5d0 \uc18d\ud55c \ucf54\ub4dc\uc758 \ubcc0\uc218\uba85\ub4e4\uc744 \ubaa8\ub450 \uc54c\uace0 \uc788\uac8c \ub418\ub294 \uac83\uc774\uc8e0. \uc774\ub7ec\ud55c \uacfc\uc815\uc744 ",(0,i.kt)("strong",{parentName:"p"},"Hoisting"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"outer-environment-reference"},"Outer Environment Reference"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"outerEnvironmentReference"),"\ub294 \uc678\ubd80 Lexical Environment\ub97c \ucc38\uc870\ud558\ub294 \ud3ec\uc778\ud130\ub85c, \uc911\ucca9\ub41c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ucf54\ub4dc\uc5d0\uc11c \uc2a4\ucf54\ud504 \ud0d0\uc0c9\uc744 \ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. (\ub530\ub77c\uc11c Global Execution Context\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"outerEnvironmentReference"),"\ub294 null \uc785\ub2c8\ub2e4.)"),(0,i.kt)("h2",{id:"variable-environment"},"Variable Environment"),(0,i.kt)("p",null,"VariableEnvironment\uc5d0 \ub2f4\uae30\ub294 \ub0b4\uc6a9\uc740 LexicalEnvironment\uc640 \uac19\uc9c0\ub9cc \ucd5c\ucd08 \uc2e4\ud589 \uc2dc\uc758 \uc2a4\ub0c5\uc0f7\uc744 \uc720\uc9c0\ud55c\ub2e4\ub294 \uc810\uc774 \ub2e4\ub985\ub2c8\ub2e4. \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c VariableEnvironment\uc5d0 \uc815\ubcf4\ub97c \uba3c\uc800 \ub2f4\uc740 \ub2e4\uc74c, \uc774\ub97c \uadf8\ub300\ub85c \ubcf5\uc0ac\ud574\uc11c LexicalEnvironment\ub97c \ub9cc\ub4e4\uace0, \uc774\ud6c4\uc5d0\ub294 LexicalEnvironment\ub97c \uc8fc\ub85c \ud65c\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"executionContext.LexicalEnvironment = executionContext.VariableEnvironment;\n")),(0,i.kt)("h3",{id:"variable-environment-vs-lexical-environment"},"Variable Environment vs Lexical Environment"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Variable Environment"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"Lexical Environment"),"\ub97c \uc870\uae08 \ub354 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'var apple = "apple";\nlet banana = "banana";\n\n{\n  let banana = "banana2";\n  var orange = "orange";\n  console.log(apple, orange, banana);\n}\n')),(0,i.kt)("p",null,"\ucc98\uc74c\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," \ud0a4\uc6cc\ub4dc\ub97c \uac00\uc9c4 \ubcc0\uc218\ub4e4\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"Variable Environment"),"\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment Records"),"\uc5d0 \ub4f1\ub85d\uc774 \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 Global EC \uc774\uae30\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Outer Environment Reference"),"\ub294 null\uc774 \ub418\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," \ud0a4\uc6cc\ub4dc\ub97c \uac00\uc9c4 \ubcc0\uc218\ub4e4\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"Lexical Environment"),"\uc758 Environment Records",(0,i.kt)("inlineCode",{parentName:"p"},"\uc5d0 \ub4f1\ub85d\uc774 \ub429\ub2c8\ub2e4."),"var",(0,i.kt)("inlineCode",{parentName:"p"},"\ud0a4\uc6cc\ub4dc\ub294 undefined\ub85c \ucd08\uae30\ud654\uac00 \ub418\ub294 \ubc18\uba74\uc5d0 "),"let` \ud0a4\uc6cc\ub4dc\ub294 \ucd08\uae30\ud654\uac00 \ub418\uc9c0\uc54a\uc544 \ud560\ub2f9\uc804 \ud638\ucd9c\ud558\uac8c \ub418\uba74 Reference Error\uac00 \ubc1c\uc0dd\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"ec-2",src:t(9634).Z,width:"960",height:"540"})),(0,i.kt)("p",null,"\ucf54\ub4dc\uac00 \uc2e4\ud589\uc774 \ub428\uc5d0 \ub530\ub77c \uac01 \ubcc0\uc218\uc5d0 \uac12\uc774 \ud560\ub2f9\ub418\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"ec-3",src:t(5110).Z,width:"960",height:"540"})),(0,i.kt)("p",null,"\uc774\ud6c4 block scope\ub97c \ub9cc\ub098\uac8c \ub418\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"Lexical Environment"),"\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment Records"),"\uc758 \uc0c8\ub85c\uc6b4 area\ub97c \ub9cc\ub4e4\uc5b4 \uae30\uc874\uacfc \ub2e4\ub978 area\uc5d0 \uc2dd\ubcc4\uc790\ub97c \ub4f1\ub85d\ud558\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc774\ub7ec\ud55c area\ub294 stack\uc73c\ub85c \uad00\ub9ac\ud558\uc5ec \ubcc0\uc218\uac00 \ucda9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"ec-4",src:t(7392).Z,width:"960",height:"540"})),(0,i.kt)("p",null,"block scope\uac00 \uc2e4\ud589\uc774 \ub418\uace0 \uc0c1\uc704 area\uc758 banana\uc5d0 \uac12\uc774 \ud560\ub2f9\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"ec-5",src:t(5331).Z,width:"960",height:"540"})),(0,i.kt)("p",null,"\uc774\ud6c4 block scope\uc758 \uc2e4\ud589\uc774 \ub05d\ub098\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"Environment Records")," block scope\uac00 \uc81c\uac70\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"ec-6",src:t(8425).Z,width:"960",height:"540"})),(0,i.kt)("h2",{id:"thisbinding"},"ThisBinding"),(0,i.kt)("p",null,"this\uc5d0 \ub300\ud574\uc11c\ub294 \ub2e4\ub978 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c \ub2e4\ub8e8\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ucf54\uc5b4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 (\uc815\uc7ac\ub0a8 \uc9c0\uc74c)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cabulous.medium.com/javascript-execution-context-lexical-environment-and-block-scope-part-3-fc2551c92ce0"},"JavaScript execution context \u2014 lexical environment and block scope :: carson"))))}v.isMDXComponent=!0},9634:function(e,n,t){n.Z=t.p+"assets/images/ec2-fec43b61cb056101e58a8766cb28316e.png"},5110:function(e,n,t){n.Z=t.p+"assets/images/ec3-dbf7482bcd164b99fa20b47c237edd10.png"},7392:function(e,n,t){n.Z=t.p+"assets/images/ec4-f46586a3d70e38e334104d9edf9070e4.png"},5331:function(e,n,t){n.Z=t.p+"assets/images/ec5-8558861c31ff976c7c661de83bd87bbc.png"},8425:function(e,n,t){n.Z=t.p+"assets/images/ec6-bbcf4df77f9b8d87b17cb22c0e3b6d16.png"}}]);