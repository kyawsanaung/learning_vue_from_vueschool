# Day 04 – Vue Dynamic Button & Processing State

## What I Learned

- How to pass props from parent to child (`type`, `processing`)
- How to use `:class` array syntax for dynamic Tailwind classes
- How to disable a button using `:disabled="processing"`
- How to hide button text using `text-transparent` or 
  inline `style="color: transparent"`
- How to overlay a spinner on top of the button using 
  absolute positioning
- How to combine Tailwind utility classes with dynamic Vue state
- How to handle click events to change reactive
  state (`processing = true`) and revert after a timeout
- How to structure modular Vue components with ES modules
  (`App.js` + `AppButton.js`)
- Tailwind CDN limitation: dynamic classes in templates
  may not generate automatically
- Why SVG spinner works better than `::before` 
  pseudo-element for dynamic content

## Key Takeaway

- Wrapping button text in a `<span>` allows independent styling from the spinner
- `:processing="processing"` passes reactive state to child components
- `this.processing` must be used inside methods to access reactive state
- Array syntax in `:class` is safer and cleaner for multiple dynamic conditions
- Spinner SVG + `absolute + flex + justify-center + items-center` centers perfectly on button
- Tailwind CDN works for static classes; for dynamic classes, a build tool like Vite is needed
- Reactive data automatically updates the DOM without manual manipulation

## Questions

- How can multiple buttons have independent processing states?
- Can we replace `setTimeout` with real async API calls 
  while keeping the spinner?
- How can we animate button transitions when entering 
  or leaving processing state?
- How would this look using Vue Composition API?
- Can we add a loading text next to the spinner for better UX?
- How to ensure Tailwind generates dynamic classes when
  using CDN only?
