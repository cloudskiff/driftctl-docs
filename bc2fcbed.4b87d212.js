(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(l,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(f,o(o({ref:t},s),{},{components:r})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(100)),l={id:"filtering",title:"Filtering Resources"},o={unversionedId:"usage/cmd/scan/filtering",id:"usage/cmd/scan/filtering",isDocsHomePage:!1,title:"Filtering Resources",description:"driftctl offers two ways to filter resources:",source:"@site/docs/usage/cmd/scan/filter.mdx",slug:"/usage/cmd/scan/filtering",permalink:"/next/usage/cmd/scan/filtering",editUrl:"https://github.com/cloudskiff/driftctl/docs/usage/cmd/scan/filter.mdx",version:"current",sidebar:"docs",previous:{title:"Output Format",permalink:"/next/usage/cmd/scan/output"},next:{title:"Completion Script",permalink:"/next/usage/cmd/completion/script"}},c=[{value:".driftignore",id:"driftignore",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Filter rules",id:"filter-rules",children:[{value:"Examples",id:"examples-1",children:[]}]}],s={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"driftctl offers two ways to filter resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},".driftignore"),Object(i.b)("li",{parentName:"ul"},"Filter rules")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},".driftignore")," is a simple way to ignore resources, you put resources in a ",Object(i.b)("inlineCode",{parentName:"p"},".driftignore")," file like a ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Filter rules")," allow you to build complex expression to include and exclude a set of resources in your workflow.\nPowered by expression language ",Object(i.b)("a",{parentName:"p",href:"https://jmespath.org/"},"JMESPath")," you could build a complex include and exclude expression."),Object(i.b)("p",null,"If you need only to exclude a set of resources you should use .driftignore, if you need something more advanced, check filter rules."),Object(i.b)("h2",{id:"driftignore"},".driftignore"),Object(i.b)("p",null,"Create the .driftignore file where you launch driftctl (usually the root of your IaC repo)."),Object(i.b)("p",null,"Each line must be of kind"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource_type.resource_id"),", resource_id could be a wildcard to exclude all resources of a given type."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource_type.resource_id.path.to.FieldName"),", resource_id can be wildcard to ignore a drift on given field for a given type, path could also contain wildcards.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"N.B.")," Fields are not case-sensitive.")),Object(i.b)("p",null,"If your resource id or the path of a field contains dot or backslash you can escape them with backslashes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ignore"},"resource_type.resource\\.id\\.containing\\.dots.path.to.dotted\\.FieldName\nresource_type.resource_id_containing\\\\backslash.path.to.backslash\\\\FieldName\n")),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ignore"},"# Will ignore S3 bucket called my-bucket\naws_s3_bucket.my-buckey\n# Will ignore every aws_instance resource\naws_instance.*\n# Will ignore environement for all lambda functions\naws_lambda_function.*.Environment\n# Will ignore lastModified for my-lambda-name lambda function\naws_lambda_function.my-lambda-name.LastModified\n")),Object(i.b)("h2",{id:"filter-rules"},"Filter rules"),Object(i.b)("p",null,"Filter rules could be passed to ",Object(i.b)("inlineCode",{parentName:"p"},"scan")," cmd with ",Object(i.b)("inlineCode",{parentName:"p"},"--filter")," flag.\nYou could also use the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"DCTL_FILTER"),".\nFilter rules syntax in use is actually ",Object(i.b)("a",{parentName:"p",href:"https://jmespath.org/specification.html"},"JMESPath"),"."),Object(i.b)("p",null,"Filter are applied on a normalized struct which contains the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Type"),": Type of the resource, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"aws_s3_bucket")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Id"),": Id of the resource, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"my-bucket-name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Attr"),": Contains every resource attributes (check ",Object(i.b)("inlineCode",{parentName:"li"},"pkg/resource/aws/aws_s3_bucket.go")," for a full list of supported attributes of a bucket)")),Object(i.b)("h3",{id:"examples-1"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# Will include only S3 bucket in the search\n$ driftctl scan --filter \"Type=='aws_s3_bucket'\"\n# OR (beware of escape your shell special chars between double quotes)\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\''\n\n# Excludes only s3 bucket named 'my-bucket-name'\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\' && Id!=\\'my-bucket-name\\''\n\n# Ignore buckets that have tags terraform equal to 'false'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.Tags.terraform==\\'false\\')'\n\n# Ignore buckets that don't have tag terraform\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.Tags != null && !contains(keys(Attr.Tags), \\'terraform\\'))'\n\n# Ignore buckets with an ID prefix of 'terraform-'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && starts_with(Id, \\'terraform-\\'))'\n\n# Ignore buckets with an ID suffix of '-test'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && ends_with(Id, \\'-test\\'))'\n\n")))}u.isMDXComponent=!0}}]);