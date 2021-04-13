(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return f}));var a=n(3),r=n(7),l=(n(0),n(180)),i=n(186),o=n(187),c={id:"installation",title:"Installation"},s={unversionedId:"installation",id:"version-0.7.1/installation",isDocsHomePage:!1,title:"Installation",description:"driftctl is available on Linux, macOS and Windows.",source:"@site/versioned_docs/version-0.7.1/installation.mdx",slug:"/installation",permalink:"/0.7.1/installation",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.7.1/installation.mdx",version:"0.7.1",sidebar:"version-0.7.1/docs",previous:{title:"What is driftctl?",permalink:"/0.7.1/"},next:{title:"Usage",permalink:"/0.7.1/usage"}},u=[{value:"Verify digital signatures",id:"verify-digital-signatures",children:[]},{value:"Usage examples",id:"usage-examples",children:[]}],d={toc:u};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"driftctl is available on Linux, macOS and Windows."),Object(l.b)("p",null,"Binaries are available in the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/cloudskiff/driftctl/releases"},"release page"),"."),Object(l.b)(i.a,{defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Docker",value:"docker"},{label:"Homebrew",value:"homebrew"},{label:"Macports",value:"macports"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"manual",mdxType:"TabItem"},Object(l.b)(i.a,{defaultValue:"linux-macos",values:[{label:"Linux / macOS",value:"linux-macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"linux-macos",mdxType:"TabItem"},Object(l.b)("p",null,"This is an example using ",Object(l.b)("inlineCode",{parentName:"p"},"curl"),". If you don't have ",Object(l.b)("inlineCode",{parentName:"p"},"curl"),", install it, or use ",Object(l.b)("inlineCode",{parentName:"p"},"wget"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# Linux\n# x64\n$ curl -L https://github.com/cloudskiff/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl\n\n# x86\n$ curl -L https://github.com/cloudskiff/driftctl/releases/latest/download/driftctl_linux_386 -o driftctl\n\n# macOS\n$ curl -L https://github.com/cloudskiff/driftctl/releases/latest/download/driftctl_darwin_amd64 -o driftctl\n")),Object(l.b)("p",null,"Make the binary executable:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ chmod +x driftctl\n")),Object(l.b)("p",null,"Optionally install driftctl to a central location in your ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# use any path that suits you, this is just a standard example. Install sudo if needed.\n$ sudo mv driftctl /usr/local/bin/\n")),Object(l.b)("h2",{id:"verify-digital-signatures"},"Verify digital signatures"),Object(l.b)("p",null,"Cloudskiff releases are signed using PGP key (ed25519) with ID ",Object(l.b)("inlineCode",{parentName:"p"},"ACC776A79C824EBD")," and fingerprint ",Object(l.b)("inlineCode",{parentName:"p"},"2776 6600 5A7F 01D4 84F6 376D ACC7 76A7 9C82 4EBD"),"\nOur key can be retrieved from common keyservers."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'# Download binary, checksums and signature\n$ curl -L https://github.com/cloudskiff/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl_linux_amd64\n$ curl -L https://github.com/cloudskiff/driftctl/releases/latest/download/driftctl_SHA256SUMS -o driftctl_SHA256SUMS\n$ curl -L https://github.com/cloudskiff/driftctl/releases/latest/download/driftctl_SHA256SUMS.gpg -o driftctl_SHA256SUMS.gpg\n\n# Import key\n$ gpg --keyserver hkps.pool.sks-keyservers.net --recv-keys 0xACC776A79C824EBD\ngpg: key ACC776A79C824EBD: public key "Cloudskiff <security@cloudskiff.com>" imported\ngpg: Total number processed: 1\ngpg:               imported: 1\n\n# Verify signature (optionally trust the key from gnupg to avoid any warning)\n$ gpg --verify driftctl_SHA256SUMS.gpg\ngpg: Signature made jeu. 04 f\xe9vr. 2021 14:58:06 CET\ngpg:                using EDDSA key 277666005A7F01D484F6376DACC776A79C824EBD\ngpg:                issuer "security@cloudskiff.com"\ngpg: Good signature from "Cloudskiff <security@cloudskiff.com>" [ultimate]\n\n# Verify checksum\n$ sha256sum --ignore-missing -c driftctl_SHA256SUMS\ndriftctl_linux_amd64: OK\n'))),Object(l.b)(o.a,{value:"windows",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# x64\n$ curl -L https://github.com/cloudskiff/driftctl/releases/latest/download/driftctl_windows_amd64.exe -o driftctl.exe\n# x86\n$ curl -L https://github.com/cloudskiff/driftctl/releases/latest/download/driftctl_windows_386.exe -o driftctl.exe\n"))))),Object(l.b)(o.a,{value:"docker",mdxType:"TabItem"},Object(l.b)("p",null,"You can use also our official Docker image from the terminal."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ docker run -t --rm \\\n  -v ~/.aws:/home/.aws:ro \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/home/.driftctl \\\n  -e AWS_PROFILE=non-default-profile \\\n  cloudskiff/driftctl scan\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"-v ~/.aws:/home/.aws:ro")," (optionally) mounts your ",Object(l.b)("inlineCode",{parentName:"p"},"~/.aws")," containing AWS credentials and profile"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"-v $(pwd):/app:ro")," (optionally) mounts your working dir containing the terraform state"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"-v ~/.driftctl:/home/.driftctl")," (optionally) prevents driftctl to download the provider at each run"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"-e AWS_PROFILE=cloudskiff")," (optionally) exports the non-default AWS profile name to use"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"cloudskiff/driftctl:<VERSION_TAG>")," run a specific driftctl tagged release"),Object(l.b)("h2",{id:"usage-examples"},"Usage examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# With a local state\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/home/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  cloudskiff/driftctl scan\n\n# With state stored on a s3 backend\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/home/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  cloudskiff/driftctl scan --from tfstate+s3://my-bucket/path/to/state.tfstate\n\n# With multiple states\n$ docker run -t --rm \\\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/home/.driftctl \\\n    -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n    -e AWS_SECRET_ACCESS_KEY=XXXX \\\n    cloudskiff/driftctl scan --from tfstate://terraform_S3.tfstate --from tfstate://terraform_VPC.tfstate\n\n# Using a named profile\n$ docker run -t --rm \\\n    -v ~/.aws:/home/.aws:ro \\ # mount your aws config folder\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/home/.driftctl \\\n    -e AWS_PROFILE=your-profile \\\n    cloudskiff/driftctl scan\n"))),Object(l.b)(o.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,"Homebrew is a free and open-source package management system for Mac OS X. Install the official driftctl formula from the terminal."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ brew install driftctl\n"))),Object(l.b)(o.a,{value:"macports",mdxType:"TabItem"},Object(l.b)("p",null,"MacPorts is an easy to use system for compiling, installing, and managing open source software. Install the community port from the terminal."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ sudo port install driftctl\n")))))}f.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||f[p]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},183:function(e,t,n){"use strict";var a=n(0),r=n(184);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},184:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},186:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(183),i=n(181),o=n(55),c=n.n(o),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,f=e.groupId,p=e.className,m=Object(l.a)(),b=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(a.useState)(o),v=O[0],h=O[1],y=a.Children.toArray(e.children);if(null!=f){var j=b[f];null!=j&&j!==v&&d.some((function(e){return e.value===j}))&&h(j)}var w=function(e){h(e),null!=f&&g(f,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},187:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);