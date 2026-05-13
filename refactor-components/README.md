# React Component Refactoring Lab

## Overview

This repository contains the completion of the "Refactor Components" lab. The goal of this exercise was to take a monolithic, complex React application and refactor it into smaller, highly reusable, and maintainable components without breaking the existing functionality.

## Refactoring Process & Improvements

1. **Component Extraction:**
   - Split the massive `App.jsx` into smaller, focused components: `Header.jsx`, `Footer.jsx`, `UserList.jsx`, and `UserCard.jsx`.
   - **Checklist Met:** Evaluated effective splitting of large components into smaller, well-defined sub-components.
2. **Elimination of Duplicated Code:**
   - Instead of hardcoding HTML for each user, I created a reusable `UserCard` component. The `UserList` component utilizes the `.map()` function to dynamically render these cards, eliminating repetitive JSX.
   - **Checklist Met:** Identified and eliminated duplicated code blocks.
3. **Improved Readability & Props Drilling:**
   - `App.jsx` now strictly handles state management (`useState`) and data flow. Data and logic (like the `handleDeleteUser` function) are passed down seamlessly via **props** to child components.
   - **Checklist Met:** Improved code readability through clear naming, concise functions, and logical structure.
4. **Preserved Functionality:**
   - Post-refactoring, the core feature (viewing users and deleting them from the state) functions perfectly without throwing console errors or warnings.
