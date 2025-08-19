<template>
  <div>
    <button class="logout-button" @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
import { clearTokens } from '@/utils/auth';

export default {
  methods: {
    logout() {
      clearTokens();
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>