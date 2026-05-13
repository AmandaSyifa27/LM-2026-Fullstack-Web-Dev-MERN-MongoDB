# Refactor Inefficient JavaScript Code

## Overview

This repository contains the completion of the "Refactor Inefficient JavaScript Code" lab. The project demonstrates the ability to identify poorly written code, optimize time complexity, minimize unnecessary DOM reflows, and apply modern ES6 features for cleaner, more readable logic.

## Refactoring Process & Validations

1. **Identifying Inefficient Code & ES6 Array Methods**
   - **Problem:** Extracting even numbers used a verbose, old-style `for` loop with nested `if` statements.
   - **Solution:** Refactored the code using ES6 `Array.prototype.filter()` combined with an arrow function. This maintains the exact same functionality while drastically reducing complexity and improving code readability.

2. **Optimizing DOM Manipulation**
   - **Problem:** The original code updated the `innerHTML` of a DOM element inside a loop 100 times. This causes 100 separate "reflows" and repaints in the browser engine, severely degrading performance.
   - **Solution:** Modified the code to build a single HTML string block inside the loop (`itemsHTML += ...`). The `innerHTML` of the target DOM element is then updated exactly _once_ outside the loop. This minimizes reflows and dramatically improves UI performance.

3. **Improving Time Complexity (Nested Loops)**
   - **Problem:** Finding duplicates in an array was originally done using a nested loop approach. This resulted in an `O(n^2)` time complexity, which scales poorly and becomes extremely slow with large datasets.
   - **Solution:** Refactored the algorithm to utilize JavaScript `Set` objects (`seen` and `duplicates`). By leveraging the `O(1)` lookup time of a Set during a single `forEach` iteration, the time complexity was reduced to `O(n)`. This provides significantly better performance and cleaner logic.

## How to Run

1. Clone this repository.
2. Open `index.html` in your web browser to view the optimized DOM manipulation.
3. Open the Developer Tools (F12) and navigate to the **Console** tab to view the results of the optimized Array filtering and Duplicate finding functions.
