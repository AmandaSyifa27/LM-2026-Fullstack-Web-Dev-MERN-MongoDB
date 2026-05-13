# Lab Report: Dynamic List Rendering in React

**Name:** Amanda

## Implementation Details

1. **Initial Data Structure:** Utilized the `useState` hook to manage an array of item objects. Each object contains a unique `id` and `text` value.
2. **Dynamic Rendering (`map` and `key`):** The list is rendered dynamically using the `.map()` method. A critical aspect of this implementation is assigning a unique and stable `key={item.id}` to each `<li>` element. This adheres to React's best practices, ensuring optimal DOM reconciliation and preventing rendering bugs during state changes.
3. **Adding Items & Validation:** The `handleAddItem` function safely copies the existing state array and appends the new item object. The new item is assigned a dynamic `id` using `Date.now()`. To ensure data integrity, an input validation check (`inputValue.trim()`) is implemented to prevent users from adding blank entries to the list.
4. **Removing Items:** The `handleRemoveItem` function takes an `id` as an argument and utilizes the array `.filter()` method to extract and remove the targeted item, thereby correctly updating the component state without mutating the original array.
5. **Conditional UI Behavior:** Employed conditional rendering with a ternary operator to seamlessly toggle between displaying the list elements and an empty state message (`"The list is empty. Add some items above!"`) when the state array length equals zero.
