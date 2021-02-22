(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(100)),o={id:"authentication",title:"Authentication"},c={unversionedId:"providers/aws/authentication",id:"version-0.4.0/providers/aws/authentication",isDocsHomePage:!1,title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to AWS. Just like the AWS CLI, we use credentials and configuration settings declared as user environment variables, or in local AWS configuration files.",source:"@site/versioned_docs/version-0.4.0/providers/aws/authentication.mdx",slug:"/providers/aws/authentication",permalink:"/driftctl-docs/providers/aws/authentication",editUrl:"https://github.com/cloudskiff/driftctl/versioned_docs/version-0.4.0/providers/aws/authentication.mdx",version:"0.4.0",sidebar:"version-0.4.0/docs",previous:{title:"Version Check",permalink:"/driftctl-docs/usage/flags/version-check"},next:{title:"Supported Resources",permalink:"/driftctl-docs/providers/aws/resources"}},s=[{value:"CloudFormation template",id:"cloudformation-template",children:[{value:"Update the CloudFormation template",id:"update-the-cloudformation-template",children:[]}]},{value:"Least privileged policy",id:"least-privileged-policy",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To use driftctl, we need credentials to make authenticated requests to AWS. Just like the AWS CLI, we use ",Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"credentials and configuration")," settings declared as user environment variables, or in local AWS configuration files."),Object(r.b)("p",null,"driftctl supports ",Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"},"named profile"),". By default, the CLI uses the settings found in the profile named ",Object(r.b)("inlineCode",{parentName:"p"},"default"),". You can override an individual setting by declaring the supported environment variables such as ",Object(r.b)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID"),", ",Object(r.b)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY"),", ",Object(r.b)("inlineCode",{parentName:"p"},"AWS_PROFILE")," ..."),Object(r.b)("p",null,"If you are using an ",Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-role.html"},"IAM role")," as an authorization tool, which is considered a good practice, please be aware that you can still use driftctl by defining a profile for the role in your ",Object(r.b)("inlineCode",{parentName:"p"},"~/.aws/config")," file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"[profile driftctlrole]\nrole_arn = arn:aws:iam::123456789012:role/<NAMEOFTHEROLE>\nsource_profile = user # profile to assume the role\nregion = eu-west-3\n")),Object(r.b)("p",null,"You can now use driftctl by overriding the profile setting."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ AWS_PROFILE=driftctlrole driftctl scan\n")),Object(r.b)("h2",{id:"cloudformation-template"},"CloudFormation template"),Object(r.b)("p",null,"Deploy this CloudFormation template to create our limited permission role that you can use as per our above authentication guide."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudformation/home?#/stacks/quickcreate?stackName=driftctl-stack&templateURL=https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml"},Object(r.b)("img",{parentName:"a",src:"https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg",alt:"Launch Stack"}))),Object(r.b)("h3",{id:"update-the-cloudformation-template"},"Update the CloudFormation template"),Object(r.b)("p",null,"It does not exist an automatic way to update the CloudFormation template from our side because you launched this template on your AWS account. That's why you must be the one to update the template to be on the most recent driftctl role."),Object(r.b)("p",null,"Find below two ways to update the CloudFormation template:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"With the AWS console")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("a",{parentName:"li",href:"https://console.aws.amazon.com/cloudformation"},"AWS CloudFormation console"),", from the list of stacks, select the driftctl stack"),Object(r.b)("li",{parentName:"ul"},"In the stack details pane, choose ",Object(r.b)("strong",{parentName:"li"},"Update")),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("strong",{parentName:"li"},"Replace current template")," and specify our ",Object(r.b)("strong",{parentName:"li"},"Amazon S3 URL")," ",Object(r.b)("inlineCode",{parentName:"li"},"https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml"),", click ",Object(r.b)("strong",{parentName:"li"},"Next")),Object(r.b)("li",{parentName:"ul"},"On the ",Object(r.b)("strong",{parentName:"li"},"Specify stack details")," and the ",Object(r.b)("strong",{parentName:"li"},"Configure stack options")," pages, click ",Object(r.b)("strong",{parentName:"li"},"Next")),Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("strong",{parentName:"li"},"Change set preview")," section, check that AWS CloudFormation will indeed make changes"),Object(r.b)("li",{parentName:"ul"},"Since our template contains one IAM resource, select ",Object(r.b)("strong",{parentName:"li"},"I acknowledge that this template may create IAM resources")),Object(r.b)("li",{parentName:"ul"},"Finally, click ",Object(r.b)("strong",{parentName:"li"},"Update stack"))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"With the AWS CLI")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ aws cloudformation update-stack --stack-name DRIFTCTL_STACK_NAME --template-url https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml --capabilities CAPABILITY_NAMED_IAM\n")),Object(r.b)("h2",{id:"least-privileged-policy"},"Least privileged policy"),Object(r.b)("p",null,"driftctl needs access to your cloud provider account so that it can list resources on your behalf."),Object(r.b)("p",null,"As AWS documentation recommends, the below policy is granting only the permissions required to perform driftctl's tasks."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Resource": "*",\n            "Action": [\n                "ec2:DescribeAddresses",\n                "ec2:DescribeImages",\n                "ec2:DescribeInstanceAttribute",\n                "ec2:DescribeInstances",\n                "ec2:DescribeInstanceCreditSpecifications",\n                "ec2:DescribeInternetGateways",\n                "ec2:DescribeKeyPairs",\n                "ec2:DescribeNetworkAcls",\n                "ec2:DescribeRouteTables",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeSnapshots",\n                "ec2:DescribeTags",\n                "ec2:DescribeVolumes",\n                "ec2:DescribeVpcs",\n                "ec2:DescribeVpcAttribute",\n                "ec2:DescribeVpcClassicLink",\n                "ec2:DescribeVpcClassicLinkDnsSupport",\n                "ec2:DescribeSubnets",\n                "ec2:DescribeNatGateways",\n                "iam:GetPolicy",\n                "iam:GetPolicyVersion",\n                "iam:GetRole",\n                "iam:GetRolePolicy",\n                "iam:GetUser",\n                "iam:GetUserPolicy",\n                "iam:ListAccessKeys",\n                "iam:ListAttachedRolePolicies",\n                "iam:ListAttachedUserPolicies",\n                "iam:ListPolicies",\n                "iam:ListRolePolicies",\n                "iam:ListRoles",\n                "iam:ListUserPolicies",\n                "iam:ListUsers",\n                "lambda:GetFunction",\n                "lambda:GetFunctionCodeSigningConfig",\n                "lambda:ListFunctions",\n                "lambda:ListVersionsByFunction",\n                "rds:DescribeDBInstances",\n                "rds:DescribeDBSubnetGroups",\n                "rds:ListTagsForResource",\n                "route53:GetHostedZone",\n                "route53:ListHostedZones",\n                "route53:ListResourceRecordSets",\n                "route53:ListTagsForResource",\n                "s3:GetAccelerateConfiguration",\n                "s3:GetAnalyticsConfiguration",\n                "s3:GetBucketAcl",\n                "s3:GetBucketCORS",\n                "s3:GetBucketLocation",\n                "s3:GetBucketLogging",\n                "s3:GetBucketNotification",\n                "s3:GetBucketObjectLockConfiguration",\n                "s3:GetBucketPolicy",\n                "s3:GetBucketRequestPayment",\n                "s3:GetBucketTagging",\n                "s3:GetBucketVersioning",\n                "s3:GetBucketWebsite",\n                "s3:GetEncryptionConfiguration",\n                "s3:GetInventoryConfiguration",\n                "s3:GetLifecycleConfiguration",\n                "s3:GetMetricsConfiguration",\n                "s3:GetReplicationConfiguration",\n                "s3:ListAllMyBuckets",\n                "s3:ListBucket",\n                "sqs:GetQueueAttributes",\n                "sqs:ListQueueTags",\n                "sqs:ListQueues",\n                "sns:ListTopics",\n                "sns:GetTopicAttributes",\n                "sns:ListTagsForResource",\n                "sns:ListSubscriptions",\n                "sns:ListSubscriptionsByTopic",\n                "sns:GetSubscriptionAttributes"\n            ]\n        }\n    ]\n}\n')))}u.isMDXComponent=!0}}]);