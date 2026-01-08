import AssignmentList from './AssignmentList.js';

export default {
  components: {
    AssignmentList,
  },

  template: `
    <div class="p-4 ">
      <assignment-list :title="'In Progress'" :assignments="inProgressAssignments"></assignment-list>
      <assignment-list :title="'Completed'" :assignments="completedAssignments"></assignment-list>

      <section class="mt-4 border border-white rounded-md p-2 ">
        <div  class="text-black">
          <input
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

    </div>
  `,

  data() {
    return {
      assignments: [
        { id: 1, title: "Assignment 1", completed: false },
        { id: 2, title: "Assignment 2", completed: false },
        { id: 3, title: "Assignment 3", completed: false },
      ],
    };
  },

  computed: {
    inProgressAssignments() {
      return this.assignments.filter(a => !a.completed);
    },
    completedAssignments() {
      return this.assignments.filter(a => a.completed);
    },
  },

  methods: {
    addAssignment(event) {
      this.assignments.push({
        id: Date.now(),
        title: event.target.value,
        completed: false
      });
      event.target.value = '';
    },

    saveInLocalStorage() {
      localStorage.setItem('assignments', JSON.stringify(this.assignments));
      Swal.fire('Saved!', 'Your assignments have been saved.', 'success');
    },
  },

  mounted() {
    const savedAssignments = localStorage.getItem('assignments');
    if (savedAssignments) {
      this.assignments = JSON.parse(savedAssignments);
    }
  }
};
