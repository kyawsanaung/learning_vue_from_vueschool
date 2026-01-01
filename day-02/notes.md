# Day 02 – Vue Basics

## What I Learned

- How to use Vue 3 Options API with Vue.createApp()

- How to define reactive state using the data() function

- How Vue automatically updates the DOM when data changes (reactivity)

- How to bind HTML attributes dynamically using :class

- How to handle user events using @click

- How Vue methods can change data and trigger UI updates

- How conditional class binding works using a ternary operator

## Key takeaway

data() must return an object — this is where Vue stores reactive variables

Vue tracks changes to active and updates the button style automatically

:class allows dynamic styling based on conditions

@click is shorthand for v-on:click

Vue keeps logic (JS) and view (HTML) cleanly connected

You don’t need manual DOM manipulation like document.getElementById()

Options API is simple and great for beginners before moving to Composition AP

## Questions

- What happens if I use an object syntax for :class instead of a ternary?

- How would this code look using the Composition API?

- Can I bind multiple classes at the same time?

- What is the difference between methods and computed properties?

- Why does Vue require data() to be a function?

- How does Vue know when to re-render the button?
