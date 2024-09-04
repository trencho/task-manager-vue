<template>
    <div>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <strong>{{ task.title }}</strong>: {{ task.description }}
          <button @click="editTask(task)">Edit</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
  
      <div>
        <button @click="previousPage" :disabled="page === 1">Previous</button>
        <button @click="nextPage">Next</button>
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
  