(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),i=a(7),c=(a(0),a(129)),o={id:"ex1",title:"Exercise 1 (Thu 1/27)"},r={unversionedId:"ex/ex1",id:"ex/ex1",isDocsHomePage:!1,title:"Exercise 1 (Thu 1/27)",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in.",source:"@site/docs\\ex\\ex1.md",slug:"/ex/ex1",permalink:"/cs422_sp23/docs/ex/ex1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ex/ex1.md",version:"current"},s=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Getting set up",id:"getting-set-up",children:[]},{value:"Task",id:"task",children:[]}],b={toc:s};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. "))),Object(c.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(c.b)("div",{className:"admonition admonition-success alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Objectives")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This exercise should help you:"),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"warm up with creating a java project using Intellij"),Object(c.b)("li",{parentName:"ul"},"make use of JUnit to write test cases"),Object(c.b)("li",{parentName:"ul"},"understand the difference between Fault, Error and Failure")))),Object(c.b)("h2",{id:"getting-set-up"},"Getting set up"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Using ",Object(c.b)("inlineCode",{parentName:"li"},"git"),", clone the course ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jhu-st/jhu-st-sp23-public"}),"public repo")," to get a copy of the files you will be working with in this exercise. To do so, you can type at a terminal (when you are in your desired folder location):")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/jhu-st/jhu-st-sp23-public.git\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You need to have ",Object(c.b)("inlineCode",{parentName:"p"},"git")," installed on your machine already. If you do not have ",Object(c.b)("inlineCode",{parentName:"p"},"git"),", you can download it from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/downloads"}),"here"),". You can follow the instructions ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"here"),". If you need to brush up on your git skills, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=SWYqp7iY_Tc"}),"this video")," could be a good starting point."))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Once you succesffuly clone the repo, you can find ex1 files under ",Object(c.b)("inlineCode",{parentName:"p"},"exercises/ex1")," under which there is ",Object(c.b)("inlineCode",{parentName:"p"},"ArrayUtils.Java"),"."))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Create a new Java Gradle project on ",Object(c.b)("inlineCode",{parentName:"p"},"Intellij")," and add ",Object(c.b)("inlineCode",{parentName:"p"},"JUint5"),". "),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"if you do not have ",Object(c.b)("inlineCode",{parentName:"li"},"Intellij")," installed, you may download the Ultimate version ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.jetbrains.com/community/education/#students"}),"here")," for free. "),Object(c.b)("li",{parentName:"ul"},"Go to ",Object(c.b)("inlineCode",{parentName:"li"},"File"),"->",Object(c.b)("inlineCode",{parentName:"li"},"New"),"->",Object(c.b)("inlineCode",{parentName:"li"},"Project")," and select ",Object(c.b)("inlineCode",{parentName:"li"},"Gradle"),". Follow the steps to finish creating the project."),Object(c.b)("li",{parentName:"ul"},"Go to ",Object(c.b)("inlineCode",{parentName:"li"},"build.gradle")," and make sure it has the following content (in particular ",Object(c.b)("inlineCode",{parentName:"li"},"test")," and ",Object(c.b)("inlineCode",{parentName:"li"},"dependencies"),"):")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-groovy"}),"plugins {\n    id 'java'\n}\n\ngroup 'org.example'\nversion '1.0-SNAPSHOT'\n\nrepositories {\n    mavenCentral()\n}\n\ntest {\n    useJUnitPlatform()\n}\n\ndependencies {\n    testImplementation 'org.junit.jupiter:junit-jupiter:5.8.2'\n}\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Copy ",Object(c.b)("inlineCode",{parentName:"p"},"ArrayUtils.java")," to ",Object(c.b)("inlineCode",{parentName:"p"},"src/main/java")," path in your project."))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Alternate IDE")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Feel free to use an alternate IDE other than ",Object(c.b)("inlineCode",{parentName:"p"},"Intellij")," if you prefer. The instructions in this exercise are based on ",Object(c.b)("inlineCode",{parentName:"p"},"Intellij")," though."))),Object(c.b)("h2",{id:"task"},"Task"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Follow the instructions at the top of ",Object(c.b)("inlineCode",{parentName:"li"},"ArrayUtils.java")," and write your asnwers on a paper or a word document. Implement your test cases as JUnit test cases in your project. ")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"In order to write JUnit tests, you would want to create a test class under ",Object(c.b)("inlineCode",{parentName:"p"},"src/test/java")," in your project and write your test cases in that class. Follow the skeletal/naming convention offered in the lecture notes."))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Program State")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"A program state during program execution is defined as the current value of all live variables and the current location as given by program counter (PC). PC is the next statement to be executed in the program. Each time a new statement (instruction) is fetched to be executed, PC is incremented."))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},'Recall that "error" is incorrect program state.'))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Execute JUnit test cases you wrote and verify the results.")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"We will study JUnit in more details in near future, but for now you can brush up on your JUnit skills by referring to its ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://junit.org/junit5/docs/current/user-guide/"}),"user manual"),"."))))}l.isMDXComponent=!0},129:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||c;return a?i.a.createElement(u,r(r({ref:t},b),{},{components:a})):i.a.createElement(u,r({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var b=2;b<c;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);