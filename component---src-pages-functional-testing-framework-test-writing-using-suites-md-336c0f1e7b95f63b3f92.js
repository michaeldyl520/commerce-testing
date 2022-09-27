"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[5814],{6803:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return u},default:function(){return r}});var a=n(87462),i=n(63366),s=(n(15007),n(64983)),m=n(91515),o=["components"],u={},d={_frontmatter:u},l=m.Z;function r(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.mdx)(l,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"using-suites"},"Using suites"),(0,s.mdx)("p",null,"With an increasing number of tests, it is important to have a mechanism to organize and consolidate them for ease-of-use."),(0,s.mdx)("h3",{id:"what-is-a-suite"},"What is a suite?"),(0,s.mdx)("p",null,"A suite is a collection of tests that are intended to test specific behaviors of Magento. It may contain initialization and clean up steps common to the included test cases. It allows you to include, exclude and/or group tests with preconditions and post conditions.\nYou can create a suite referencing tests, test groups and modules."),(0,s.mdx)("h3",{id:"how-is-a-suite-defined"},"How is a suite defined?"),(0,s.mdx)("p",null,"A suite should be created under ",(0,s.mdx)("inlineCode",{parentName:"p"},"<magento2 root>/dev/tests/acceptance/tests/_suite")," if it has cross-module references. If a suite references only a single module, it should be created under ",(0,s.mdx)("inlineCode",{parentName:"p"},"<module>/Test/Mftf/Suite"),". The generated tests for each suite are grouped into their own directory under ",(0,s.mdx)("inlineCode",{parentName:"p"},"<magento2 root>/dev/tests/acceptance/tests/functional/Magento/FunctionalTest/_generated/"),"."),(0,s.mdx)("h3",{id:"what-is-the-format-of-a-suite"},"What is the format of a suite?"),(0,s.mdx)("p",null,"A suite is comprised of blocks:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"<before>")," : executes precondition once per suite run."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"<after>"),"  : executes postcondition once per suite run."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"<include>"),": includes specific tests/groups/modules in the suite."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"<exclude>"),": excludes specific tests/groups/modules from the suite.")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:mftf:Suite/etc/suiteSchema.xsd">\n    <suite name="">\n        <before>\n        </before>\n        <after>\n        </after>\n        <include>\n            <test name=""/>\n            <group name=""/>\n            <module name="" file=""/>\n        </include>\n        <exclude>\n            <test name=""/>\n            <group name=""/>\n            <module name="" file=""/>\n        </exclude>\n    </suite>\n</suites>\n')),(0,s.mdx)("h3",{id:"example"},"Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<suites xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:mftf:Suite/etc/suiteSchema.xsd">\n    <suite name="WYSIWYGDisabledSuite">\n        <before>\n            <magentoCLI stepKey="disableWYSIWYG" command="config:set cms/wysiwyg/enabled disabled" />\n        </before>\n        <after>\n            <magentoCLI stepKey="enableWYSIWYG" command="config:set cms/wysiwyg/enabled enabled" />\n        </after>\n        <include>\n            <module name="Catalog"/>\n        </include>\n        <exclude>\n            <test name="WYSIWYGIncompatibleTest"/>\n        </exclude>\n    </suite>\n</suites>\n')),(0,s.mdx)("p",null,"This example declares a suite with name ",(0,s.mdx)("inlineCode",{parentName:"p"},"WYSIWYGDisabledSuite"),":"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Disables WYSIWYG of the Adobe Commerce or Magento Open Source instance before running the tests."),(0,s.mdx)("li",{parentName:"ul"},"Runs all tests from the ",(0,s.mdx)("inlineCode",{parentName:"li"},"Catalog")," module, except ",(0,s.mdx)("inlineCode",{parentName:"li"},"WYSIWYGIncompatibleTest")),(0,s.mdx)("li",{parentName:"ul"},"Returns the Adobe Commerce or Magento Open Source instance back to its original state, by enabling WYSIWYG at the end of testing.")),(0,s.mdx)("h3",{id:"using-suite-commands"},"Using suite commands"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Generate all tests within a suite."),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf generate:suite <suiteName> [<suiteName>]\n"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Run all tests within suite."),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf run:group <suiteName> [<suiteName>]\n"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Generates any combination of suites and tests."),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},'vendor/bin/mftf generate:tests --tests \'{"tests":["testName1","testName2"],"suites":{"suite1":["suite_test1"],"suite2":null}}\'\n')))),(0,s.mdx)("h3",{id:"run-specific-tests-within-a-suite"},"Run specific tests within a suite"),(0,s.mdx)("p",null,"If a test is referenced in a suite, it can be run in the suite's context with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"run")," command. If a test is referenced in multiple suites, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"run")," command will run the test multiple times in all contexts."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf run:test <testName> [<testName>]\n")),(0,s.mdx)("h3",{id:"when-to-use-suites"},"When to use suites?"),(0,s.mdx)("p",null,"Suites are a great way to organize tests which need the Adobe Commerce or Magento Open Source to be configured in a specific way as a pre-requisite. The conditions are executed once per suite which optimizes test execution time. If you wish to categorize tests solely based on functionality, use group tags instead."))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-test-writing-using-suites-md-336c0f1e7b95f63b3f92.js.map