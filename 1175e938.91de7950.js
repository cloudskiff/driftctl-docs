(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{225:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,p=u["".concat(o,".").concat(b)]||u[b]||f[b]||a;return n?i.a.createElement(p,l(l({ref:t},s),{},{components:n})):i.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(225)),o={id:"driftignore",title:".driftignore"},l={unversionedId:"usage/filtering/driftignore",id:"version-0.9.0/usage/filtering/driftignore",isDocsHomePage:!1,title:".driftignore",description:".driftignore is a simple way to ignore resources, you put resources in a .driftignore file like a .gitignore.",source:"@site/versioned_docs/version-0.9.0/usage/filtering/driftignore.mdx",slug:"/usage/filtering/driftignore",permalink:"/0.9.0/usage/filtering/driftignore",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.9.0/usage/filtering/driftignore.mdx",version:"0.9.0",sidebar:"version-0.9.0/docs",previous:{title:"Disable telemetry",permalink:"/0.9.0/usage/flags/disable-telemetry"},next:{title:"Filter Rules",permalink:"/0.9.0/usage/filtering/rules"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Precedence over filter rules",id:"precedence-over-filter-rules",children:[]},{value:"Automatically generate a driftignore file",id:"automatically-generate-a-driftignore-file",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},".driftignore")," is a simple way to ignore resources, you put resources in a ",Object(a.b)("inlineCode",{parentName:"p"},".driftignore")," file like a ",Object(a.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(a.b)("p",null,"If you need only to exclude a set of resources you should use .driftignore, if you need something more advanced, check filter rules."),Object(a.b)("p",null,"Create the .driftignore file where you launch driftctl (usually the root of your IaC repo)."),Object(a.b)("p",null,"Each line must be of kind"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"resource_type.resource_id"),", resource_id could be a wildcard to exclude all resources of a given type."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"resource_type.resource_id.path.to.FieldName"),", resource_id can be wildcard to ignore a drift on given field for a given type, path could also contain wildcards.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Fields are not case-sensitive."))),Object(a.b)("p",null,"If your resource id or the path of a field contains dot or backslash you can escape them with backslashes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ignore"},"resource_type.resource\\.id\\.containing\\.dots.path.to.dotted\\.FieldName\nresource_type.resource_id_containing\\\\backslash.path.to.backslash\\\\FieldName\n")),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ignore"},"# Will ignore S3 bucket called my-bucket\naws_s3_bucket.my-buckey\n# Will ignore every aws_instance resource\naws_instance.*\n# Will ignore environment for all lambda functions\naws_lambda_function.*.Environment\n# Will ignore resources like aws_iam_role.AmazonSSMRoleForInstances and aws_iam_role.AWSServiceRoleForAmazonSSM\n*role.*Amazon*\n# Will ignore lastModified for my-lambda-name lambda function\naws_lambda_function.my-lambda-name.LastModified\n")),Object(a.b)("h2",{id:"precedence-over-filter-rules"},"Precedence over filter rules"),Object(a.b)("p",null,"The above mechanism to ignore resources can be used in combination with filter rules. Bear in mind that if the same resource is included by a filter rule and excluded inside the .driftignore file, driftctl will just ignore this resource."),Object(a.b)("h2",{id:"automatically-generate-a-driftignore-file"},"Automatically generate a driftignore file"),Object(a.b)("p",null,"Driftctl provides a command to automatically generate a driftignore file from a previous scan. This command parses a JSON input from a given file and sends output to stdout."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"# Ignore all current drifts\n$ driftctl scan -o json://stdout | driftctl gen-driftignore -i /dev/stdin\n\n# Changed resources will be excluded\n$ driftctl scan --from tfstate://state1.tfstate -o json://stdout | driftctl gen-driftignore -i /dev/stdin --exclude-changed\n\n# Unmanaged resources will be excluded, output sent to .driftignore file\n$ driftctl gen-driftignore -i result.json --exclude-unmanaged > .driftignore\n")),Object(a.b)("p",null,"You can filter which kind of resource you want to ignore using these flags :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--exclude-unmanaged")," : Exclude unmanaged resources"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--exclude-missing")," : Exclude unmanaged resources"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--exclude-changed")," : Exclude unmanaged resources")))}d.isMDXComponent=!0}}]);