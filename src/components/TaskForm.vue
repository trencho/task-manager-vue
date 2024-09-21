<template>
  <form @submit.prevent="submitTask">
    <div>
      <label>Title:</label>
      <input
        v-model="task.title"
        required
      >
    </div>
    <div>
      <label>Description:</label>
      <textarea v-model="task.description" />
    </div>
    <button type="submit">
      {{ isEditing ? 'Update' : 'Create' }} Task
    </button>
  </form>
</template>

<script>
export default {
  props: ['task', 'isEditing'],
  methods: {
    submitTask() {
      this.$emit('submit-task', this.task);
    }
  }
};
</script>