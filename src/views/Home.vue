<template>
  <div>
    <Header />
    <Section />
    <Branding />
    <Services />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Section from '@/components/Section.vue'
import Branding from '@/components/Branding.vue'
import Contact from '@/components/Services.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Section,
    Branding,
    Services,
  }
}
</script>
