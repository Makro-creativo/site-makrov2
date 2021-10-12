<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },

  created() {
    if(this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpdatedeUI = true;
      });
    }
  },

  methods: {
    async accept() {
      this.showUpdateUI = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  }
}
</script>