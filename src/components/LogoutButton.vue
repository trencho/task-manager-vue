<template>
  <div>
    <button
      class="logout-button"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push({ name: 'Login' }); // Redirect to login after logout
        }
    }
}
</script>