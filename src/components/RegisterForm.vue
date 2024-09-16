<template>
  <form @submit.prevent="register">
    <div>
      <label>Username:</label>
      <input v-model="username" type="username" required />
    </div>
    <div>
      <label>Password:</label>
      <input v-model="password" type="password" required />
    </div>
    <button type="submit">Register</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await axios.post('/api/auth/register', {
          username: this.username,
          password: this.password
        });
        this.$router.push('/login');
      } catch (error) {
        alert('Registration failed: ' + error);
      }
    }
  }
};
</script>