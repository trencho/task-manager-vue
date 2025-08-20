<template>
  <form @submit.prevent="register">
    <div>
      <label>Username:</label>
      <input
        v-model="username"
        type="username"
        required
      >
    </div>
    <div>
      <label>Email:</label>
      <input
        v-model="email"
        type="email"
        required
      >
    </div>
    <div>
      <label>Password:</label>
      <input
        v-model="password"
        type="password"
        required
      >
    </div>
    <button type="submit">
      Register
    </button>
  </form>
</template>

<script>
import axiosInstance from '@/utils/axiosSetup';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await axiosInstance.post('/api/auth/signup', {
          username: this.username,
          email: this.email,
          password: this.password
        });
        this.$router.push('/login');
      } catch (error) {
        alert('Registration failed: ' + error.response.data);
      }
    }
  }
};
</script>