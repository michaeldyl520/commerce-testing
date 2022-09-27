"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[8301],{26105:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return u}});var a=t(87462),o=t(63366),r=(t(15007),t(64983)),l=t(91515),s=["components"],i={},m={_frontmatter:i},d=l.Z;function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.mdx)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"how-to-use-the-framework-in-cicd"},"How to use the framework in CICD"),(0,r.mdx)("p",null,"To integrate tests into your CICD pipeline, it is best to start with the conceptual flow of the pipeline code."),(0,r.mdx)("h2",{id:"concept"},"Concept"),(0,r.mdx)("p",null,"The overall workflow that tests should follow is:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Obtain an Adobe Commerce or Magento Open Source instance + install pre-requisites."),(0,r.mdx)("li",{parentName:"ul"},"Generate the tests.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Set options for single or parallel running."))),(0,r.mdx)("li",{parentName:"ul"},"Delegate and run tests and gather test-run artifacts.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Re-run options."))),(0,r.mdx)("li",{parentName:"ul"},"Generate the Allure reports from the results.")),(0,r.mdx)("h2",{id:"obtain-a-commerce-instance"},"Obtain a Commerce instance"),(0,r.mdx)("p",null,"To start, we need an Adobe Commerce or Magento Open Source instance to operate against for test generation and execution."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/magento/magento2\n")),(0,r.mdx)("p",null,"or"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"composer create-project --repository=https://repo.magento.com/ magento/project-community-edition magento2ce\n")),(0,r.mdx)("p",null,"For more information on installing Commerce see ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/composer.html"},"Install Commerce using Composer"),"."),(0,r.mdx)("p",null,"After installing the Adobe Commerce or Magento Open Source instance, set the following configuration:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento config:set general/locale/timezone America/Los_Angeles\nbin/magento config:set admin/security/admin_account_sharing 1\nbin/magento config:set admin/security/use_form_key 0\nbin/magento config:set cms/wysiwyg/enabled disabled\n")),(0,r.mdx)("p",null,"These set the default state of the Adobe Commerce or Magento Open Source instance. If you wish to change the default state of the application (and have updated your tests sufficiently to account for it), this is the step to do it."),(0,r.mdx)("p",null,"If your instance has two-factor authentication enabled, see ",(0,r.mdx)("a",{parentName:"p",href:"two-factor-authentication.md"},"Configure 2FA")," to configure tests."),(0,r.mdx)("h2",{id:"install-allure"},"Install Allure"),(0,r.mdx)("p",null,"This is required for generating the report after your test runs. See ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.qameta.io/allure/"},"Allure")," for details."),(0,r.mdx)("h2",{id:"generate-tests"},"Generate tests"),(0,r.mdx)("h3",{id:"single-execution"},"Single execution"),(0,r.mdx)("p",null,"Generate tests based on what you want to run:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf generate:tests\n")),(0,r.mdx)("p",null,"This will generate all tests and a single manifest file under ",(0,r.mdx)("inlineCode",{parentName:"p"},"dev/tests/acceptance/tests/functional/Magento/_generated/testManifest.txt"),"."),(0,r.mdx)("h3",{id:"parallel-execution"},"Parallel execution"),(0,r.mdx)("p",null,"To generate all tests for use in parallel nodes:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf generate:tests --config parallel\n")),(0,r.mdx)("p",null,"This generates a folder under ",(0,r.mdx)("inlineCode",{parentName:"p"},"dev/tests/acceptance/tests/functional/Magento/_generated/groups"),". This folder contains several ",(0,r.mdx)("inlineCode",{parentName:"p"},"group#.txt")," files that can be used later with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"mftf run:manifest")," command."),(0,r.mdx)("h2",{id:"delegate-and-run-tests"},"Delegate and run tests"),(0,r.mdx)("h3",{id:"single-execution-1"},"Single execution"),(0,r.mdx)("p",null,"If you are running on a single node, call:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf run:manifest dev/tests/acceptance/tests/functional/Magento/_generated/testManifest.txt\n")),(0,r.mdx)("h3",{id:"parallel-execution-1"},"Parallel execution"),(0,r.mdx)("p",null,"You can optimize your pipeline by running tests in parallel across multiple nodes."),(0,r.mdx)("p",null,"Tests can be split up into roughly equal running groups using ",(0,r.mdx)("inlineCode",{parentName:"p"},"--config parallel"),"."),(0,r.mdx)("p",null,"You do not want to perform installations on each node again and build it. So, to save time, stash pre-made artifacts from earlier steps and un-stash on the nodes."),(0,r.mdx)("p",null,"The groups can be then distributed on each of the nodes and run separately in an isolated environment."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Stash artifacts from main node and un-stash on current node."),(0,r.mdx)("li",{parentName:"ul"},"Run ",(0,r.mdx)("inlineCode",{parentName:"li"},"vendor/bin/mftf run:manifest <current_group.txt>")," on current node."),(0,r.mdx)("li",{parentName:"ul"},"Gather artifacts from ",(0,r.mdx)("inlineCode",{parentName:"li"},"dev/tests/acceptance/tests/_output")," from current node to main node.")),(0,r.mdx)("h3",{id:"rerun-options"},"Rerun options"),(0,r.mdx)("p",null,"In either single or parallel execution, to re-run failed tests, simply add the ",(0,r.mdx)("inlineCode",{parentName:"p"},"run:failed")," command after executing a manifest:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf run:failed\n")),(0,r.mdx)("h3",{id:"generate-allure-report"},"Generate Allure report"),(0,r.mdx)("p",null,"In the main node, generate reports using your ",(0,r.mdx)("inlineCode",{parentName:"p"},"<path_to_results>")," into a desired output path:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"allure generate <path_to_results> -c -o <path_to_output>\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-cicd-md-474eb9ecab79133b6d8b.js.map