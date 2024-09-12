<template>
  <div>
    <h2>Task Manager</h2>
    <TaskForm :task="currentTask" :isEditing="isEditing" @submit-task="handleTaskSubmit" />
    <TaskList :tasks="tasks" :page="page" @edit-task="editTask" @delete-task="deleteTask" @change-page="fetchTasks" />
  </div>
</template>

<script>
import axios from 'axios';
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  components: {
    TaskForm,
    TaskList
  },
  data() {
    return {
      tasks: [],
      currentTask: { title: '', description: '' },
      isEditing: false,
      page: 1
    };
  },
  methods: {
    async fetchTasks(page = 1) {
      try {
        const response = await axios.get(`/api/tasks?page=${page}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        this.tasks = response.data.tasks;
        this.page = page;
      } catch (error) {
        alert('Failed to fetch tasks');
      }
    },
    async handleTaskSubmit(task) {
      if (this.isEditing) {
        await this.updateTask(task);
      } else {
        await this.createTask(task);
      }
    },
    async createTask(task) {
      try {
        const response = await axios.post('/api/tasks', task, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        this.tasks.push(response.data.task);
        this.resetForm();
      } catch (error) {
        alert('Failed to create task');
      }
    },
    async updateTask(task) {
      try {
        await axios.put(`/api/tasks/${task.id}`, task, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        this.resetForm();
        this.fetchTasks(this.page);
      } catch (error) {
        alert('Failed to update task');
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete(`/api/tasks/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        this.fetchTasks(this.page);
      } catch (error) {
        alert('Failed to delete task');
      }
    },
    editTask(task) {
      this.currentTask = { ...task };
      this.isEditing = true;
    },
    resetForm() {
      this.currentTask = { title: '', description: '' };
      this.isEditing = false;
    }
  },
  mounted() {
    this.fetchTasks();
  }
};
</script>