(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{174:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(227)),i={id:"crash-reporting",title:"Crash Reporting"},c={unversionedId:"usage/flags/crash-reporting",id:"usage/flags/crash-reporting",isDocsHomePage:!1,title:"Crash Reporting",description:"When a crash occurs in driftctl, we do not send any crash reports.",source:"@site/docs/usage/flags/crash-reporting.mdx",slug:"/usage/flags/crash-reporting",permalink:"/next/usage/flags/crash-reporting",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/docs/usage/flags/crash-reporting.mdx",version:"current",sidebar:"docs",previous:{title:"Driftignore generator",permalink:"/next/usage/cmd/gen-driftignore-usage"},next:{title:"Version Check",permalink:"/next/usage/flags/version-check"}},l=[{value:"Example",id:"example",children:[]}],s={toc:l};function p(e){var r=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,i,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When a crash occurs in driftctl, we do not send any crash reports."),Object(o.b)("p",null,"For debugging purposes, you can add ",Object(o.b)("inlineCode",{parentName:"p"},"--send-crash-report")," when running driftctl and crash data will be sent to us via ",Object(o.b)("a",{parentName:"p",href:"https://sentry.io"},"Sentry"),"."),Object(o.b)("p",null,"Below is a list of data we retrieve when error reporting is enabled."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"date"),": Event date"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"os name"),': Operating System (string, e.g. : "linux | mac | windows")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"architecture"),': Architecture of your CPU (string, e.g. : "amd64 | i389")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"num_cpu"),": Number of cores of your CPU (int, e.g. : 8)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"release"),': driftctl version (string, e.g. : "v0.2.2")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"server_name"),': Your computer hostname (string, e.g. : "yourhostname")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"runtime version"),': Golang version (string, e.g. : "go1.15.2")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"runtime infos"),": Variables go_maxprocs, go_numcgocalls, go_numroutines"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"packages"),": Golang used packages and their versions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"stacktrace"),": The error stack")),Object(o.b)("p",null,"The crash reporting is silent, it will never make your scan fail. You can know whether a report has been sent or not by setting the log level to debug : ",Object(o.b)("inlineCode",{parentName:"p"},"LOG_LEVEL=debug driftctl scan ..."),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Below is a full example of a nil pointer crash report."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Sentry",src:t(297).default})),Object(o.b)("p",null,"The RAW stack for this example is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},'runtime.errorString: runtime error: invalid memory address or nil pointer dereference\n  File "/go/src/app/pkg/parallel_runner.go", line 93, in (*ParallelRunner).Run.func1.1\n  File "/go/src/app/pkg/remote/aws/s3_bucket_supplier.go", line 71, in readBucketRegion\n  File "/go/src/app/pkg/remote/aws/s3_bucket_inventory_supplier.go", line 42, in (*S3BucketInventorySupplier).Resources\n  File "/go/src/app/pkg/scanner.go", line 28, in (*Scanner).Resources.func1\n  File "/go/src/app/pkg/parallel_runner.go", line 97, in (*ParallelRunner).Run.func1\n')))}p.isMDXComponent=!0},227:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},g=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=n,m=u["".concat(i,".").concat(g)]||u[g]||b[g]||o;return t?a.a.createElement(m,c(c({ref:r},s),{},{components:t})):a.a.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},297:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/sentry-2fbf7805ce69b6f14c223592c4570f0a.png"}}]);