# React State Flow Demo

## Overview

This laboratory exercise demonstrates the concept of **Unidirectional Data Flow** in React. It showcases how a parent component holds the "source of truth" (state) and distributes it to child components via props, and how child components communicate back to the parent using callback functions.

## Implementation Details

- **Parent.jsx**: Initializes the `sharedState` using `useState`. It passes the state down to `Display.jsx` and a callback function (`handleStateUpdate`) down to `Child.jsx`.
- **Display.jsx**: A pure presentation component. It only receives the `text` prop and renders it dynamically.
- **Child.jsx**: Contains a form and an input field. When the form is submitted, it captures the local input, calls the `onUpdateState` prop (which points to the Parent's function), and effectively updates the Parent's state.

## State Flow Debugging & Prop Drilling (Subtask 5.2)

During development, React DevTools was utilized to track the state changes originating from the Child and reflecting in the Parent and Display components simultaneously.

**Understanding Prop Drilling:**
In this small application, passing props one level deep (Parent -> Child) is perfectly fine. However, in deeply nested component trees, passing props down through multiple intermediate components that don't actually need the data is known as **Prop Drilling**. It makes the code harder to maintain and refactor.

**Solutions to Prop Drilling:**
If this application were to scale into a massive project, we could avoid Prop Drilling by using:

1. **React Context API:** Allows sharing state globally across the component tree without passing props manually at every level.
2. **State Management Libraries:** Tools like Redux or Zustand can store the state externally, allowing any component to connect and access the exact piece of state it needs directly.
