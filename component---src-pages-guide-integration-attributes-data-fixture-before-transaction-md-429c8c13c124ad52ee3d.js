"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[4466],{399:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return m}});var r=a(87462),n=a(63366),i=(a(15007),a(64983)),o=a(91515),d=["components"],s={},l={_frontmatter:s},u=o.Z;function m(e){var t=e.components,a=(0,n.Z)(e,d);return(0,i.mdx)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"data-fixture-before-transaction-attribute"},"Data fixture before transaction attribute"),(0,i.mdx)("p",null,"The data fixture before transaction attribute is an extension of ",(0,i.mdx)("a",{parentName:"p",href:"data-fixture.md"},"Data Fixture attribute")," that applies fixtures before the transaction and reverts applied fixtures after the transaction. With disabled DB isolation, this attribute is identical to the ",(0,i.mdx)("a",{parentName:"p",href:"data-fixture.md"},"Data Fixture attribute")),(0,i.mdx)("h2",{id:"format"},"Format"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"#[\n    DataFixtureBeforeTransaction(string $type, array $data = [], ?string $as = null)\n]\n")),(0,i.mdx)("h3",{id:"parameters"},"Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"type"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The fully qualified name of a class that implements ",(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\TestFramework\\Fixture\\DataFixtureInterface")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\TestFramework\\Fixture\\RevertibleDataFixtureInterface"),"."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"data"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The optional array of data passed on to the fixture."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"as"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The fixture alias that will be used as a reference to retrieve the data returned by the fixture and also as a reference in other fixtures parameters.")))),(0,i.mdx)("h3",{id:"example"},"Example"),(0,i.mdx)("p",null,"In the following example, the fixtures supplied to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataFixtureBeforeTransaction")," attribute are applied before the transaction, whereas fixtures supplied to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataFixture")," attribute are applied within the transaction."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"class CategoryTest extends TestCase\n{\n    #[\n        DataFixtureBeforeTransaction(ScheduleMode::class, ['indexer' => 'catalog_category_product']),\n        DataFixtureBeforeTransaction(ScheduleMode::class, ['indexer' => 'catalog_product_category']),\n        DataFixture(Category::class, as: 'category'),\n        DataFixture(Product::class, ['category_ids' => ['$category.id$']], 'product1'),\n        DataFixture(Product::class, ['category_ids' => ['$category.id$']], 'product2'),\n    ]\n    public function testUpdateProductsPositionsWithIndexerOnSchedule(): void\n    {\n\n    }\n}\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-integration-attributes-data-fixture-before-transaction-md-429c8c13c124ad52ee3d.js.map