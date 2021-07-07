(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(296)),a={id:"output",title:"Output Format"},u={unversionedId:"usage/cmd/scan/output",id:"version-0.4.0/usage/cmd/scan/output",isDocsHomePage:!1,title:"Output Format",description:"driftctl supports multiple kinds of output formats and by default uses the standard output (console).",source:"@site/versioned_docs/version-0.4.0/usage/cmd/scan/output.mdx",slug:"/usage/cmd/scan/output",permalink:"/0.4.0/usage/cmd/scan/output",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.4.0/usage/cmd/scan/output.mdx",version:"0.4.0",sidebar:"version-0.4.0/docs",previous:{title:"IaC Source",permalink:"/0.4.0/usage/cmd/scan/iac-source"},next:{title:"Filtering Resources",permalink:"/0.4.0/usage/cmd/scan/filtering"}},s=[{value:"Console",id:"console",children:[{value:"Usage",id:"usage",children:[]},{value:"Structure",id:"structure",children:[]}]},{value:"JSON",id:"json",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Structure",id:"structure-1",children:[]}]}],i={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"driftctl supports multiple kinds of output formats and by default uses the standard output (console)."),Object(c.b)("h2",{id:"console"},"Console"),Object(c.b)("p",null,"Environment: ",Object(c.b)("inlineCode",{parentName:"p"},"DCTL_OUTPUT")),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan\n$ driftctl scan --output console://\n$ DCTL_OUTPUT=console:// driftctl scan\n")),Object(c.b)("h3",{id:"structure"},"Structure"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-console"},"Found deleted resources:\n  aws_s3_bucket:\n    - driftctl-bucket-test-2\nFound unmanaged resources:\n  aws_s3_bucket:\n    - driftctl-bucket-test-3\nFound drifted resources:\n  - driftctl-bucket-test-1 (aws_s3_bucket):\n    ~ Versioning.0.Enabled: false => true\nFound 3 resource(s)\n - 33% coverage\n - 1 covered by IaC\n - 1 not covered by IaC\n - 1 deleted on cloud provider\n - 1/1 drifted from IaC\n")),Object(c.b)("h2",{id:"json"},"JSON"),Object(c.b)("h3",{id:"usage-1"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan --output json:///tmp/result.json # Will output results to /tmp/result.json\n$ driftctl scan --output json://result.json # Will output results to ./result.json\n$ DCTL_OUTPUT=json://result.json driftctl scan\n")),Object(c.b)("h3",{id:"structure-1"},"Structure"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  summary: {\n    total_resources: 3,\n    total_drifted: 1,\n    total_unmanaged: 1,\n    total_deleted: 1,\n    total_managed: 1,\n  },\n  managed: [\n    // list of resources found in IaC and in sync with remote\n    {\n      id: "driftctl-bucket-test-1",\n      type: "aws_s3_bucket",\n    },\n  ],\n  unmanaged: [\n    // list of resources found in remote but not in IaC\n    {\n      id: "driftctl-bucket-test-3",\n      type: "aws_s3_bucket",\n    },\n  ],\n  deleted: [\n    // list of resources found in IaC but not on remote\n    {\n      id: "driftctl-bucket-test-2",\n      type: "aws_s3_bucket",\n    },\n  ],\n  differences: [\n    // A list of changes on managed resources\n    {\n      res: {\n        id: "driftctl-bucket-test-1",\n        type: "aws_s3_bucket",\n      },\n      changelog: [\n        {\n          type: "update", // Kind of change, could be one of update, create, delete\n          path: [\n            // Path of the change, sorted from root to leaf\n            "Versioning",\n            "0",\n            "Enabled",\n          ],\n          from: false, // Mixed type\n          to: true, // Mixed type\n        },\n      ],\n    },\n  ],\n  coverage: 33,\n}\n')))}l.isMDXComponent=!0},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||c;return n?o.a.createElement(b,u(u({ref:t},i),{},{components:n})):o.a.createElement(b,u({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var i=2;i<c;i++)a[i]=n[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);