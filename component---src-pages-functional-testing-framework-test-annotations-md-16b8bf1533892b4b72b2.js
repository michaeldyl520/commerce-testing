"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[3438],{86032:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return x}});var n,l=a(87462),r=a(63366),m=(a(15007),a(64983)),d=a(91515),i=["components"],p={},o=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),s={_frontmatter:p},u=d.Z;function x(e){var t=e.components,a=(0,r.Z)(e,i);return(0,m.mdx)(u,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"annotations"},"Annotations"),(0,m.mdx)("p",null,"Annotations are essentially comments in the code. In PHP, they all are marked by a preceding ",(0,m.mdx)("inlineCode",{parentName:"p"},"@")," symbol."),(0,m.mdx)("p",null,"Within ",(0,m.mdx)("a",{parentName:"p",href:"index.md#tests"},"tests"),", annotations are contained within their own node."),(0,m.mdx)("h2",{id:"principles"},"Principles"),(0,m.mdx)("p",null,"The following conventions apply to annotations in the Functional Testing Framework:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"All annotations are within an ",(0,m.mdx)("inlineCode",{parentName:"li"},"<annotations>")," element."),(0,m.mdx)("li",{parentName:"ul"},"Each element within corresponds to a supported annotation type."),(0,m.mdx)("li",{parentName:"ul"},"There is no distinction made in XML between Codeception annotations and Allure annotations."),(0,m.mdx)("li",{parentName:"ul"},"Each annotation contains only one value.\nIf multiple annotation values are supported and required each value requires a separate annotation."),(0,m.mdx)("li",{parentName:"ul"},"Tests must contain all of the following annotations: stories, title, description, severity.")),(0,m.mdx)("p",null,"Recommended use cases of the annotation types:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#stories"},"stories")," - report grouping, a set of tests that verify a story."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#title"},"title")," - description of the test purpose."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#group"},"group")," - general functionality grouping."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#description"},"description")," - description of how the test achieves the purpose defined in the title."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#skip"},"skip")," - a label for the test to be skipped during generation (for example, an incomplete test blocked by an issue)")),(0,m.mdx)("h2",{id:"example"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<annotations>\n    <stories value="Category Creation"/>\n    <title value="Create a Category via Admin"/>\n    <description value="Test logs into admin backend and creates a category."/>\n    <severity value="CRITICAL"/>\n    <group value="category"/>\n</annotations>\n')),(0,m.mdx)("h2",{id:"reference"},"Reference"),(0,m.mdx)("h3",{id:"description"},"description"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<description>")," element is an implementation of a ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/allure-framework/allure-phpunit#extended-test-class-or-test-method-description"},(0,m.mdx)("inlineCode",{parentName:"a"},"@Description"))," Allure tag; Metadata for report."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required")))),(0,m.mdx)("h4",{id:"example-1"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<description value="Add Catalog via Admin"/>\n')),(0,m.mdx)("h3",{id:"features"},"features"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<features>")," element is an implementation of a ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/allure-framework/allure-phpunit#map-test-classes-and-test-methods-to-features-and-stories"},(0,m.mdx)("inlineCode",{parentName:"a"},"@Features"))," Allure tag."),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"<features>")," sets a string that will be displayed as a feature within the Allure report. Tests under the same feature are grouped together in the report."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required")))),(0,m.mdx)("h4",{id:"example-2"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<features value="Catalog"/>\n<features value="Add/Edit"/>\n')),(0,m.mdx)("h3",{id:"group"},"group"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<group>")," element is an implementation of a ",(0,m.mdx)("a",{parentName:"p",href:"https://codeception.com/docs/07-AdvancedUsage#Groups"},(0,m.mdx)("inlineCode",{parentName:"a"},"@group"))," Codeception tag."),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"<group>")," specifies a string to identify and collect tests together.\nAny test can be a part of multiple groups.\nThe purpose of grouping is to create a set of test for a functionality or purpose, such as all cart tests or all slow tests and run them together locally."),(0,m.mdx)(o,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Group values cannot collide with ",(0,m.mdx)("a",{parentName:"p",href:"../suite.md"},"suite")," names."),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Add ",(0,m.mdx)("inlineCode",{parentName:"p"},"<skip>")," to the test to skip it during test run."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"),(0,m.mdx)("th",{parentName:"tr",align:null},"Definition"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required"),(0,m.mdx)("td",{parentName:"tr",align:null},"A value that is used to group tests. It should be lower case.")))),(0,m.mdx)("h4",{id:"example-3"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<group value="category"/>\n')),(0,m.mdx)("h3",{id:"return"},"return"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<return>")," element is an implementation of a ",(0,m.mdx)("a",{parentName:"p",href:"https://codeception.com/docs/07-AdvancedUsage#Examples"},(0,m.mdx)("inlineCode",{parentName:"a"},"@return"))," Codeception tag.\nIt specifies what is returned from a test execution."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required")))),(0,m.mdx)("h4",{id:"example-4"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<return value="void"/>\n')),(0,m.mdx)("h3",{id:"severity"},"severity"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<severity>")," element is an implementation of the ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/allure-framework/allure-phpunit#set-test-severity"},(0,m.mdx)("inlineCode",{parentName:"a"},"@Severity"))," Allure annotation, which is used to prioritise tests by severity."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"),(0,m.mdx)("th",{parentName:"tr",align:null},"Acceptable values"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"MINOR"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"AVERAGE"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"MAJOR"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"CRITICAL"),", ",(0,m.mdx)("inlineCode",{parentName:"td"},"BLOCKER"))))),(0,m.mdx)("h4",{id:"example-5"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<severity value="CRITICAL"/>\n')),(0,m.mdx)("h4",{id:"usage-guidelines"},"Usage guidelines"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Severity Level"),(0,m.mdx)("th",{parentName:"tr",align:null},"Usage"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"BLOCKER")),(0,m.mdx)("td",{parentName:"tr",align:null},"If this test fails, the customer is completely blocked from purchasing a product.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"CRITICAL")),(0,m.mdx)("td",{parentName:"tr",align:null},"This is a serious problem impacting conversion, or affecting the operation of the store.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"MAJOR")),(0,m.mdx)("td",{parentName:"tr",align:null},"Store conversion rate is reduced owing to this issue. For example, something is broken or missing that impacts checkout frequency or cart volume.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"AVERAGE")),(0,m.mdx)("td",{parentName:"tr",align:null},"A fault on the storefront that can negatively impact conversion rate (like UI errors or omissions), or problems with Admin functionality.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"MINOR")),(0,m.mdx)("td",{parentName:"tr",align:null},"An application or configuration fault that has no impact on conversion rate.")))),(0,m.mdx)("h3",{id:"skip"},"skip"),(0,m.mdx)("p",null,"Use the ",(0,m.mdx)("inlineCode",{parentName:"p"},"<skip>")," element to skip a test.\nIt contains one or more child elements ",(0,m.mdx)("inlineCode",{parentName:"p"},"<issueId>")," to specify one or more issues that cause the test skipping."),(0,m.mdx)("h4",{id:"issueid"},"issueId"),(0,m.mdx)("p",null,"This element under ",(0,m.mdx)("inlineCode",{parentName:"p"},"<skip>")," is required at least once and contains references to issues that cause the test to be skipped."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required")))),(0,m.mdx)("h4",{id:"example-6"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<skip>\n    <issueId value="#117"/>\n    <issueId value="MC-345"/>\n</skip>\n')),(0,m.mdx)("h3",{id:"stories"},"stories"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<stories>")," element is an implementation of a ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/allure-framework/allure-phpunit#map-test-classes-and-test-methods-to-features-and-stories"},(0,m.mdx)("inlineCode",{parentName:"a"},"@Stories"))," Allure tag.\nIt has the same functionality as ",(0,m.mdx)("a",{parentName:"p",href:"#features"},"features"),", within the Story report group."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required")))),(0,m.mdx)("h4",{id:"example-7"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<stories value="Add Catalog"/>\n<stories value="Edit Catalog"/>\n')),(0,m.mdx)("h3",{id:"testcaseid"},"testCaseId"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<testCaseId>")," element is an implementation of a ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/allure-framework/allure1/wiki/Test-Case-ID"},(0,m.mdx)("inlineCode",{parentName:"a"},"@TestCaseId"))," Allure tag.\nIt specifies a ZephyrId for a test."),(0,m.mdx)("p",null,"This tag is prefixed to a title of the test annotation to make the test title unique in Allure."),(0,m.mdx)("p",null,"If the linkage is set up correctly in the Allure config, the test will have a hyperlink to the Zephyr test case in the report."),(0,m.mdx)("p",null,"Learn more about ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/allure-framework/allure1/wiki/Test-Case-ID"},"setup instructions in Allure"),"."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required")))),(0,m.mdx)("h4",{id:"example-8"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<testCaseId value="#"/>\n')),(0,m.mdx)("h3",{id:"title"},"title"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<title>")," element is an implementation of ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/allure-framework/allure-phpunit#human-readable-test-class-or-test-method-title"},(0,m.mdx)("inlineCode",{parentName:"a"},"@Title"))," Allure tag; Metadata for report."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required")))),(0,m.mdx)("h4",{id:"example-9"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<title value="Add Catalog"/>\n')),(0,m.mdx)("h3",{id:"usecaseid"},"useCaseId"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"<useCaseId>")," element is an implementation of a ",(0,m.mdx)("inlineCode",{parentName:"p"},"@UseCaseId")," custom tag. It specifies the use case ID for a test and is ignored by Allure configuration at the moment, as Allure implementation is not complete."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Use"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"value")),(0,m.mdx)("td",{parentName:"tr",align:null},"string"),(0,m.mdx)("td",{parentName:"tr",align:null},"required")))),(0,m.mdx)("h4",{id:"example-10"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<useCaseId value="USECASE-1"/>\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-test-annotations-md-16b8bf1533892b4b72b2.js.map