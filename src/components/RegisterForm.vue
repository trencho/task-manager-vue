<template>
  <form @submit.prevent="register">
    <div>
      <label>Email:</label>
      <input v-model="email" type="email" required />
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
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await axios.post('/api/auth/register', {
          email: this.email,
          password: this.password
        });
        this.$router.push('/login');
      } catch (error) {
        alert('Registration failed');
      }
    }
  }
};
</script>