---
title: Semicolons in JavaScript
date: "2020-06-11"
---

Use semicolons always in JavaScript code, and the consistency is more important than saving a few bytes. In some ambiguous cases, the code will throw the error at runtime. Why?

<!-- more -->

<h5 class="yellow">
  ✪ Semicolons aren’t exactly mandatory, but they aren’t exactly optional, either
</h5>

JavaScript’s Automatic Semicolon Insertion (ASI). Basically, JavaScript will put semicolons in for you automatically if you leave them out. So, they aren’t mandatory after all, but they aren’t exactly optional, either. Some develpers adopt the no-semicolon coding style like Vue.js and relying on Automatic Semicolon Insertion(ASI). Unfortunately, it breaks things in many ambiguous cases.


<h5 class="yellow">
    ✪ Failed to compile. Missing semicolon semi.
</h5>

There are many known issues opened/closed in open source projects because of missing semicolons. For example:

Failed to compile. Missing semicolon semi on facebook
<https://github.com/facebook/create-react-app/issues/4698>


<h5 class="yellow">
  ✪ An ambiguous case that breaks in the absence of a semicolon
</h5>

```js
 // define a function
var fn = function () {
    //...
} // semicolon missing at this line

// then execute some code inside a closure
(function () {
    //...
})(); 
```

this will intepreted as: 
```js
var fn = function () {
    //...
}(function () {
    //...
})(); 
```
This will end up passing the second function as an argument to the first function and then trying to call the result of the first function call as a function. The second function will fail with a "... is not a function" error at runtime.

**the following code without semicolon seems absolute ok**
```js
// ❌ the code seems fine, but will not work
const puppeteer = require('puppeteer')
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://example.com')
  await page.screenshot({path: 'example.png'})
await browser.close()
})() 
```
Because Node.js doesn’t know that it should stop after `const puppeteer = require('puppeteer')`, because it doesn’t have a semicolon to go by. Instead, it sees an opening brace coming up below and interprets that to be a function call. It sees the code as something like this:
```js
// ❌ the actual code will be executed in runtime
const puppeteer = require('puppeteer')(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://example.com')
  await page.screenshot({path: 'example.png'})
await browser.close()
})() 
```
Addinng the <strong>semicolons</strong> to the same code above will let the program run well as expected. ✅

<h5 class="yellow">
    ✪ Some shortcuts without semicolon break
</h5>

```js
while(1); // infinite loop, where the semicolon is parsed as an empty statement
```
If the semicolon was omitted, this shortcut would not be complete and breaks.

<h5 class="yellow">
  Conclusion
</h5>

Just like new lines between statements, and tabs/spaces used for indentation, semicolons, in my opinion, make the code more organized and readable. Semicolons, similar to a dangling comma at the end of an argument list or last object prop, is a sign of respect for the next developer to work on the code, including yourself. One liners, people copy from StackOverflow, are not readable code — trying to decipher 5 functions concatenated into a single line is just not what human brain wants to be doing. Write code with brackets, commas and semicolons and let the minifier do its job.

`ASI` is a correction mechanism. It tries to keep your code running when no other syntax error would hinder that. But it will fullfill the requirement of all of use cases.

---

<strong>References:</strong>
- [dev.to 🔗 semicolon in javascript to use or not to ues](https://dev.to/adriennemiller/semicolons-in-javascript-to-use-or-not-to-use-2nli)
- [stackoverflow.com 🔗 using semicolon after every statement in javascript](https://stackoverflow.com/questions/444080/do-you-recommend-using-semicolons-after-every-statement-in-javascript)
- [medium.com 🔗 you might need those semicolons in your js](https://medium.com/better-programming/you-might-need-those-semicolons-in-your-javascript-after-all-b28154f93ea8)
- [medium.com 🔗 the use of javascript semicolon](https://medium.com/better-programming/the-use-of-the-javascript-semicolon-843fd5e94d0e)
