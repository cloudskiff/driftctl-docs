(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(296)),a={id:"gen-driftignore-usage",title:".driftignore generator"},c={unversionedId:"usage/cmd/gen-driftignore-usage",id:"version-0.12.0/usage/cmd/gen-driftignore-usage",isDocsHomePage:!1,title:".driftignore generator",description:"Some people do not have the goal of reaching a 100% IAC coverage with their infrastructure. And for them, driftctl can be annoying to continuously deliver drift notifications on resources they don't care. For this use case, there's a solution.",source:"@site/versioned_docs/version-0.12.0/usage/cmd/gen-driftignore.mdx",slug:"/usage/cmd/gen-driftignore-usage",permalink:"/0.12.0/usage/cmd/gen-driftignore-usage",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.12.0/usage/cmd/gen-driftignore.mdx",version:"0.12.0",sidebar:"version-0.12.0/docs",previous:{title:"Completion",permalink:"/0.12.0/usage/cmd/completion-usage"},next:{title:"Crash Reporting",permalink:"/0.12.0/usage/flags/crash-reporting"}},s=[{value:"Using Docker",id:"using-docker",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Some people do not have the goal of reaching a 100% IAC coverage with their infrastructure. And for them, driftctl can be annoying to continuously deliver drift notifications on resources they don't care. For this use case, there's a solution."),Object(i.b)("p",null,"You can start using driftctl with a clean state, by ignoring all the current resources that are not yet under control. driftctl provides a command to automatically generate a .driftignore file from a previous scan given the type of resources you want to exclude (e.g. unmanaged, missing or changed resources). This command parses a JSON input from a given file and sends output to stdout."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# Ignore all current drifts\n$ driftctl scan -o json://stdout | driftctl gen-driftignore -i /dev/stdin\n\n# Changed resources will be excluded\n$ driftctl scan --from tfstate://state1.tfstate -o json://stdout | driftctl gen-driftignore -i /dev/stdin --exclude-changed\n\n# Unmanaged resources will be excluded, output sent to .driftignore file\n$ driftctl scan --from tfstate://state1.tfstate -o json://result.json\n$ driftctl gen-driftignore -i result.json --exclude-unmanaged > .driftignore\n")),Object(i.b)("p",null,"You can filter which kind of resource you want to ignore using these flags:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--exclude-unmanaged")," : Exclude resources not managed by IaC"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--exclude-missing")," : Exclude resources missing on cloud provider"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--exclude-changed")," : Exclude resources that changed from IaC")),Object(i.b)("h2",{id:"using-docker"},"Using Docker"),Object(i.b)("p",null,"Run a scan with JSON output enabled:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ docker run -it --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=cloudskiff-demo \\\n  -e AWS_REGION=us-east-1 \\\n  cloudskiff/driftctl scan --from tfstate://**/*.tfstate --output json://drifts.json\n[...]\n")),Object(i.b)("p",null,"Finally, generate the ",Object(i.b)("inlineCode",{parentName:"p"},".driftignore")," file from the JSON:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ docker run -it --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=cloudskiff-demo \\\n  -e AWS_REGION=us-east-1 \\\n  cloudskiff/driftctl gen-driftignore -i drifts.json > .driftignore\n[...]\n")))}l.isMDXComponent=!0},296:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,g=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return n?o.a.createElement(g,c(c({ref:t},u),{},{components:n})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);