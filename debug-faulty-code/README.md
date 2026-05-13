# Debug Faulty Code

## Overview

This repository contains the solutions for the "Debug Faulty Code" lab. It demonstrates a systematic approach to identifying, debugging, and resolving three main types of JavaScript errors: Syntax Errors, Runtime Errors, and Logical Errors.

## Debugging Process and Fixes

1. **Syntax Error Resolution**
   - **Issue:** Missing closing quotation marks and incorrect capitalization when referencing variables.
   - **Fix:** Properly closed the string literal and ensured variable names match exactly (JavaScript is case-sensitive).

2. **Runtime Error Resolution**
   - **Issue:** The program crashed with a `TypeError: Cannot read properties of null` because it attempted to access a deeply nested property of a non-existent object.
   - **Fix:** Initialized the object with proper structure and utilized ES6 Optional Chaining (`?.`) to safely access the properties without crashing the application.

3. **Logical Error Resolution**
   - **Issue:** A function meant to calculate a total bill with tax was subtracting the tax instead of adding it. The code executed without throwing errors, but the output was fundamentally incorrect.
   - **Fix:** Changed the arithmetic operator from `-` to `+` inside the `calculateTotal` function to produce the expected mathematical outcome.

## How to Test

1. Clone this repository.
2. Open `index.html` in a web browser.
3. Open the Developer Tools (F12) and check the **Console** tab to verify that all code executes smoothly without any red error logs.
