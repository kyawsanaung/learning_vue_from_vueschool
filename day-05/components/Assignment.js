export default {
  template: `
    <li class="flex items-center justify-between">
      <label
        class="flex items-center gap-2 cursor-pointer"
        :for="'assignment-' + assignment.id"
      >
        {{ assignment.title }}
      </label>

      <input
        type="checkbox"
        v-model="assignment.completed"
        :id="'assignment-' + assignment.id"
        class="accent-green-500 h-5 w-5"
      >
    </li>
  `,

  props: {  
    assignment: {   // SINGLE assignment
      type: Object,
      required: true
    }
  }
};
