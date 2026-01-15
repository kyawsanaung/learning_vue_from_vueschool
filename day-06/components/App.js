import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';


export default {
  components: {
    AssignmentList,
    AssignmentCreate
  },

  template: `
    <div class="p-4 ">
      <assignment-list :title="'In Progress'" :assignments="inProgressAssignments"></assignment-list>
      <assignment-list :title="'Completed'" :assignments="completedAssignments"></assignment-list>

      <assignment-create
        @add="addAssignment"
        @save="saveInLocalStorage"
      ></assignment-create>
      

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
    addAssignment(name) {
      this.assignments.push({
        id: Date.now(),
        title: name,
        completed: false
      });
     name = '';
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
