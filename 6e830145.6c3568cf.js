(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(273)),o={id:"rules",title:"Filter Rules"},s={unversionedId:"usage/filtering/rules",id:"version-0.11.0/usage/filtering/rules",isDocsHomePage:!1,title:"Filter Rules",description:"Filter rules can be used not only to scan resources, but also to ignore resources.",source:"@site/versioned_docs/version-0.11.0/usage/filtering/rules.mdx",slug:"/usage/filtering/rules",permalink:"/0.11.0/usage/filtering/rules",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.11.0/usage/filtering/rules.mdx",version:"0.11.0",sidebar:"version-0.11.0/docs",previous:{title:".driftignore",permalink:"/0.11.0/usage/filtering/driftignore"},next:{title:"Log level",permalink:"/0.11.0/usage/log-level"}},c=[{value:"Examples",id:"examples",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Filter rules can be used not only to ",Object(i.b)("strong",{parentName:"p"},"scan")," resources, but also to ",Object(i.b)("strong",{parentName:"p"},"ignore")," resources."),Object(i.b)("p",{parentName:"div"},"You can indeed use both inclusion and exclusion logics."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Filter rules")," allow you to build complex expression to include and exclude a set of resources in your workflow.\nPowered by expression language ",Object(i.b)("a",{parentName:"p",href:"https://jmespath.org/"},"JMESPath")," you could build a complex include and exclude expression."),Object(i.b)("p",null,"Filter rules could be passed to ",Object(i.b)("inlineCode",{parentName:"p"},"scan")," cmd with ",Object(i.b)("inlineCode",{parentName:"p"},"--filter")," flag.\nYou could also use the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"DCTL_FILTER"),".\nFilter rules syntax in use is actually ",Object(i.b)("a",{parentName:"p",href:"https://jmespath.org/specification.html"},"JMESPath"),"."),Object(i.b)("p",null,"Filter are applied on a normalized struct which contains the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Type"),": Type of the resource, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"aws_s3_bucket")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Id"),": Id of the resource, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"my-bucket-name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Attr"),": Contains every resource attributes (check ",Object(i.b)("inlineCode",{parentName:"li"},"pkg/resource/aws/aws_s3_bucket.go")," for a full list of supported attributes of a bucket)")),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# Will include only S3 bucket in the search\n$ driftctl scan --filter \"Type=='aws_s3_bucket'\"\n# OR (beware of escape your shell special chars between double quotes)\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\''\n\n# Excludes only s3 bucket named 'my-bucket-name'\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\' && Id!=\\'my-bucket-name\\''\n\n# Ignore buckets that have tags terraform equal to 'false'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.Tags.terraform==\\'false\\')'\n\n# Ignore buckets that don't have tag terraform\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.Tags != null && !contains(keys(Attr.Tags), \\'terraform\\'))'\n\n# Ignore buckets with an ID prefix of 'terraform-'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && starts_with(Id, \\'terraform-\\'))'\n\n# Ignore buckets with an ID suffix of '-test'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && ends_with(Id, \\'-test\\'))'\n\n# Ignore GitHub archived repositories\ndriftctl scan --to github+tf --filter '!(Attr.Archived)'\n")))}u.isMDXComponent=!0},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);