"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[6154],{28769:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return x}});var n,i=a(87462),r=a(63366),l=(a(15007),a(64983)),o=a(91515),s=["components"],d={},m=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),p={_frontmatter:d},u=o.Z;function x(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.mdx)(u,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"data-fixture-annotation"},"Data fixture annotation"),(0,l.mdx)("p",null,"A data fixture is a PHP script that sets data you want to reuse in your test. The script can be defined in a separate file or as a local test case method."),(0,l.mdx)("p",null,"Use data fixtures to prepare a database for tests. The Integration Testing Framework (ITF) reverts the database to its initial state automatically. To set up a date fixture, use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@magentoDataFixture")," annotation."),(0,l.mdx)("h2",{id:"format"},"Format"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"@magentoDataFixture")," takes an argument that points to the data fixture as a filename or local method."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"/**\n * @magentoDataFixture <script_filename>|<method_name>\n */\n")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"<script_filename>")," is the filename of the PHP script."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"<method_name>")," is the name of the method declared in the current class.")),(0,l.mdx)("h2",{id:"principles"},"Principles"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Do not use a direct database connection in fixtures to avoid dependencies on the database structure and vendor."),(0,l.mdx)("li",{parentName:"ol"},"Use an application API to implement your data fixtures."),(0,l.mdx)("li",{parentName:"ol"},"A method that implements a data fixture must be declared as ",(0,l.mdx)("inlineCode",{parentName:"li"},"public")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"static"),"."),(0,l.mdx)("li",{parentName:"ol"},"Fixtures declared at a test level have a higher priority than fixtures declared at a test case level."),(0,l.mdx)("li",{parentName:"ol"},"Test case fixtures are applied to each test in the test case, unless a test has its own fixtures declared."),(0,l.mdx)("li",{parentName:"ol"},"Annotation declaration at a test case level does not affect tests that have their own annotation declarations.")),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("p",null,"As mentioned above, there are two ways to declare fixtures:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"as a PHP script file that is used by other tests and test cases."),(0,l.mdx)("li",{parentName:"ul"},"as a local method that is used by other tests in the test cases.")),(0,l.mdx)("h3",{id:"fixture-as-a-separate-file"},"Fixture as a separate file"),(0,l.mdx)("p",null,"Define the fixture in a separate file when you want to reuse it in different test cases.\nTo declare the fixture, use one of the following conventions:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixture declaration as a path relative to the test suite directory"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Relative to ",(0,l.mdx)("inlineCode",{parentName:"li"},"dev/tests/integration/<test suite directory>")),(0,l.mdx)("li",{parentName:"ul"},"With forward slashes ",(0,l.mdx)("inlineCode",{parentName:"li"},"/")),(0,l.mdx)("li",{parentName:"ul"},"No leading slash")),(0,l.mdx)("p",{parentName:"li"},"Example:"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * @magentoDataFixture Magento/Cms/_files/pages.php\n */\n"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixture declaration as a path relative to a module"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Relative to the directory of a module available in the project"),(0,l.mdx)("li",{parentName:"ul"},"With forward slashes ",(0,l.mdx)("inlineCode",{parentName:"li"},"/")),(0,l.mdx)("li",{parentName:"ul"},"No leading slash in the path part of the declaration")),(0,l.mdx)("p",{parentName:"li"},"Example:"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * @magentoDataFixture VendorName_ModuleName::Test/Integration/_files/fixture_name.php\n */\n")))),(0,l.mdx)("p",null,"The ITF includes the declared PHP script to your test and executes it during the test run."),(0,l.mdx)("p",null,"The following example demonstrates a simple implementation of a Cms module page test from the codebase."),(0,l.mdx)("p",null,"Data fixture to test a Cms module page: ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/dev/tests/integration/testsuite/Magento/Cms/_files/pages.php"},(0,l.mdx)("inlineCode",{parentName:"a"},"dev/tests/integration/testsuite/Magento/Cms/_files/pages.php")),"."),(0,l.mdx)("p",null,"Test case that uses the above data fixture: ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/dev/tests/integration/testsuite/Magento/Cms/Block/PageTest.php"},(0,l.mdx)("inlineCode",{parentName:"a"},"dev/tests/integration/testsuite/Magento/Cms/Block/PageTest.php")),"."),(0,l.mdx)("h3",{id:"fixture-as-a-method"},"Fixture as a method"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/dev/tests/integration/testsuite/Magento/Cms/Controller/PageTest.php"},(0,l.mdx)("inlineCode",{parentName:"a"},"dev/tests/integration/testsuite/Magento/Cms/Controller/PageTest.php"))," demonstrates an example of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"testCreatePageWithSameModuleName()")," test method that uses data from the ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmsPageWithSystemRouteFixture()")," data fixture."),(0,l.mdx)("h3",{id:"test-case-and-test-method-scopes"},"Test case and test method scopes"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"@magentoDataFixture")," can be specified for a particular test or for an entire test case.\nThe basic rules for fixture annotation at different levels are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@magentoDataFixture")," at a test case level, makes the framework to apply the declared fixtures to each test in the test case.\nWhen the final test is complete, all class-level fixtures are reverted."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@magentoDataFixture")," for a particular test, signals the framework to revert the fixtures declared on a test case level and applies the fixtures declared at a test method level instead.\nWhen the test is complete, the ITF reverts the applied fixtures.")),(0,l.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"The integration testing framework interacts with a database to revert the applied fixtures."),(0,l.mdx)("h3",{id:"fixture-rollback"},"Fixture rollback"),(0,l.mdx)("p",null,"A fixture that contains database transactions only, are reverted automatically.\nOtherwise, when a fixture creates files or performs any actions other than database transaction, provide the corresponding rollback logic.\nRollbacks are run after reverting all the fixtures related to database transactions."),(0,l.mdx)("p",null,"A fixture rollback must be of the same format as the corresponding fixture, a script or a method:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"A rollback script must be named according to the corresponding fixture suffixed with ",(0,l.mdx)("inlineCode",{parentName:"li"},"_rollback")," and stored in the same directory."),(0,l.mdx)("li",{parentName:"ul"},"Rollback methods must be of the same class as the corresponding fixture and suffixed with ",(0,l.mdx)("inlineCode",{parentName:"li"},"Rollback"),".")),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Fixture/Rollback"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fixture name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Rollback name"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Script"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Magento/Catalog/_files/categories.php")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Magento/Catalog/_files/categories_rollback.php"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Method"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"\\Magento\\Catalog\\Model\\ProductTest::prepareProduct")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"\\Magento\\Catalog\\Model\\ProductTest::prepareProductRollback"))))),(0,l.mdx)("h3",{id:"restrictions"},"Restrictions"),(0,l.mdx)("p",null,"Do not rely on and do not modify an application state from within a fixture, because ",(0,l.mdx)("a",{parentName:"p",href:"../annotations/magento-app-isolation.md"},"application isolation annotation")," can reset the application state at any time."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-integration-annotations-magento-data-fixture-md-5169f120b178046d2c7f.js.map