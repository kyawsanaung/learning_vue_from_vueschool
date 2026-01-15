# Day 06 - Parent–Child Communication in Vue 3

## What I Learned

  - Vue components follow **one-way data flow**
  - **Parent → Child** uses **props**
  - **Child → Parent** uses **custom events (`$emit`)**

  - A child component **cannot directly modify parent data**
  - Instead, it sends information back using `$emit`

  - `v-model` in the child is used only for **local state**
  - Example: capturing user input before emitting it

  - Events emitted from a child are handled by the parent using `@eventName`

  - Vue components are reusable because:
  - They receive data via props
  - They communicate actions via events

---

## Key Takeaways

- **Props = Data going DOWN**
  - Parent controls the data
  - Child only reads it

- **Emits = Events going UP**
  - Child notifies parent about actions
  - Parent decides what to do

- `$emit()` can pass data:
  ```js
  this.$emit('add', this.newAssignment);


## Questions

- Why can’t a child component directly change parent data?
- When should I use `$emit()` instead of passing a function as a prop?
- Can a child emit multiple events to the same parent component?
- What happens if the parent does not listen to an emitted event?
- Is it possible to emit data and an action at the same time?
- When should I use `v-model` on a custom component instead of manual emits?
- Can multiple child components emit the same event name?
- What are common mistakes when using props and emits together?
