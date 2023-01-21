(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(129)),c={id:"ex3",title:"Exercise 3 (Thu 2/3)"},o={unversionedId:"ex/ex3",id:"ex/ex3",isDocsHomePage:!1,title:"Exercise 3 (Thu 2/3)",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in.",source:"@site/docs\\ex\\ex3.md",slug:"/ex/ex3",permalink:"/cs422_sp23/docs/ex/ex3",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ex/ex3.md",version:"current"},s=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Task 1",id:"task-1",children:[]},{value:"Task 2",id:"task-2",children:[{value:"Design test cases",id:"design-test-cases",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Fix the faults",id:"fix-the-faults",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. "))),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Objectives")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This exercise should help you:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Whitebox testing techniques: ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Method coverage, "),Object(r.b)("li",{parentName:"ul"},"Statement coverage, "),Object(r.b)("li",{parentName:"ul"},"Branch coverage"))),Object(r.b)("li",{parentName:"ul"},"More practice with implementing test cases in JUnit ")))),Object(r.b)("h2",{id:"task-1"},"Task 1"),Object(r.b)("p",null,"Consider this implementation of ",Object(r.b)("inlineCode",{parentName:"p"},"countOutsideRange")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// count how many elements of arr is NOT within the range [r1, r2] \nint countOutsideRange(int arr[], int r1, int r2) { \n   int count = 0;\n   for (int i = 0; i < arr.length; ++i) {\n       if (arr[i] <= r1 || arr[i] >= r2) {\n          count++;\n       }\n    }\n   return count;\n}\n")),Object(r.b)("p",null,"Now, answer the following questions:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Write test case(s) that achieve (if not possible to achieve any of these coverages, explain.): ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"method coverage "),Object(r.b)("li",{parentName:"ul"},"statement coverage but not branch coverage"),Object(r.b)("li",{parentName:"ul"},"branch coverage but not path coverage"),Object(r.b)("li",{parentName:"ul"},"full path coverage "))),Object(r.b)("li",{parentName:"ol"},"Which of the abovementioned coverage criteria are good enough to reveal all faults (if any)?"),Object(r.b)("li",{parentName:"ol"},"Is there any faults that the test cases suggested above cannot reveal?")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You do not have to implement these test cases in JUnit, but if you like more practice with Java, feel free to implement your test cases."))),Object(r.b)("h2",{id:"task-2"},"Task 2"),Object(r.b)("p",null,"Do a git pull on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jhu-st/jhu-st-sp22-public"}),"course reporsitory")," to get a copy of ",Object(r.b)("inlineCode",{parentName:"p"},"ExpUtils.java")," file under ",Object(r.b)("inlineCode",{parentName:"p"},"exercises\\ex3")," folder. There is one method in this class ",Object(r.b)("inlineCode",{parentName:"p"},"validBrackets(String)")," which you will be testing in this part."),Object(r.b)("h3",{id:"design-test-cases"},"Design test cases"),Object(r.b)("p",null,"Using pen and paper only:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Write test cases to achieve full branch coverage."),Object(r.b)("li",{parentName:"ol"},"Are any faults revealed using the test cases that achieve full branch coverage?"),Object(r.b)("li",{parentName:"ol"},"Can you point out any other fault(s) that is/are not necessarily detectable by acheiving 100% branch coverage?"),Object(r.b)("li",{parentName:"ol"},'Add test cases (if needed) to satisfy "Loop boundary adequacy".')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To asnwer question 3 above, read the Javadoc specs carefully and put into work your blackbox testing skills!"))),Object(r.b)("h3",{id:"implementation"},"Implementation"),Object(r.b)("p",null,"Now, do the followings:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Implement in JUnit the test cases that you designed in the previous part."),Object(r.b)("li",{parentName:"ol"},"Utilize a code coverage tool (e.g. Intellij Code Coverage, Jacoco etc.) to run your test cases, measure code coverage, and verify that your test cases indeed achieve 100% branch coverage.")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Jacoco on Gradle project in Intellij")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In order to add Jacoco to your Gradle project in Intellij, all you need to do is to add the following to your ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle")," under ",Object(r.b)("inlineCode",{parentName:"p"},"plugins"),":"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"id 'jacoco'\n")),Object(r.b)("p",{parentName:"div"},"Also add the following directly in ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"jacocoTestReport {\n    dependsOn test\n    reports {\n        xml.enabled true\n        csv.enabled true\n        html.enabled true\n    }\n}\n")),Object(r.b)("p",{parentName:"div"},"This specifies that tests must be run before generating coverage report and also mandates generation of report in thee different formats namely ",Object(r.b)("inlineCode",{parentName:"p"},"html"),", ",Object(r.b)("inlineCode",{parentName:"p"},"csv")," and ",Object(r.b)("inlineCode",{parentName:"p"},"xml"),"."),Object(r.b)("p",{parentName:"div"},"Then, you need to type the following (in a terminal) to run tests and generate code coverage report:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$> gradlew jacocoTestReport\n")))),Object(r.b)("h3",{id:"fix-the-faults"},"Fix the faults"),Object(r.b)("p",null,"Finally, fix all the faults that you have found, run the test cases and verify you have a green test suite."),Object(r.b)("p",null,"Here is the specs and implementation of ",Object(r.b)("inlineCode",{parentName:"p"},"ExpUtils")," for your reference:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import java.util.Stack;\n\npublic class ExpUtils {\n    /**\n     * This method decides if an expression comprised of '(', ')', '[', ']', '{', and '}'\n     * is valid or not. An input expression is valid if:\n     * 1. Open brackets must be closed by the same type of brackets.\n     * 2. Open brackets must be closed in the correct order.\n     * 3. empty strings are considered valid\n     * @param input the input expression given as a string\n     * @return true if the expression is valid, false otherwise.\n     */\n    public static boolean validBrackets(String input) {\n        if (input.isEmpty()) {\n            return true;\n        }\n        Stack<Character> stack = new Stack<>();\n        for (int i = 0; i < input.length(); i++) {\n            char current = input.charAt(i);\n            if (current == '(' || current == '[' || current == '{') {\n                stack.push(current);\n            } else {\n                if(stack.isEmpty()) {\n                    return false;\n                }\n                char peekChar = stack.peek();\n                if ((current == ')' && peekChar != '(')\n                        || (current == '}' && peekChar != '{')\n                        || (current == ']' && peekChar != '[')) {\n                    return false;\n                } else {\n                    stack.pop();\n                }\n            }\n        }\n        return true;\n    }\n\n}\n")))}b.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);