# Day 05 – Vue Assignment List

## What I Learned

- How to structure **modular Vue components**
  - `App.js` holds the **assignments array** (root source of truth)
  - `AssignmentList.js` receives the **assignments array** as a prop
  - Inside `AssignmentList.js`, the **assignments array is looped with `v-for`** to create multiple `Assignment` components
  - `Assignment.js` receives a **single assignment object** as a prop and renders it
- How **props flow down** from parent to child components
- Using `v-for` and `:key` in the parent component (`AssignmentList.js`) to **render each assignment**
- Binding checkbox state with `v-model="assignment.completed"` in the child component
- Filtering assignments in `App.js` using **computed properties**
  - `inProgressAssignments`
  - `completedAssignments`
- Adding new assignments dynamically with input and `@keyup.enter`
- Persisting assignments in `localStorage` and loading them on refresh
- Conditional rendering of sections with `v-show`
- Tailwind styling for checkboxes (`h-5 w-5`) and coloring (`accent-*` or custom CSS)
- Why **child components should handle only one item** to keep the component reusable and modular

## Key Takeaways

- Props are **read-only**, but nested object properties (`assignment.completed`) can be safely mutated
- Parent handles **arrays**, child handles **single items**
- Proper `:key` usage avoids DOM re-render issues
- `mounted()` hook is perfect for **loading saved data**
- `watch` can be used to **auto-save changes** without a Save button
- `<label for>` + `id` improves UX by linking text and checkbox
- Tailwind CDN may not generate dynamic classes; build tools (Vite, Webpack) handle that better

## Component Hierarchy / Data Flow

- `App` → **source of truth**
- `AssignmentList` → loops array and passes each item
- `Assignment` → renders one assignment, binds checkbox state

## Questions / Next Steps

- How to **auto-save checkbox changes** on toggle
- How to **delete assignments** dynamically
- Can we **animate assignments** moving from in-progress to completed?
- How to add **priority, due date, or tags** to assignments
- How would this structure look using **Composition API**
- How to handle **multiple independent lists** on the same page
