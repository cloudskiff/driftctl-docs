(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(203)),a={id:"authentication",title:"Authentication"},c={unversionedId:"providers/github/authentication",id:"version-0.5.0/providers/github/authentication",isDocsHomePage:!1,title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from environment variables.",source:"@site/versioned_docs/version-0.5.0/providers/github/authentication.mdx",slug:"/providers/github/authentication",permalink:"/0.5.0/providers/github/authentication",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.5.0/providers/github/authentication.mdx",version:"0.5.0",sidebar:"version-0.5.0/docs",previous:{title:"Supported Resources",permalink:"/0.5.0/providers/aws/resources"},next:{title:"Supported Resources",permalink:"/0.5.0/providers/github/resources"}},s=[{value:"Least privileged policy",id:"least-privileged-policy",children:[]}],u={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from ",Object(o.b)("a",{parentName:"p",href:"https://registry.terraform.io/providers/integrations/github/latest/docs#argument-reference"},"environment variables"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ GITHUB_TOKEN=14758f1afd44c09b7992073ccf00b43d GITHUB_ORGANIZATION=my-org driftctl scan --to github+tf\n")),Object(o.b)("h2",{id:"least-privileged-policy"},"Least privileged policy"),Object(o.b)("p",null,"Below you can find the minimal scope required for driftctl to be able to scan every GitHub supported resources."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"repo # Required to enumerate public and private repos\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Beware that if you don't set correct permissions for your token, you won't see any errors and all resources will appear as deleted from remote."))))}p.isMDXComponent=!0},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,m=l["".concat(a,".").concat(b)]||l[b]||d[b]||o;return r?i.a.createElement(m,c(c({ref:t},u),{},{components:r})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);