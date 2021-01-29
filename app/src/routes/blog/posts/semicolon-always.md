---
title: Semicolons in JavaScript
date: "2020-06-11"
---

Use semicolons always in JavaScript code. In some ambiguous cases, the code will throw the error at runtime, if the code is getting minified.

<!-- more -->

An ambiguous case that breaks in the absence of a semicolon

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
> This will end up passing the second function as an argument to the first function and then trying to call the result of the first function call as a function. The second function will fail with a "... is not a function" error at runtime.
