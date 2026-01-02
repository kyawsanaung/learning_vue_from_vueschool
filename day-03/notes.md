## What I Learned

- How to loop over arrays using v-for in Vue templates

- How to bind checkboxes to data using v-model for two-way binding

- How Vue automatically updates the UI when reactive data changes

- How to filter arrays using computed properties

- How to conditionally show sections using v-show

- How to combine one data source (assignments) to create multiple views 
  (In Progress / Completed)

- How Tailwind utility classes (text-xl, font-bold, mb-4) can quickly 
  style elements

## Key Takeaways

- v-model on a checkbox automatically syncs the boolean property

- Computed properties are cached and reactive, ideal for filtering

- v-show only toggles visibility via CSS without removing DOM nodes(hidden)
  v-if skip rendering if the condition is false

- One array can power multiple filtered views (In Progress / Completed)

- :key in v-for helps Vue track items efficiently and avoid rendering issues

- Keeping logic in computed properties keeps templates clean and declarative

- Vue updates the DOM automatically; no manual DOM manipulation needed

## Questions

- Why is computed better than methods for filtering lists?

- What happens if I use v-if instead of v-show?

- Can I filter assignments directly in the template instead of
  computed properties?

- How does v-model work internally for checkboxes?

- How could I add a “New Assignment” input dynamically?

- How would I persist the assignments using localStorage?

- How would this look using the Composition API?