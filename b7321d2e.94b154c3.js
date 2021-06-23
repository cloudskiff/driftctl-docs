(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{209:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(273)),a={id:"authentication",title:"Authentication"},c={unversionedId:"providers/github/authentication",id:"version-0.11.0/providers/github/authentication",isDocsHomePage:!1,title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from environment variables.",source:"@site/versioned_docs/version-0.11.0/providers/github/authentication.mdx",slug:"/providers/github/authentication",permalink:"/0.11.0/providers/github/authentication",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.11.0/providers/github/authentication.mdx",version:"0.11.0",sidebar:"version-0.11.0/docs",previous:{title:"Supported Resources",permalink:"/0.11.0/providers/aws/resources"},next:{title:"Supported Resources",permalink:"/0.11.0/providers/github/resources"}},s=[{value:"Least privileged policy",id:"least-privileged-policy",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To use driftctl, we need credentials to make authenticated requests to GitHub. Just like the terraform provider, we retrieve config from ",Object(o.b)("a",{parentName:"p",href:"https://registry.terraform.io/providers/integrations/github/latest/docs#argument-reference"},"environment variables"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ GITHUB_TOKEN=14758f1afd44c09b7992073ccf00b43d\\\n  GITHUB_ORGANIZATION=my-org\\\n  driftctl scan --to github+tf\n")),Object(o.b)("h2",{id:"least-privileged-policy"},"Least privileged policy"),Object(o.b)("p",null,"Below you can find the minimal scope required for driftctl to be able to scan every GitHub supported resources."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# Required to enumerate private repos\nrepo\n\n# Required to list your organization teams\n# and other organization related resources\nread:org\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"repository permissions")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Beware that if you don't set permission ",Object(o.b)("inlineCode",{parentName:"p"},"repo")," for your token, you won't see any errors for repositories listing.\n",Object(o.b)("strong",{parentName:"p"},"Thus, all private repositories will appear as deleted from remote.")))))}u.isMDXComponent=!0},273:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,m=l["".concat(a,".").concat(b)]||l[b]||d[b]||o;return r?i.a.createElement(m,c(c({ref:t},p),{},{components:r})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);