(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(203)),i={id:"usage",title:"Usage"},c={unversionedId:"usage",id:"version-0.8.0/usage",isDocsHomePage:!1,title:"Usage",description:"Be sure to have configured your AWS credentials.",source:"@site/versioned_docs/version-0.8.0/usage.mdx",slug:"/usage",permalink:"/0.8.0/usage",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.8.0/usage.mdx",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Installation",permalink:"/0.8.0/installation"},next:{title:"Known Issues and Limitations",permalink:"/0.8.0/limitations"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Be sure to have ",Object(o.b)("a",{parentName:"p",href:"/0.8.0/providers/aws/authentication"},"configured")," your AWS credentials."),Object(o.b)("p",null,"You will need to assign ",Object(o.b)("a",{parentName:"p",href:"/0.8.0/providers/aws/authentication#least-privileged-policy"},"proper permissions")," to allow driftctl to scan your account."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# With a local state\n$ driftctl scan\n# Same as\n$ driftctl scan --from tfstate://terraform.tfstate\n\n# To specify AWS credentials\n$ AWS_ACCESS_KEY_ID=XXX AWS_SECRET_ACCESS_KEY=XXX driftctl scan\n# or using a named profile\n$ AWS_PROFILE=profile_name driftctl scan\n\n# With state stored on a s3 backend\n$ driftctl scan --from tfstate+s3://my-bucket/path/to/state.tfstate\n\n# With multiple states\n$ driftctl scan --from tfstate://terraform_S3.tfstate --from tfstate://terraform_VPC.tfstate\n\n# Using glob pattern\n$ driftctl scan --from tfstate://path/to/**/*.tfstate\n$ driftctl scan --from tfstate+s3://path/to/**/*.tfstate\n")))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);