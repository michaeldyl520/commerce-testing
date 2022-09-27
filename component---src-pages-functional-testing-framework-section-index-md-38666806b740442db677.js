"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[8933],{76493:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return s}});var a=n(87462),m=n(63366),d=(n(15007),n(64983)),l=n(91515),i=["components"],r={},o={_frontmatter:r},p=l.Z;function s(e){var t=e.components,n=(0,m.Z)(e,i);return(0,d.mdx)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"section-structure"},"Section structure"),(0,d.mdx)("p",null,"A ",(0,d.mdx)("inlineCode",{parentName:"p"},"<section>")," is a reusable part of a ",(0,d.mdx)("a",{parentName:"p",href:"../page.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"<page>"))," and is the standard file for defining UI elements on a page used in a test."),(0,d.mdx)("p",null,"A ",(0,d.mdx)("inlineCode",{parentName:"p"},"<section>")," can define:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"An explicit element that has a selector equal to the constant string. Example: ",(0,d.mdx)("inlineCode",{parentName:"li"},'selector="#add_root_category_button"')),(0,d.mdx)("li",{parentName:"ul"},"A parameterized element that contains substitutable values in the selector. Example: ",(0,d.mdx)("inlineCode",{parentName:"li"},'selector="#element .{{var1}} .{{var2}}"'),".")),(0,d.mdx)("h2",{id:"substitutable-values"},"Substitutable values"),(0,d.mdx)("p",null,"Substitutable values in the test can be of the following formats:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"String literals (",(0,d.mdx)("inlineCode",{parentName:"li"},"stringLiteral"),")"),(0,d.mdx)("li",{parentName:"ul"},"References to a ",(0,d.mdx)("a",{parentName:"li",href:"../data.md"},"data entity")," (XML data from the corresponding ",(0,d.mdx)("inlineCode",{parentName:"li"},".../Data/*.xml"),") such as ",(0,d.mdx)("inlineCode",{parentName:"li"},"entityName.Field"),"."),(0,d.mdx)("li",{parentName:"ul"},"Persisted data:",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"$persistedCreateDataKey.field$")," for data created in the scope of a ",(0,d.mdx)("a",{parentName:"li",href:"../test/index.md#test"},"test")," using the ",(0,d.mdx)("a",{parentName:"li",href:"../test/actions.md#createdata"},(0,d.mdx)("inlineCode",{parentName:"a"},"<createData>"))," action with ",(0,d.mdx)("inlineCode",{parentName:"li"},'stepKey="persistedCreateDataKey"'),"."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"$$persistedCreateDataKey.field$$")," for data created in ",(0,d.mdx)("a",{parentName:"li",href:"../test/index.md#before"},"before")," and ",(0,d.mdx)("a",{parentName:"li",href:"../test/index.md#after"},"after")," hooks. Even though ",(0,d.mdx)("inlineCode",{parentName:"li"},"<before>"),"and ",(0,d.mdx)("inlineCode",{parentName:"li"},"<after>")," are nested inside a ",(0,d.mdx)("a",{parentName:"li",href:"../test/index.md#test"},"test"),", persisted data is stored differently when it is done in a test hook. Therefore it must be accessed with a different notation.")))),(0,d.mdx)("p",null,"The following diagram shows the XML structure of a Functional Testing Framework section:"),(0,d.mdx)("p",null,(0,d.mdx)("img",{parentName:"p",src:"/commerce-testing/assets/22b61ffbcbbb0030a6ae86c42c1ad77a/section-dia.svg",alt:"XML Structure of Functional Testing Framework section"})),(0,d.mdx)("h2",{id:"format"},"Format"),(0,d.mdx)("p",null,"The format of a ",(0,d.mdx)("inlineCode",{parentName:"p"},"<section>")," is:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<sections xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n      xsi:noNamespaceSchemaLocation="urn:magento:mftf:Page/etc/SectionObject.xsd">\n   <section name="">\n      <element name="" type="" selector="" />\n      <element name="" type="" selector="" parameterized="true"/>\n      <element name="" type="" selector="" timeout=""/>\n   </section>\n</sections>\n')),(0,d.mdx)("h2",{id:"principles"},"Principles"),(0,d.mdx)("p",null,"The following conventions apply to Functional Testing Framework sections:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"<section>")," name must be alphanumeric."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"*Section.xml")," is stored in the ",(0,d.mdx)("em",{parentName:"li"},"Section")," directory of a module."),(0,d.mdx)("li",{parentName:"ul"},"The name format is ",(0,d.mdx)("inlineCode",{parentName:"li"},"{Admin|Storefront}{SectionDescription}Section.xml"),"."),(0,d.mdx)("li",{parentName:"ul"},"Camel case is used for ",(0,d.mdx)("inlineCode",{parentName:"li"},"<section>")," elements."),(0,d.mdx)("li",{parentName:"ul"},"One ",(0,d.mdx)("inlineCode",{parentName:"li"},"<section>")," tag is allowed per section XML file.")),(0,d.mdx)("h2",{id:"example"},"Example"),(0,d.mdx)("p",null,"Example (",(0,d.mdx)("inlineCode",{parentName:"p"},".../Catalog/Section/AdminCategorySidebarActionSection.xml")," file):"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n\n<sections xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:mftf:Page/etc/SectionObject.xsd">\n    <section name="AdminCategorySidebarActionSection">\n        <element name="AddRootCategoryButton" type="button" selector="#add_root_category_button" timeout="30"/>\n        <element name="AddSubcategoryButton" type="button" selector="#add_subcategory_button" timeout="30"/>\n    </section>\n</sections>\n')),(0,d.mdx)("p",null,"This example uses a ",(0,d.mdx)("inlineCode",{parentName:"p"},"AdminCategorySidebarActionSection")," section. All sections with same name will be merged during test generation."),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"AdminCategorySidebarActionSection")," section declares two buttons:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"AddRootCategoryButton")," - button with a ",(0,d.mdx)("inlineCode",{parentName:"li"},"#add_root_category_button")," locator on the parent web page"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"AddSubcategoryButton")," - button with a ",(0,d.mdx)("inlineCode",{parentName:"li"},"#add_subcategory_button")," locator on the parent web page")),(0,d.mdx)("p",null,"The following is an example of a call in test:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Click on the button with locator "#add_subcategory_button" on the web page--\x3e\n<click selector="{{AdminCategorySidebarActionSection.AddSubcategoryButton}}" stepKey="clickOnAddSubCategory"/>\n')),(0,d.mdx)("h2",{id:"elements-reference"},"Elements reference"),(0,d.mdx)("h3",{id:"section"},"section"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"<section>")," contains the sequence of UI elements in a section of a ",(0,d.mdx)("a",{parentName:"p",href:"../page.md"},"page"),"."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Use"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"Unique section name identifier.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"deprecated")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Used to warn about the future deprecation of the section. String will appear in Allure reports and console output at runtime.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"remove")),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"The default is ",(0,d.mdx)("inlineCode",{parentName:"td"},"false"),". Set to ",(0,d.mdx)("inlineCode",{parentName:"td"},"true")," to remove this element during parsing.")))),(0,d.mdx)("h3",{id:"element"},"element"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"<element>"),"is a UI element used in an ",(0,d.mdx)("a",{parentName:"p",href:"../test/actions.md"},"action"),"."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attributes"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Use"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"The element name; Must be alphanumeric.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"type")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"The type of the element. Possible values: ",(0,d.mdx)("inlineCode",{parentName:"td"},"text"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"textarea"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"input"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"button"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"checkbox"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"radio"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"checkboxset"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"radioset"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"date"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"file"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"select"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"multiselect"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"wysiwyg"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"iframe"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"block"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"selector")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"https://www.w3schools.com/xml/xpath_nodes.asp"},"XPath")," or ",(0,d.mdx)("a",{parentName:"td",href:"https://www.w3schools.com/cssref/css_selectors.asp"},"CSS")," selector of the element.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"locatorFunction")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"locator-functions.md"},"Locator function")," declaration to be used in lieu of a selector.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"timeout")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"The timeout after interaction with the element (in seconds). The default is ",(0,d.mdx)("em",{parentName:"td"},"none"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"parameterized")),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Include and set to ",(0,d.mdx)("inlineCode",{parentName:"td"},"true")," if the ",(0,d.mdx)("inlineCode",{parentName:"td"},"selector")," for this element has parameters that need to be replaced for proper use. Learn more in ",(0,d.mdx)("a",{parentName:"td",href:"parameterized-selectors.md"},"Parameterized selectors"),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"deprecated")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"Used to warn about the future deprecation of the element. String will appear in Allure reports and console output at runtime.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"remove")),(0,d.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"The default is ",(0,d.mdx)("inlineCode",{parentName:"td"},"false"),". Set to ",(0,d.mdx)("inlineCode",{parentName:"td"},"true")," to remove this element during parsing.")))),(0,d.mdx)("h4",{id:"timeout-attribute"},(0,d.mdx)("inlineCode",{parentName:"h4"},"timeout")," attribute"),(0,d.mdx)("p",null,"The attribute adds the ",(0,d.mdx)("a",{parentName:"p",href:"../test/actions.md#waitforpageload"},"waitForPageLoad")," action after a reference to the element in test.\nThe most usual use case is a test step with a button click action."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Use case"),": Set a timeout of 30 seconds after clicking the ",(0,d.mdx)("inlineCode",{parentName:"p"},"signIn")," button."),(0,d.mdx)("p",null,"The section element code declaration containing the timeout attribute:"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"StorefrontCustomerSignInPopupFormSection.xml")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'...\n<element name="signIn" type="button" selector="#send2" timeout="30"/>\n...\n')),(0,d.mdx)("p",null,"The test step that covers the use case:"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"CaptchaWithDisabledGuestCheckoutTest.xml")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'...\n<click selector="{{StorefrontCustomerSignInPopupFormSection.signIn}}" stepKey="clickSignIn"/>\n...\n')),(0,d.mdx)("p",null,"Whenever the ",(0,d.mdx)("inlineCode",{parentName:"p"},"signIn")," button is used in a test, the Functional Testing Framework will add a 30 second ",(0,d.mdx)("inlineCode",{parentName:"p"},"waitForPageLoad")," action immediately after the ",(0,d.mdx)("inlineCode",{parentName:"p"},"click"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-section-index-md-38666806b740442db677.js.map