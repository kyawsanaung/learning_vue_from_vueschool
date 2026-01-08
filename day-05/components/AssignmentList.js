import Assignments from "./Assignments.js";

export default {
  components: {
    Assignments,
  },
  template: `
    <section v-show="assignments.length" class="mb-4">
      <h2 class="font-bold text-xl">{{ title }}</h2>
      <assignments :assignments="assignments"></assignments>
    </section>
  `,

  props: {
    assignments: {
      type: Array,
      required: true,
    },

    title: {
      type: String,
      default: "Assignments",
    },
  },
};
