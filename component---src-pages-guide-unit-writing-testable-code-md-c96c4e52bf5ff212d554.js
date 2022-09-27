"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[7745],{34422:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return h}});var a,o=n(87462),s=n(63366),i=(n(15007),n(64983)),l=n(91515),r=["components"],m={},d=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:m},c=l.Z;function h(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.mdx)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"writing-testable-code"},"Writing testable code"),(0,i.mdx)("p",null,"This topic does not aim to be a replacement for existing documentation about testing, but rather tries to highlight some thoughts on the subject. Although the truth of anything depends somewhat on the context, this topic attempts to provide information that is applicable in ",(0,i.mdx)("em",{parentName:"p"},"most")," situations."),(0,i.mdx)("h2",{id:"tests-should-be-simple"},"Tests should be simple"),(0,i.mdx)("p",null,"Tests should be trivial to write. Simple, small classes with few collaborators are easy to test. If testing a class is difficult, the class probably has grown too large and does too much. Split the class into several classes, each of which does only one thing."),(0,i.mdx)("h2",{id:"manage-dependencies"},"Manage dependencies"),(0,i.mdx)("p",null,"A big part of making code testable is managing its dependencies. Dependencies can take many forms and they can be clearly stated or hidden."),(0,i.mdx)("p",null,"The fewer dependencies a class has and the more obvious they are, the easier it is to maintain and test the class. At the same time, the class is less likely to break because of future changes."),(0,i.mdx)("h3",{id:"creating-new-instances"},"Creating new instances"),(0,i.mdx)("p",null,"We strongly recommend you do ",(0,i.mdx)("em",{parentName:"p"},"not"),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Use ",(0,i.mdx)("inlineCode",{parentName:"li"},"new")," to instantiate new objects, because that removes the flexibility the dependency configuration offers."),(0,i.mdx)("li",{parentName:"ul"},"Use the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ObjectManager")," directly in production code.")),(0,i.mdx)("p",null,"There always is a better alternative, usually a ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/code-generation/"},"generated")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"Factory")," class, or a ",(0,i.mdx)("a",{parentName:"p",href:"https://thephp.cc/news/2015/09/dependencies-in-disguise"},(0,i.mdx)("inlineCode",{parentName:"a"},"Locator"))," class of sorts."),(0,i.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"This rule applies only to production code. When writing ",(0,i.mdx)("a",{parentName:"p",href:"../integration/index.md"},"integration tests"),", this is not true. In fact, the object manager is recommended for integration tests."),(0,i.mdx)("h3",{id:"collaborator-classes"},"Collaborator classes"),(0,i.mdx)("p",null,"Whenever an external class property, class constant, or a class method is used in a file, this file depends on the class containing the method or constant. Even if the external class is not used as a instantiated object, the current class is still hard-wired to depend on it."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," cannot execute the code unless it can load the external class, too. That is why such external classes are referred to as ",(0,i.mdx)("em",{parentName:"p"},"dependencies"),". Try to keep the number dependencies of to a minimum."),(0,i.mdx)("p",null,"Collaborator instances should be passed into the class using ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"constructor injection"),"."),(0,i.mdx)("h3",{id:"the-environment-file-system-time-global-variables"},"The environment (file system, time, global variables)"),(0,i.mdx)("p",null,"Whenever your code requires access to some part of the environment, try to use a collaborator class that can easily be replaced by a test double (also referred to as a ",(0,i.mdx)("em",{parentName:"p"},"mock"),") instead."),(0,i.mdx)("p",null,"For example, if you need..."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"file system access?"),(0,i.mdx)("p",{parentName:"li"},"Use ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Filesystem/Io/IoInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Framework\\Filesystem\\Io\\IoInterface"))," instead of ",(0,i.mdx)("inlineCode",{parentName:"p"},"fopen()"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"dir()")," or other native methods.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"the current time?"),(0,i.mdx)("p",{parentName:"li"},"Inject a ",(0,i.mdx)("a",{parentName:"p",href:"https://www.php.net/manual/en/refs.calendar.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"\\DateTimeInterface"))," instance (for example ",(0,i.mdx)("inlineCode",{parentName:"p"},"\\DateTimeImmutable"),") and use that.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"the remote IP?"),(0,i.mdx)("p",{parentName:"li"},"Use ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/HTTP/PhpEnvironment/RemoteAddress.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Framework\\HTTP\\PhpEnvironment\\RemoteAddress")),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"access to ",(0,i.mdx)("inlineCode",{parentName:"p"},"$_SERVER"),"?"),(0,i.mdx)("p",{parentName:"li"},"Consider using ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/HTTP/PhpEnvironment/Request.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Framework\\HTTP\\PhpEnvironment\\Request::getServerValue()")),"."))),(0,i.mdx)("p",null,"Anything that can be easily replaced by a test double is preferable to using low level functions."),(0,i.mdx)("h2",{id:"interfaces-over-classes"},"Interfaces over classes"),(0,i.mdx)("p",null,"Dependencies on ",(0,i.mdx)("em",{parentName:"p"},"interfaces")," should be preferred over dependencies on ",(0,i.mdx)("em",{parentName:"p"},"classes")," because the former decouples your code from implementation details. This helps to isolate your code from future changes."),(0,i.mdx)("p",null,"This guideline is true only if you exclusively use the methods and constants defined in the interface. If your code also uses other public methods specific to the class implementing the interface, your code is no longer independent of the implementation details."),(0,i.mdx)("p",null,"You lose any benefits of having an interface if you use methods of a concrete class."),(0,i.mdx)("p",null,"Even worse, the code is lying, because apparently there is a dependency on the interface only; however, you could not use a different implementation of the same interface. This can lead to considerable maintenance costs down the road. In such cases, using the class name of the concrete implementation is preferable to using the interface name as a dependency."),(0,i.mdx)("p",null,"To illustrate, assume there is a theoretical ",(0,i.mdx)("inlineCode",{parentName:"p"},"RequestInterface")," with two methods, ",(0,i.mdx)("inlineCode",{parentName:"p"},"getPathInfo()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"getParam($name)"),"."),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"interface RequestInterface\n{\n    public function getPathInfo();\n    public function getParam($name);\n}\n")),(0,i.mdx)("p",null,"Assume there is a concrete implementation ",(0,i.mdx)("inlineCode",{parentName:"p"},"HttpRequest")," that also has a public method ",(0,i.mdx)("inlineCode",{parentName:"p"},"getParams()")," in addition to the two interface methods."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"class HttpRequest implements RequestInterface\n{\n    public function getPathInfo() {...}\n    public function getParam($name) {...}\n    public function getParams() {...}\n}\n")),(0,i.mdx)("p",null,"Any code that depends on ",(0,i.mdx)("inlineCode",{parentName:"p"},"RequestInterface")," should avoid using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"getParams()")," method, because it is not part of the interface."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"class MyClass\n{\n    /**\n     * @var RequestInterface\n     */\n    private $request;\n\n    public function __construct(RequestInterface $request)\n    {\n        $this->request = $request;\n    }\n\n    public function doSomething()\n    {\n        foreach ($this->request->getParams() as $paramName => $value) {\n            // ... some more code\n        }\n    }\n}\n")),(0,i.mdx)("p",null,"This completely defeats the purpose of the interface. A better solution might be the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"public function doSomething()\n{\n    foreach (['foo', 'bar'] as $paramName) {\n        $value = $this->request->getParam($paramName);\n        // ... some more code\n    }\n}\n")),(0,i.mdx)("p",null,"The second example method ",(0,i.mdx)("inlineCode",{parentName:"p"},"doSomething()")," does not call the ",(0,i.mdx)("inlineCode",{parentName:"p"},"getParams()")," method."),(0,i.mdx)("p",null,"If ",(0,i.mdx)("inlineCode",{parentName:"p"},"getParams()")," had been called, the class ",(0,i.mdx)("inlineCode",{parentName:"p"},"MyClass")," would have instantly depended on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"HttpRequest")," implementation and the benefit of having an interface would have been completely lost."),(0,i.mdx)("p",null,"If cannot avoid using ",(0,i.mdx)("inlineCode",{parentName:"p"},"getParams()"),", you can do any of the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Add the ",(0,i.mdx)("inlineCode",{parentName:"li"},"getParams()")," method to ",(0,i.mdx)("inlineCode",{parentName:"li"},"RequestInterface")),(0,i.mdx)("li",{parentName:"ul"},"Make ",(0,i.mdx)("inlineCode",{parentName:"li"},"MyClass")," dependent on ",(0,i.mdx)("inlineCode",{parentName:"li"},"HttpRequest")," directly instead of using ",(0,i.mdx)("inlineCode",{parentName:"li"},"RequestInterface")," as a constructor argument")),(0,i.mdx)("p",null,"The benefit ",(0,i.mdx)("em",{parentName:"p"},"interfaces")," offer is that interfaces keep code decoupled from implementation details. This means that future changes will not cause your code to fail unless the interface is changed too."),(0,i.mdx)("p",null,"Also, interfaces can very easily be replaced by test doubles (also referred to as ",(0,i.mdx)("em",{parentName:"p"},"mocks"),"). Mocking concrete classes can be much more complex."),(0,i.mdx)("h2",{id:"class-and-method-size"},"Class and method size"),(0,i.mdx)("p",null,"Try to keep the number of methods in a class and the number of lines of code per method as few as possible."),(0,i.mdx)("p",null,"Shorter methods do less, which in turn means they are easier to test. The same is true for small classes."),(0,i.mdx)("p",null,"As a rule of thumb, try to keep methods to five or fewer lines of code."),(0,i.mdx)("h3",{id:"each-function-has-one-single-purpose"},"Each function has one single purpose"),(0,i.mdx)("p",null,"Functions should do only one thing and they should do it very well."),(0,i.mdx)("p",null,"Once you respect the ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single_responsibility_principle"},"single responsibility principle"),", you will know exactly what you are testing and your functions will be smaller and clearer.\nHave a look at the following examples:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"// Wrong\n\npublic function execute($customer)\n{\n    $this->notifyCustomer($customer);\n}\n\n/**\n * Save customer and notify by email\n */\npublic function notifyCustomer($customer)\n{\n    $this->customerRepository->save($customer);\n    $this->email->sendEmail($customer->getEmail());\n}\n")),(0,i.mdx)("p",null,"In the above example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"notifyCustomer")," method does more than the method's name suggests. Such methods will be harder to maintain and can have some side effects you would not assume by its name."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"// Correct\n\npublic function execute($customer)\n{\n    $this->saveCustomer($customer);\n    $this->notifyCustomer($customer->getEmail());\n}\n\n/**\n * Save Customer\n */\npublic function saveCustomer($customer)\n{\n    $this->customerRepository->save($customer);\n}\n\n/**\n * Notify customer by email\n */\npublic function notifyCustomer($email)\n{\n    $this->email->sendEmail($email);\n}\n")),(0,i.mdx)("p",null,"In the correct example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"notifyCustomer")," method is slightly refactored, and the only thing it does is to notify the customer by email. The rest of the logic was moved into a separate method, which has a clear name."),(0,i.mdx)("h3",{id:"testing-private-and-protected-methods"},"Testing private and protected methods"),(0,i.mdx)("p",null,"When you see the need to write tests for ",(0,i.mdx)("inlineCode",{parentName:"p"},"private")," scope methods, it usually is a sign that the class under test is doing too much."),(0,i.mdx)("p",null,"Consider extracting the private functionality into a separate class and using that class as a collaborator. The extracted class then provides the functionality using a public method and can easily be tested."),(0,i.mdx)("h2",{id:"helpful-principles"},"Helpful principles"),(0,i.mdx)("p",null,"Many good practices for software development in general and object oriented programming in particular have been formulated as principles over the last decades. Applying these rules of thumb helps to keep code in good shape and also leads to more easily testable code."),(0,i.mdx)("p",null,"The following list principles are by no means complete, but they can serve as a starting point when you start to write testable code."),(0,i.mdx)("h3",{id:"tell-do-not-ask"},"Tell, do not ask"),(0,i.mdx)("p",null,"Try to use a few getters as possible. Instead, use methods that tell the objects directly what to do. Asking for object values is a sign of misplaced responsibilities. ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kent_Beck"},"Kent Beck"),' called that "feature envy".'),(0,i.mdx)("p",null,"Consider moving the code in that needs the value into a class that has the data available as the following example shows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"function extractMatchingDocuments(Document $searchDoc, array $documents)\n{\n    return array_filter($documents, function (Document $doc) use ($searchDoc){\n        return $doc->getFieldValue() === $searchDoc->getFieldValue();\n    });\n}\n")),(0,i.mdx)("p",null,"The following example moves the comparison into a ",(0,i.mdx)("inlineCode",{parentName:"p"},"matches()")," method on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Document")," class instead."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"function extractMatchingDocuments(Document $searchDoc, array $documents)\n{\n    return array_filter($documents, function (Document $doc) use ($searchDoc){\n        return $searchDoc->matches($doc);\n    });\n}\n")),(0,i.mdx)("h3",{id:"the-law-of-demeter"},"The Law of Demeter"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Law_of_Demeter"},"Law of Demeter"),' principle is sometimes stated as "Talk to friends only" or "Do not talk to strangers." It states that code can call methods only on objects that it received in one of the following ways:'),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Objects received as constructor arguments"),(0,i.mdx)("li",{parentName:"ul"},"Objects received as arguments to the current method"),(0,i.mdx)("li",{parentName:"ul"},"Objects instantiated in the current method")),(0,i.mdx)("p",null,"The principle explicitly states that no method can be called on objects that are the return value of another method call. Calling method calls on returned objects introduces a hidden dependency on the returned object type."),(0,i.mdx)("p",null,"The following example violates the Law of Demeter by calling the method ",(0,i.mdx)("inlineCode",{parentName:"p"},"getByName()")," on the return value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"getHeaders()"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"function isJsonResponse(Response $response)\n{\n    $headers = $response->getHeaders();\n    return $headers->getByName('Content-Type') === 'application/json';\n}\n")),(0,i.mdx)("p",null,"The solution is to add the method ",(0,i.mdx)("inlineCode",{parentName:"p"},"isJsonResponse()")," to the response object instead."),(0,i.mdx)("p",null,"Method chaining (for example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"$foo->getSomething()->setThat($x)->doBar()"),') is often a sign of this problem. When testing this type of code, you must often create test doubles that must be set up to return other test doubles and so on ("Mocks returning mocks...").'),(0,i.mdx)("h3",{id:"i-do-not-care"},'"I do not care"'),(0,i.mdx)("p",null,'An interesting approach to writing more testable code is to try to delegate as much as possible to other classes. Every time any currently not available resource is needed, just think "I do not care where that comes from" and add a collaborator class that provides it.'),(0,i.mdx)("p",null,"At first this might seem like it causes the number of classes to explode, but in fact each one of the classes is very short and simple and usually has very limited responsibilities."),(0,i.mdx)("p",null,"Almost as a side effect, those classes are very easy to test."),(0,i.mdx)("h2",{id:"for-more-information"},"For more information"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://martinfowler.com/bliki/BeckDesignRules.html"},"Rules of simple software design")," by Kent Beck"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://books.google.com/books/about/Clean_Code.html?id=dwSfGQAACAAJ"},"Clean Code")," by Robert C. Martin"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://martinfowler.com/books/refactoring.html"},"Refactoring")," by Martin Fowler"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.growing-object-oriented-software.com"},"Growing Object Oriented Software Guided by Tests")," by Steve Freeman and Nat Pryce")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-unit-writing-testable-code-md-c96c4e52bf5ff212d554.js.map