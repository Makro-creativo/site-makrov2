<template>
  <div>
    <Header />
    <Section />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Section from '@/components/Section.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Section,
  }
}
</script>
