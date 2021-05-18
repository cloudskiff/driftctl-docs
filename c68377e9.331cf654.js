(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(203)),c={id:"scan-usage",title:"Scan"},i={unversionedId:"usage/cmd/scan-usage",id:"usage/cmd/scan-usage",isDocsHomePage:!1,title:"Scan",description:"`shell",source:"@site/docs/usage/cmd/scan.mdx",slug:"/usage/cmd/scan-usage",permalink:"/next/usage/cmd/scan-usage",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/docs/usage/cmd/scan.mdx",version:"current",sidebar:"docs",previous:{title:"Known Issues and Limitations",permalink:"/next/limitations"},next:{title:"Completion",permalink:"/next/usage/cmd/completion-usage"}},s=[{value:"Description",id:"description",children:[{value:"Options",id:"options",children:[]}]},{value:"--from",id:"--from",children:[{value:"Supported IaC sources",id:"supported-iac-sources",children:[]}]},{value:"--output",id:"--output",children:[{value:"Console",id:"console",children:[]},{value:"JSON",id:"json",children:[]},{value:"Computed Fields",id:"computed-fields",children:[]}]},{value:"--to",id:"--to",children:[{value:"Usage",id:"usage-2",children:[]},{value:"Supported Providers",id:"supported-providers",children:[]}]},{value:"--quiet",id:"--quiet",children:[]},{value:"--strict",id:"--strict",children:[{value:"Usage",id:"usage-3",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan [OPTIONS]\n$ driftctl scan --from tfstate+s3://terraform.tfstate  --to github+tf --output console://\n")),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Scan resources from the input Terraform statefile and compare it to your current profile infrastructure."),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Flag"),Object(o.b)("th",{parentName:"tr",align:"center"},"Environment"),Object(o.b)("th",{parentName:"tr",align:"right"},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"#--from",title:"iac source"},Object(o.b)("inlineCode",{parentName:"a"},"--from"))),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"DCTL_FROM")),Object(o.b)("td",{parentName:"tr",align:"right"},Object(o.b)("inlineCode",{parentName:"td"},"tfstate://terraform.tfstate"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"#--output",title:"output"},Object(o.b)("inlineCode",{parentName:"a"},"--output"))),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"DCTL_OUTPUT")),Object(o.b)("td",{parentName:"tr",align:"right"},Object(o.b)("inlineCode",{parentName:"td"},"console://"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"#--to",title:"to"},Object(o.b)("inlineCode",{parentName:"a"},"--to"))),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"DCTL_TO")),Object(o.b)("td",{parentName:"tr",align:"right"},Object(o.b)("inlineCode",{parentName:"td"},"aws+tf"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"#--quiet",title:"quiet"},Object(o.b)("inlineCode",{parentName:"a"},"--quiet"))),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"DCTL_QUIET")),Object(o.b)("td",{parentName:"tr",align:"right"},Object(o.b)("inlineCode",{parentName:"td"},"false"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"#--strict",title:"strict"},Object(o.b)("inlineCode",{parentName:"a"},"--strict"))),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"DCTL_STRICT")),Object(o.b)("td",{parentName:"tr",align:"right"},Object(o.b)("inlineCode",{parentName:"td"},"false"))))),Object(o.b)("h2",{id:"--from"},"--from"),Object(o.b)("p",null,"Currently, driftctl only supports reading IaC from a Terraform state.\nWe are investigating to support the Terraform code as well, as a state does not represent an intention."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Multiple states can be read by passing ",Object(o.b)("inlineCode",{parentName:"p"},"--from")," flags. You can also use glob patterns to match multiple state files at once."))),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# I want to read a local state and a state stored in an S3 bucket:\n$ driftctl scan \\\n  --from tfstate+s3://statebucketdriftctl/terraform.tfstate \\\n  --from tfstate://terraform_toto.tfstate\n\n# You can also read all files under a given prefix for S3\n$ driftctl scan --from tfstate+s3://statebucketdriftctl/states\n\n# In a given local folder\n# driftctl will recursively use all files under this folder.\n#\n# N.B. Symlinks under the root folder will be ignored.\n#      If the folder itself is a symlink it will be followed.\n$ driftctl scan --from tfstate://my-states/directory\n# Only match state files in that directory\n$ driftctl scan --from tfstate://my-states/directory/*.tfstate\n\n# Using glob pattern to recursively use any *.tfstate file.\n$ driftctl scan --from tfstate://path/to/**/*.tfstate\n$ driftctl scan --from tfstate+s3://path/to/**/*.tfstate\n\n# We also support HTTP(s) URLs with authentication\n# the tool will fetch the file from the given URL\n#\n# You can use the --headers option if you need to add extra headers to the request (e.g: for authentication purposes)\n$ driftctl scan --from tfstate+https://example.com/terraform.tfstate --headers 'Authorization=Basic ...; X-Custom-Header=value'\n\n# You can also read the current state for a given workspace from Terraform Cloud/Enterprise\n# Don't forget to provide your Terraform Cloud API token\n#\n$ driftctl scan --from tfstate+tfcloud://$WORKSPACE_ID --tfc-token $TFC_TOKEN\n")),Object(o.b)("h3",{id:"supported-iac-sources"},"Supported IaC sources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Terraform state"),Object(o.b)("li",{parentName:"ul"},"Local: ",Object(o.b)("inlineCode",{parentName:"li"},"--from tfstate://terraform.tfstate")),Object(o.b)("li",{parentName:"ul"},"S3: ",Object(o.b)("inlineCode",{parentName:"li"},"--from tfstate+s3://my-bucket/path/to/state.tfstate")),Object(o.b)("li",{parentName:"ul"},"HTTPS: ",Object(o.b)("inlineCode",{parentName:"li"},"--from tfstate+https://my-url/state.tfstate")),Object(o.b)("li",{parentName:"ul"},"Terraform Cloud / Terraform Enterprise: ",Object(o.b)("inlineCode",{parentName:"li"},"--from tfstate+tfcloud://WORKSPACE_ID"))),Object(o.b)("p",null,"You can use any unsupported backend by using ",Object(o.b)("inlineCode",{parentName:"p"},"terraform")," to pipe your state in a file and then use this file with driftctl:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ terraform state pull > state.tfstate\n$ driftctl scan --from tfstate://state.tfstate\n")),Object(o.b)("h4",{id:"s3"},"S3"),Object(o.b)("p",null,"driftctl needs read-only access so you could use the policy below to ensure minimal access to your state file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::mybucket"\n    },\n    {\n      "Effect": "Allow",\n      "Action": "s3:GetObject",\n      "Resource": "arn:aws:s3:::mybucket/path/to/my/key"\n    }\n  ]\n}\n')),Object(o.b)("h4",{id:"http--gitlab"},"HTTP + GitLab"),Object(o.b)("p",null,"The HTTP backend supports the GitLab managed Terraform State using their API."),Object(o.b)("p",null,"All you need is a GitLab repository that contains a Terraform state and an access token with the ",Object(o.b)("inlineCode",{parentName:"p"},"read_api")," scope."),Object(o.b)("p",null,"Here's what the command looks like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ GITLAB_TOKEN=<access_token> \\\ndriftctl scan \\\n--from tfstate+https://gitlab.com/api/v4/projects/<project_id>/terraform/state/<path_to_state> \\\n--headers "Authorization=Bearer ${GITLAB_TOKEN}"\n')),Object(o.b)("p",null,"You can find more information about the GitLab managed Terraform State on the ",Object(o.b)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/infrastructure/terraform_state.html"},"GitLab documentation website"),"."),Object(o.b)("h2",{id:"--output"},"--output"),Object(o.b)("p",null,"driftctl supports multiple kinds of output formats and by default uses the standard output (console)."),Object(o.b)("h3",{id:"console"},"Console"),Object(o.b)("p",null,"Environment: ",Object(o.b)("inlineCode",{parentName:"p"},"DCTL_OUTPUT")),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan\n$ driftctl scan --output console://\n$ DCTL_OUTPUT=console:// driftctl scan\n")),Object(o.b)("h4",{id:"structure"},"Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"Found missing resources:\n  aws_s3_bucket:\n    - driftctl-bucket-test-2\nFound resources not covered by IaC:\n  aws_s3_bucket:\n    - driftctl-bucket-test-3\nFound changed resources:\n  - driftctl-bucket-test-1 (aws_s3_bucket):\n    ~ Versioning.0.Enabled: false => true\nFound 3 resource(s)\n - 33% coverage\n - 1 covered by IaC\n - 1 not covered by IaC\n - 1 missing on cloud provider\n - 1/1 changed outside of IaC\n")),Object(o.b)("h3",{id:"json"},"JSON"),Object(o.b)("h4",{id:"usage-1"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan --output json:///tmp/result.json # Will output results to /tmp/result.json\n$ driftctl scan --output json://result.json # Will output results to ./result.json\n$ driftctl scan --output json://stdout # Will output results in json to stdout directly\n$ DCTL_OUTPUT=json://result.json driftctl scan\n")),Object(o.b)("h4",{id:"structure-1"},"Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "summary": {\n    "total_resources": 3,\n    "total_changed": 1,\n    "total_unmanaged": 1,\n    "total_missing": 1,\n    "total_managed": 1\n  },\n  "managed": [\n    // list of resources found in IaC and in sync with remote\n    {\n      "id": "driftctl-bucket-test-1",\n      "type": "aws_s3_bucket"\n    }\n  ],\n  "unmanaged": [\n    // list of resources found in remote but not in IaC\n    {\n      "id": "driftctl-bucket-test-3",\n      "type": "aws_s3_bucket"\n    }\n  ],\n  "missing": [\n    // list of resources found in IaC but not on remote\n    {\n      "id": "driftctl-bucket-test-2",\n      "type": "aws_s3_bucket"\n    },\n  ],\n  "differences": [\n    // A list of changes on managed resources\n    {\n      "res": {\n        "id": "driftctl-bucket-test-1",\n        "type": "aws_s3_bucket"\n      },\n      "changelog": [\n        {\n          "type": "update", // Kind of change, could be one of update, create, delete\n          "path": [\n            // Path of the change, sorted from root to leaf\n            "Versioning",\n            "0",\n            "Enabled"\n          ],\n          "from": false, // Mixed type\n          "to": true // Mixed type\n        }\n      ]\n    }\n  ],\n  "coverage": 33\n}\n')),Object(o.b)("h3",{id:"computed-fields"},"Computed Fields"),Object(o.b)("p",null,"From Terraform documentation, a ",Object(o.b)("inlineCode",{parentName:"p"},"computed")," field is often used to represent values that are not user configurable or can not be known at time of ",Object(o.b)("inlineCode",{parentName:"p"},"terraform plan")," or ",Object(o.b)("inlineCode",{parentName:"p"},"apply"),"."),Object(o.b)("p",null,"Since those values are not known ahead of time from terraform point of view, it is obviously possible that the values displayed in a terraform state file are not up-to-date and may require a ",Object(o.b)("inlineCode",{parentName:"p"},"terraform refresh"),"."),Object(o.b)("p",null,"Thus, it could be possible that driftctl finds drifts that are considered false positives because of those outdated values."),Object(o.b)("p",null,"We decided to output computed fields and to display a message at the end of the scan to remind you of this behavior."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'Found changed resources:\n  - eipalloc-0e2894d8ea42851df (aws_eip):\n    ~ AssociationId: "" => "eipassoc-0ee67e1ca759733a2" (computed)\n    ~ Instance: "" => "i-004611704837fd09a" (computed)\n    ~ NetworkInterface: "" => "eni-0a62972b0471447f6" (computed)\n    ~ PrivateDns: <nil> => "ip-172-31-40-4.eu-west-3.compute.internal" (computed)\n    ~ PrivateIp: "" => "172.31.40.4" (computed)\nFound 1 resource(s)\n - 100% coverage\n - 1 covered by IaC\n - 0 not covered by IaC\n - 0 missing on cloud provider\n - 1/1 changed outside of IaC\nYou have diffs on computed fields, check the documentation for potential false positive drifts\n')),Object(o.b)("h2",{id:"--to"},"--to"),Object(o.b)("p",null,"driftctl supports multiple providers. By default it will scan against AWS, but you can change this using ",Object(o.b)("inlineCode",{parentName:"p"},"--to"),"."),Object(o.b)("h3",{id:"usage-2"},"Usage"),Object(o.b)("p",null,"Environment: ",Object(o.b)("inlineCode",{parentName:"p"},"DCTL_TO")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl scan --to PROVIDER+TYPE\n\n# examples:\n$ driftctl scan --to aws+tf\n$ DCTL_TO=github+tf driftctl scan\n")),Object(o.b)("h3",{id:"supported-providers"},"Supported Providers"),Object(o.b)("p",null,"driftctl supports these providers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"github+tf")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"aws+tf"))),Object(o.b)("h2",{id:"--quiet"},"--quiet"),Object(o.b)("p",null,"This flag prevents stdout to be use for anything but the scan result."),Object(o.b)("h2",{id:"--strict"},"--strict"),Object(o.b)("p",null,"When running driftctl against an AWS account, you may experience unnecessary noises with resources that don't belong to you. It can be the case if you have an organization account in which you will by default have a service-linked role associated to your account (e.g. AWSServiceRoleForOrganizations). For now, driftctl ignores those service-linked resources by default."),Object(o.b)("p",null,"If you still want to include those resources in the report anyway, you can enable the strict mode."),Object(o.b)("p",null,"For now, resources include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Service-linked AWS IAM roles, including their policies and policy attachments")),Object(o.b)("h3",{id:"usage-3"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# Enable the strict mode\n$ driftctl scan --strict\n")))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);