<template>
  <div class="task-list">
    <ul>
      <li
        v-for="task in tasks"
        :key="task.id"
        class="task-item task-actions"
      >
        <strong class="task-title">{{ task.title }}</strong>: {{ task.description }}
        <button
          class="edit"
          @click="editTask(task)"
        >
          Edit
        </button>
        <button @click="deleteTask(task.id)">
          Delete
        </button>
      </li>
    </ul>

    <div class="pagination">
      <button
        :disabled="page === 1"
        @click="previousPage"
      >
        Previous
      </button>
      <button @click="nextPage">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tasks', 'page'],
  methods: {
    editTask(task) {
      this.$emit('edit-task', task);
    },
    deleteTask(id) {
      this.$emit('delete-task', id);
    },
    nextPage() {
      this.$emit('change-page', this.page + 1);
    },
    previousPage() {
      this.$emit('change-page', this.page - 1);
    }
  }
};
</script>