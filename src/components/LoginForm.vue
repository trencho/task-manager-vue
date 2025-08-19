<template>
  <form @submit.prevent="login">
    <div>
      <label>Username:</label>
      <input v-model="username" type="username" required>
    </div>
    <div>
      <label>Password:</label>
      <input v-model="password" type="password" required>
    </div>
    <button type="submit">
      Login
    </button>
  </form>
</template>

<script>
import axios from 'axios';
import { setAccessToken, setRefreshToken } from '@/utils/auth';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/auth/login', {
          username: this.username,
          password: this.password
        });
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        this.$router.push('/tasks');
      } catch (error) {
        alert('Login failed: ' + error);
      }
    }
  }
};
</script>