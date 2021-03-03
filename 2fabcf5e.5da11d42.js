(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{133:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return r?i.a.createElement(m,s(s({ref:t},c),{},{components:r})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(133)),o={id:"limitations",title:"Known Issues and Limitations",sidebar_label:"Limitations"},s={unversionedId:"limitations",id:"version-0.6.0/limitations",isDocsHomePage:!1,title:"Known Issues and Limitations",description:"AWS Regions & Credentials Limits",source:"@site/versioned_docs/version-0.6.0/limitations.mdx",slug:"/limitations",permalink:"/limitations",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.6.0/limitations.mdx",version:"0.6.0",sidebar_label:"Limitations",sidebar:"version-0.6.0/docs",previous:{title:"Installation",permalink:"/installation"},next:{title:"IaC Source",permalink:"/usage/cmd/scan/iac-source"}},l=[{value:"AWS Regions &amp; Credentials Limits",id:"aws-regions--credentials-limits",children:[]},{value:"Terraform &amp; Providers Support",id:"terraform--providers-support",children:[]},{value:"Integration in terraform workflow",id:"integration-in-terraform-workflow",children:[]},{value:"Terraform Resources",id:"terraform-resources",children:[{value:"AWS",id:"aws",children:[]},{value:"Github",id:"github",children:[]}]}],c={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"aws-regions--credentials-limits"},"AWS Regions & Credentials Limits"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The user needs to use the same AWS region and credentials for both the scanned infrastructure and the S3 bucket where the Terraform state is stored (for example, a Terraform state stored on S3 on us-east-1 for an infrastructure to be scanned on us-west-1 won't work). Think ",Object(a.b)("inlineCode",{parentName:"li"},"AWS_PROFILE")," for the underlying reason. See the related ",Object(a.b)("a",{parentName:"li",href:"https://github.com/cloudskiff/driftctl/discussions/130"},"GitHub Discussion"),"."),Object(a.b)("li",{parentName:"ul"},"driftctl currently doesn't support multiple aliased providers in a single Terraform state (like a single account but multiple regions). This will be implemented soon.")),Object(a.b)("h2",{id:"terraform--providers-support"},"Terraform & Providers Support"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Terraform version >= 0.12 is supported"),Object(a.b)("li",{parentName:"ul"},"Terraform AWS provider version >= 3.x is supported")),Object(a.b)("h2",{id:"integration-in-terraform-workflow"},"Integration in terraform workflow"),Object(a.b)("p",null,"driftctl compares your real infrastructure to your state.\nWhen running ",Object(a.b)("inlineCode",{parentName:"p"},"terraform refresh")," or ",Object(a.b)("inlineCode",{parentName:"p"},"terraform apply")," , since it triggers a refresh, terraform updates your state with upstream modifications.\nThus, driftctl won't be able to compute diffs between state and infrastructure as both sides are in sync."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"driftctl should be run BEFORE any terraform actions in your CI/CD pipeline")),Object(a.b)("p",null,"For example:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"create an aws_s3_bucket with terraform, apply to create a bucket"),Object(a.b)("li",{parentName:"ul"},"manually enable the bucket versioning in the console"),Object(a.b)("li",{parentName:"ul"},"run driftctl => it will detect the drift ",Object(a.b)("inlineCode",{parentName:"li"},"~ Versioning.0.Enabled: false => true")),Object(a.b)("li",{parentName:"ul"},"run terraform apply => no changes, but under the hood it will update your state and set versioning to true"),Object(a.b)("li",{parentName:"ul"},"run driftctl => *",Object(a.b)("em",{parentName:"li"},"no changes"))),Object(a.b)("h2",{id:"terraform-resources"},"Terraform Resources"),Object(a.b)("h3",{id:"aws"},"AWS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"aws_security_group and aws_security_group_rule:")),Object(a.b)("p",null,"For security group that has in-line egress or ingress rules, driftctl will output an alert message at the end of the scan to warn you that those rules are falsely unmanaged. The explanation is that we can't distinct, based only on the Terraform state, rules created in the console and rules created in-line in either egress or ingress blocks."),Object(a.b)("h3",{id:"github"},"Github"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"github_branch_protection_v3:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This resource is not supported and will probably never be as it overlaps with github_branch_protection. ",Object(a.b)("inlineCode",{parentName:"li"},"github_branch_protection")," is more suitable for performance purpose. We cannot support these two resources as we don't have any way to discriminate them by enumerating resources from remote side. They represent the same notion but are from two different APIs (REST vs GraphQL). driftctl team recommends you to use the newer ",Object(a.b)("inlineCode",{parentName:"li"},"github_branch_protection"),", or at least ignore all your ",Object(a.b)("inlineCode",{parentName:"li"},"github_branch_protection_v3")," in driftignore."))),Object(a.b)("li",{parentName:"ul"},"github_branch_protection:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Branch protection resources are not returned as unmanaged if the branch protection pattern does not match at least one branch."),Object(a.b)("li",{parentName:"ul"},"We cannot show the related repository name in driftctl output as the terraform provider does not retrieve this information.")))))}u.isMDXComponent=!0}}]);