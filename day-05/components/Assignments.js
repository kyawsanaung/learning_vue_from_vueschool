import Assignment from "./Assignment.js";

export default {
  components: {
    Assignment,
  },

  template: `
    <ul class="mt-2 space-y-2 divide-y divide-gray-300 border border-white rounded-md p-2">
      <assignment
        v-for="assignment in assignments"
        :key="assignment.id"
        :assignment="assignment"
      >
      </assignment>
    </ul>
  `,

  props: {
    assignments: {
      type: Array,
      required: true
    }
  }
};
