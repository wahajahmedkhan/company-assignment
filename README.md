# COMPANY ASSIGNMENT

At first, I would like to thank company for this opportunity. I hope to meet company’s expectations. I have completed
the assignment both ways, using Async/Await syntax and using RxJs. Although it wasn’t required, I still have written
some unit test and have deployed it to firebase. I have attached the app link down below

## INSTRUCTION

After cloning the project run npm install, to install the dependencies.

- npm start:  serve the project locally at Port:4200
- npm build: build the app
- npm test: run project’s test cases
- npm coverage: generate test coverage report
- npm check: run health check on scss and code with prettier and eslint
- npm fix: fix code health of scss and code with prettier and eslint

## DEMO

[Demo](<https://zivver-assignment.web.app/>)

## BRANCHES

1. using-rxjs
  - Observables
  - Async Pipe
  - Catcherror
  - Throwerror
  - Finalize

2. using-async-await
  - Async functions
  - Await promises
  - Lastvaluefrom

## COVERAGE

![](Aspose.Words.798377f7-f243-498f-9eb5-9c36300c3530.001.png)

## GENERAL QUESTIONS

##### 1. We use JWTs a lot throughout our API. For instance, when a user logs in on our API, a JWT is issued and our web-application uses this token for every request for authentication.

JWTs can be either signed, encrypted or both. If a token is not encrypted after signing its contents are free for public
view, but when you don't know the private key, you can't change it.Where the receiver will notice that the signature
won't match anymore.

1. Pros
1. **No Database Table:** Lower Db Queries, no need to store it in the Database.
2. **Simpler to use if careful:** Development using JWT for security is comparatively faster.
3. **Used across services:** one authorization server that deals with the Login/Registration and generates the token,
   all the subsequent requests will need not have to go to the authorization server as only the auth-server has access
   to the private key, the rest of the servers are given the public key to verify the signature
2. Cons
1. **Compromised Secret Key:** if the key is leaked by a developer/administrator, the whole system is at risk.
2. **Cannot manage clients from the server:** ​​If a user’s mobile is stolen, and he wants to logout of all existing
   sessions(e.g. Gmail’s logout other sessions feature). Well it's not possible in the case of JWT.
3. **Cannot push Messages to clients:** As we have no record about the logged-in clients on the DB end, we cannot push
   messages to all the clients.
4. **Data Overhead:** The JWT token is larger in size in comparison to a normal session token. The JWT token gets longer
   linearly as more data is added
5. **Complicated to understand:** Cryptographic signature algorithms are used by JWT in order to confirm the data and
   receive the user-id from the token.Understanding the Signing Algo in itself requires basics of cryptography.

##### 2. In our web-application, messages sent from one user to another, can contain HTML, which poses some security risks. Describe two attack vectors bad actors might try to abuse? And how would you mitigate these vectors?

The two types of Attack Vectors and their mitigation are as follows:Whenever security risks are associated with HTML,
the first framework that should be referred to is The Open Web Application Security Project (OWASP) which is a nonprofit
foundation dedicated to improving software security. There are multiple attacks listed in it but for the sake of
answering this question, we will be looking at **SQL injection** and **Cross-site Scripting (XSS)** techniques. The SQL
injection can be prevented through input sanitization techniques from which three are discussed as follows:

**Basic String Manipulation**

The basic string manipulation technique is vastly used in application for a number of purposes, for example, taking a
string as input and saving it all capital letter, lower letter or just the ASCII value. The use of Basic String
Manipulation to avoid SQL injection consists of using the REPLACE function to replace any special characters that might
be in the input string. An example sudo code will look like this:

SELECT @String\_Parameter = REPLACE(REPLACE(REPLACE(@String\_Parameter, '@', ''), '#', ''), '%', '');

The problem with this method is that one needs to define the special character in the code which of course leaves blind
spots which might be exploited by an attacker. There are too many special characters to begin with and this could make
this task very complicated. Therefore, this is only advised when the input strings are short and don’t have a lot of
different special characters.

**Regex and TSQL**

Another way of sanitising input would be to sanitise the input completely and this could be achieved through defining a
regular expression. The regex could be defined as having all upper case letter, lower characters and numbers as shown
below in a simplified example:

DECLARE @Alphanumeric\_Characters VARCHAR(289) = '%[^A-Z^a-z^0-9]%';

However, what happens if we want to allow some special characters but not other. Like for example, in email addresses we
would like to also allow ‘-’,’\_’ and ‘@’. This can also be achieved through Regex however this brings us to the same
problem with Basic String Manipulation, we need to be 100% sure what needs to be permitted and then define that in the
Code. This method although better than the latter is still not efficient for big applications that might need
complicated special characters for different types of input strings.

**The Dim\_ASCII Solution**

The problem of defining the rules for different types of coloumns can be fixed using dimensions tables which have rules
for each column needs. Let’s take an example of data that might need to be stored:

- Student ID: Any number 0-9.
- Email Addresses: Any Alphanumeric and numeric number, as well as @, dashes and underscores.
- File Extensions: Any Alphanumeric and period.
- File Name: Any Alphanumeric character, and dashes and underscores.

Now defining the rules for each heading in Replace functions or Regex could become complicated as the application grows
and new columns are added. Therefore, we will make a table Dim\_ASCII which will keep track of all the rules that apply
to each column once its created. This table can also be updated whenever new business needs arises, therefore making it
simple and efficient to sanitise input strings in big applications.

The XSS can be remediated by a combination of different techniques such as:

**Filter Input on arrival:** At the point where the user inputs, there should be strict filters to make sure only a
valid input can be passed by the user.

**Encode data on output:** Where the user controlled data is output, make sure to encode it so that it is not seen by
the system as active content. To achieve this might require a combination of html, URL, JavaScript and CSS encoding
depending on the context.

**Use appropriate response headers:** When the http responses should not be expected to contain any JavaScript or html,
we can ensure this by using Content-Type and X-Content- type-options to make sure the browser only interprets the
responses as it wants.

Angular built-in libraries such as Validators and Dom sanitizer service, make this a piece of cake and force developers
to avoid these security risks in the beginning.

##### 3. Explain the difference between mutable and immutable objects.

An immutable object can not be changed after it is created while a mutable object can. String’s mutability/ immutability
changes depending on the language

##### a. What is an example of an immutable object in JavaScript?

Examples of an immutable object in JavaScript are primitive values (strings and numbers). Any time you do change a
string you are basically just creating a separate copy.

##### b. What are the pros and cons of immutability?

**The pros of immutability are as follows:**

- Immutable objects are good for sharing information between threads in a multi-threaded environment since they don't
  need to be synchronised. This is because they remain in one state
- You don't need to make defensive copies of immutable objects when passing to other functions, since there is no
  possibility an immutable object will be modified behind your back.
- Makes it easier to reason about the code (class invariant is established once and then unchanged). It also is easier
  to parallelize program as there are no conflicts among objects.
- Immutable classes are easier to design, implement, and use, they are also good map keys and set elements, since these
  typically do not change once created.

**The cons of immutability are as follows:**

- They require a separate object for each value. This is because you must suffer the overhead of a new object creation.
- Data structures such as graphs are difficult to build.
- Finding many small objects rather than modifying ones you already have can have a negative performance impact.
- Poor implementations of immutable data structures can result in extremely poor performance.

##### c. How can you achieve immutability in your own code?

Immutable.js is a JavaScript library that provides many Persistent Immutable data structures including: List, Stack,
Map, OrderedMap, Set, OrderedSet and Record. Persistent data presents a mutative API which does not update the data
in-place, but instead always yields new updated data thus achieving immutability.

##### 4. If you would have to speed up the loading of our current web-application, how would you do that? (no need to actually do it, just describe the steps you would take)

There are many tools to detect the performance of the application. I believe implementing Sonarqube, Eslint and Prettier
can help the developer to write clean code with minimal code smells. However, if we have to optimise the load time of a
web application. I would scan the code with SonarQube to get the code quality of the code, code smells in the code, bugs
in the code and duplicated code. I would also use Google page insights to look at the oversize images, blocking scripts,
uncompressed assets, not minified code. After this I would make sure the application is modularised and every module is
lazy loaded as per user request.

I would also enable compression by using Gzip which is a software that reduces file sizes. I would then optimise the
code by removing unnecessary characters like commas or spaces. Lastly, I would avoid and minimise the use of blocking
JavaScript code and minify the as much as code I can.

##### 5. What part of a new job do you think is more important:

##### a. Choose your own hardware, but work with a company supplied operating system image.

##### b. You're offered a standard piece of mediocre hardware. Free to pick your own Software.

I think it is more important to choose your own hardware but work with a company supplied operating system image because
of two main reasons. One the company wouldn’t have to spend on mediocre hardware which will be useless after sometime.
Second, having a operating system image will have zero downtime if I switched or update my hardware. It will give me the
flexibility to work from any device using that image if I have more than one hardware.

