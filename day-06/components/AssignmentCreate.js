export default {
    template: `
    <section class="mt-4 border border-white rounded-md p-2 ">
        <div  class="text-black">
          <input
            v-model="newAssignment"
            type="text"
            placeholder="New Assignment"
            @keyup.enter="addAssignment"
            class="p-2 "
          >
          <button
            @click="saveInLocalStorage"
            class="bg-white p-2 border-l border-gray-600 "
            >
            Save
          </button>
        </div>
      </section>
    `,

    data() {
        return {
            newAssignment: ''
        };
    },

    methods: {
        addAssignment() {
            this.$emit('add', this.newAssignment);
        },

        saveInLocalStorage() {
            this.$emit('save');
        }
    },

}