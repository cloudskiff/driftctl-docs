(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{296:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var s=n(0),i=n.n(s);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=s,p=b["".concat(o,".").concat(m)]||b[m]||d[m]||a;return n?i.a.createElement(p,r(r({ref:t},l),{},{components:n})):i.a.createElement(p,r({ref:t},l))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var s=n(3),i=n(7),a=(n(0),n(296)),o={id:"authentication",title:"Authentication"},r={unversionedId:"providers/aws/authentication",id:"version-0.12.0/providers/aws/authentication",isDocsHomePage:!1,title:"Authentication",description:"To use driftctl, we need credentials to make authenticated requests to AWS. Just like the AWS CLI, we use credentials and configuration settings declared as user environment variables, or in local AWS configuration files.",source:"@site/versioned_docs/version-0.12.0/providers/aws/authentication.mdx",slug:"/providers/aws/authentication",permalink:"/0.12.0/providers/aws/authentication",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.12.0/providers/aws/authentication.mdx",version:"0.12.0",sidebar:"version-0.12.0/docs",previous:{title:"Log level",permalink:"/0.12.0/usage/log-level"},next:{title:"Supported Resources",permalink:"/0.12.0/providers/aws/resources"}},c=[{value:"Custom credentials to read a state on an S3 backend",id:"custom-credentials-to-read-a-state-on-an-s3-backend",children:[]},{value:"Terraform custom role",id:"terraform-custom-role",children:[]},{value:"CloudFormation template",id:"cloudformation-template",children:[{value:"Update the CloudFormation template",id:"update-the-cloudformation-template",children:[]}]},{value:"Least privileged policy",id:"least-privileged-policy",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To use driftctl, we need credentials to make authenticated requests to AWS. Just like the AWS CLI, we use ",Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"credentials and configuration")," settings declared as user environment variables, or in local AWS configuration files."),Object(a.b)("p",null,"driftctl supports ",Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"},"named profile"),". By default, the CLI uses the settings found in the profile named ",Object(a.b)("inlineCode",{parentName:"p"},"default"),". You can override an individual setting by declaring the supported environment variables such as ",Object(a.b)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID"),", ",Object(a.b)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY"),", ",Object(a.b)("inlineCode",{parentName:"p"},"AWS_PROFILE")," ..."),Object(a.b)("p",null,"If you are using an ",Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-role.html"},"IAM role")," as an authorization tool, which is considered a good practice, please be aware that you can still use driftctl by defining a profile for the role in your ",Object(a.b)("inlineCode",{parentName:"p"},"~/.aws/config")," file."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"[profile driftctlrole]\nrole_arn = arn:aws:iam::123456789012:role/<NAMEOFTHEROLE>\nsource_profile = user # profile to assume the role\nregion = eu-west-3\n")),Object(a.b)("p",null,"You can now use driftctl by overriding the profile setting."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"$ AWS_PROFILE=driftctlrole driftctl scan\n")),Object(a.b)("h2",{id:"custom-credentials-to-read-a-state-on-an-s3-backend"},"Custom credentials to read a state on an S3 backend"),Object(a.b)("p",null,"If you want to use a different set of AWS credentials to read your state on S3, you can override each specific AWS environment variable with the DCTL",Object(a.b)("em",{parentName:"p"},"S3")," prefix. The purpose here is to have the choice to read a state in a different region than your infrastructure. Please don't forget to use your usual AWS credentials to read the resources of your actual infrastructure."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'# Export a dedicated AWS named profile (or any other AWS environment variables) to read your state in your S3 backend\n$ export DCTL_S3_PROFILE="s3reader"\n# Export the usual driftctl AWS named profile\n$ export AWS_PROFILE="driftctlrole"\n$ driftctl scan --from tfstate+s3://mybucket/terraform.tfstate\n\n# You can also use a specific region to authenticate to the S3 bucket\n$ DCTL_S3_REGION=us-east-1 driftctl scan --from tfstate+s3://mybucket/terraform.tfstate\n')),Object(a.b)("h2",{id:"terraform-custom-role"},"Terraform custom role"),Object(a.b)("p",null,"You will find below our custom role that you can assume to run driftctl written in HCL."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-hcl"},'data "aws_caller_identity" "current" {}\n\ndata "aws_iam_policy_document" "assume_role_policy" {\n  statement {\n    effect = "Allow"\n    actions   = ["sts:AssumeRole"]\n    principals {\n      type        = "AWS"\n      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"]\n    }\n  }\n}\n\ndata "aws_iam_policy_document" "policy" {\n  statement {\n    effect = "Allow"\n    actions   = [\n      "cloudfront:GetDistribution",\n      "cloudfront:ListDistributions",\n      "cloudfront:ListTagsForResource",\n      "ec2:DescribeAddresses",\n      "ec2:DescribeImages",\n      "ec2:DescribeInstanceAttribute",\n      "ec2:DescribeInstances",\n      "ec2:DescribeInstanceCreditSpecifications",\n      "ec2:DescribeInternetGateways",\n      "ec2:DescribeKeyPairs",\n      "ec2:DescribeNetworkAcls",\n      "ec2:DescribeRouteTables",\n      "ec2:DescribeSecurityGroups",\n      "ec2:DescribeSnapshots",\n      "ec2:DescribeTags",\n      "ec2:DescribeVolumes",\n      "ec2:DescribeVpcs",\n      "ec2:DescribeVpcAttribute",\n      "ec2:DescribeVpcClassicLink",\n      "ec2:DescribeVpcClassicLinkDnsSupport",\n      "ec2:DescribeSubnets",\n      "ec2:DescribeNatGateways",\n      "ecr:DescribeRepositories",\n      "ecr:ListTagsForResource",\n      "iam:GetPolicy",\n      "iam:GetPolicyVersion",\n      "iam:GetRole",\n      "iam:GetRolePolicy",\n      "iam:GetUser",\n      "iam:GetUserPolicy",\n      "iam:ListAccessKeys",\n      "iam:ListAttachedRolePolicies",\n      "iam:ListAttachedUserPolicies",\n      "iam:ListPolicies",\n      "iam:ListRolePolicies",\n      "iam:ListRoles",\n      "iam:ListUserPolicies",\n      "iam:ListUsers",\n      "kms:DescribeKey",\n      "kms:GetKeyPolicy",\n      "kms:GetKeyRotationStatus",\n      "kms:ListAliases",\n      "kms:ListKeys",\n      "kms:ListResourceTags",\n      "lambda:GetEventSourceMapping",\n      "lambda:GetFunction",\n      "lambda:GetFunctionCodeSigningConfig",\n      "lambda:ListEventSourceMappings",\n      "lambda:ListFunctions",\n      "lambda:ListVersionsByFunction",\n      "rds:DescribeDBInstances",\n      "rds:DescribeDBSubnetGroups",\n      "rds:ListTagsForResource",\n      "route53:GetHostedZone",\n      "route53:ListHostedZones",\n      "route53:ListResourceRecordSets",\n      "route53:ListTagsForResource",\n      "route53:ListHealthChecks",\n      "route53:GetHealthCheck",\n      "s3:GetAccelerateConfiguration",\n      "s3:GetAnalyticsConfiguration",\n      "s3:GetBucketAcl",\n      "s3:GetBucketCORS",\n      "s3:GetBucketLocation",\n      "s3:GetBucketLogging",\n      "s3:GetBucketNotification",\n      "s3:GetBucketObjectLockConfiguration",\n      "s3:GetBucketPolicy",\n      "s3:GetBucketRequestPayment",\n      "s3:GetBucketTagging",\n      "s3:GetBucketVersioning",\n      "s3:GetBucketWebsite",\n      "s3:GetEncryptionConfiguration",\n      "s3:GetInventoryConfiguration",\n      "s3:GetLifecycleConfiguration",\n      "s3:GetMetricsConfiguration",\n      "s3:GetReplicationConfiguration",\n      "s3:ListAllMyBuckets",\n      "s3:ListBucket",\n      "sqs:GetQueueAttributes",\n      "sqs:ListQueueTags",\n      "sqs:ListQueues",\n      "sns:ListTopics",\n      "sns:GetTopicAttributes",\n      "sns:ListTagsForResource",\n      "sns:ListSubscriptions",\n      "sns:ListSubscriptionsByTopic",\n      "sns:GetSubscriptionAttributes",\n      "dynamodb:ListTables",\n      "dynamodb:DescribeTable",\n      "dynamodb:DescribeGlobalTable",\n      "dynamodb:ListTagsOfResource",\n      "dynamodb:DescribeTimeToLive",\n      "dynamodb:DescribeTableReplicaAutoScaling",\n      "dynamodb:DescribeContinuousBackups"\n    ]\n    resources = ["*"]\n  }\n}\n\nresource "aws_iam_role" "driftctl_assume_role" {\n  name = "driftctl_assume_role"\n  assume_role_policy = data.aws_iam_policy_document.assume_role_policy.json\n}\n\nresource "aws_iam_role_policy" "driftctl_policy" {\n  name = "driftctl_policy"\n  role = aws_iam_role.driftctl_assume_role.id\n  policy = data.aws_iam_policy_document.policy.json\n}\n')),Object(a.b)("h2",{id:"cloudformation-template"},"CloudFormation template"),Object(a.b)("p",null,"Deploy this CloudFormation template to create our limited permission role that you can use as per our above authentication guide."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudformation/home?#/stacks/quickcreate?stackName=driftctl-stack&templateURL=https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml"},Object(a.b)("img",{parentName:"a",src:"https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg",alt:"Launch Stack"}))),Object(a.b)("p",null,"Once the stack is deployed, you need to attach the following policy to your IAM User which will allow him to assume only the role. For more information about granting a user access to assume a role, see the official ",Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_permissions-to-switch.html"},"IAM User Guide"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "sts:AssumeRole",\n      "Resource": "arn:aws:iam::<IDOFYOURACCOUNT>:role/driftctl_assume_role"\n    }\n  ]\n}\n')),Object(a.b)("h3",{id:"update-the-cloudformation-template"},"Update the CloudFormation template"),Object(a.b)("p",null,"It does not exist an automatic way to update the CloudFormation template from our side because you launched this template on your AWS account. That's why you must be the one to update the template to be on the most recent driftctl role."),Object(a.b)("p",null,"Find below two ways to update the CloudFormation template:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"With the AWS console")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In the ",Object(a.b)("a",{parentName:"li",href:"https://console.aws.amazon.com/cloudformation"},"AWS CloudFormation console"),", from the list of stacks, select the driftctl stack"),Object(a.b)("li",{parentName:"ul"},"In the stack details pane, choose ",Object(a.b)("strong",{parentName:"li"},"Update")),Object(a.b)("li",{parentName:"ul"},"Select ",Object(a.b)("strong",{parentName:"li"},"Replace current template")," and specify our ",Object(a.b)("strong",{parentName:"li"},"Amazon S3 URL")," ",Object(a.b)("inlineCode",{parentName:"li"},"https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml"),", click ",Object(a.b)("strong",{parentName:"li"},"Next")),Object(a.b)("li",{parentName:"ul"},"On the ",Object(a.b)("strong",{parentName:"li"},"Specify stack details")," and the ",Object(a.b)("strong",{parentName:"li"},"Configure stack options")," pages, click ",Object(a.b)("strong",{parentName:"li"},"Next")),Object(a.b)("li",{parentName:"ul"},"In the ",Object(a.b)("strong",{parentName:"li"},"Change set preview")," section, check that AWS CloudFormation will indeed make changes"),Object(a.b)("li",{parentName:"ul"},"Since our template contains one IAM resource, select ",Object(a.b)("strong",{parentName:"li"},"I acknowledge that this template may create IAM resources")),Object(a.b)("li",{parentName:"ul"},"Finally, click ",Object(a.b)("strong",{parentName:"li"},"Update stack"))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"With the AWS CLI")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"$ aws cloudformation update-stack --stack-name DRIFTCTL_STACK_NAME --template-url https://driftctl-cfn-templates.s3.eu-west-3.amazonaws.com/driftctl-role.yml --capabilities CAPABILITY_NAMED_IAM\n")),Object(a.b)("h2",{id:"least-privileged-policy"},"Least privileged policy"),Object(a.b)("p",null,"driftctl needs access to your cloud provider account so that it can list resources on your behalf."),Object(a.b)("p",null,"As AWS documentation recommends, the below policy is granting only the permissions required to perform driftctl's tasks."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Resource": "*",\n            "Action": [\n                "cloudfront:GetDistribution",\n                "cloudfront:ListDistributions",\n                "cloudfront:ListTagsForResource",\n                "ec2:DescribeAddresses",\n                "ec2:DescribeImages",\n                "ec2:DescribeInstanceAttribute",\n                "ec2:DescribeInstances",\n                "ec2:DescribeInstanceCreditSpecifications",\n                "ec2:DescribeInternetGateways",\n                "ec2:DescribeKeyPairs",\n                "ec2:DescribeNetworkAcls",\n                "ec2:DescribeRouteTables",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeSnapshots",\n                "ec2:DescribeTags",\n                "ec2:DescribeVolumes",\n                "ec2:DescribeVpcs",\n                "ec2:DescribeVpcAttribute",\n                "ec2:DescribeVpcClassicLink",\n                "ec2:DescribeVpcClassicLinkDnsSupport",\n                "ec2:DescribeSubnets",\n                "ec2:DescribeNatGateways",\n                "ecr:DescribeRepositories",\n                "ecr:ListTagsForResource",\n                "iam:GetPolicy",\n                "iam:GetPolicyVersion",\n                "iam:GetRole",\n                "iam:GetRolePolicy",\n                "iam:GetUser",\n                "iam:GetUserPolicy",\n                "iam:ListAccessKeys",\n                "iam:ListAttachedRolePolicies",\n                "iam:ListAttachedUserPolicies",\n                "iam:ListPolicies",\n                "iam:ListRolePolicies",\n                "iam:ListRoles",\n                "iam:ListUserPolicies",\n                "iam:ListUsers",\n                "kms:DescribeKey",\n                "kms:GetKeyPolicy",\n                "kms:GetKeyRotationStatus",\n                "kms:ListAliases",\n                "kms:ListKeys",\n                "kms:ListResourceTags",\n                "lambda:GetEventSourceMapping",\n                "lambda:GetFunction",\n                "lambda:GetFunctionCodeSigningConfig",\n                "lambda:ListEventSourceMappings",\n                "lambda:ListFunctions",\n                "lambda:ListVersionsByFunction",\n                "rds:DescribeDBInstances",\n                "rds:DescribeDBSubnetGroups",\n                "rds:ListTagsForResource",\n                "route53:GetHostedZone",\n                "route53:ListHostedZones",\n                "route53:ListResourceRecordSets",\n                "route53:ListTagsForResource",\n                "route53:ListHealthChecks",\n                "route53:GetHealthCheck",\n                "s3:GetAccelerateConfiguration",\n                "s3:GetAnalyticsConfiguration",\n                "s3:GetBucketAcl",\n                "s3:GetBucketCORS",\n                "s3:GetBucketLocation",\n                "s3:GetBucketLogging",\n                "s3:GetBucketNotification",\n                "s3:GetBucketObjectLockConfiguration",\n                "s3:GetBucketPolicy",\n                "s3:GetBucketRequestPayment",\n                "s3:GetBucketTagging",\n                "s3:GetBucketVersioning",\n                "s3:GetBucketWebsite",\n                "s3:GetEncryptionConfiguration",\n                "s3:GetInventoryConfiguration",\n                "s3:GetLifecycleConfiguration",\n                "s3:GetMetricsConfiguration",\n                "s3:GetReplicationConfiguration",\n                "s3:ListAllMyBuckets",\n                "s3:ListBucket",\n                "sqs:GetQueueAttributes",\n                "sqs:ListQueueTags",\n                "sqs:ListQueues",\n                "sns:ListTopics",\n                "sns:GetTopicAttributes",\n                "sns:ListTagsForResource",\n                "sns:ListSubscriptions",\n                "sns:ListSubscriptionsByTopic",\n                "sns:GetSubscriptionAttributes",\n                "dynamodb:ListTables",\n                "dynamodb:DescribeTable",\n                "dynamodb:DescribeGlobalTable",\n                "dynamodb:ListTagsOfResource",\n                "dynamodb:DescribeTimeToLive",\n                "dynamodb:DescribeTableReplicaAutoScaling",\n                "dynamodb:DescribeContinuousBackups"\n            ]\n        }\n    ]\n}\n')))}u.isMDXComponent=!0}}]);