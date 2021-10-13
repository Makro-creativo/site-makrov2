<template>
  <div>
    <Header />
    <Section />
    <Branding />
    <Companies />
    <Services />
    <Precing />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Section from '@/components/Section.vue'
import Branding from '@/components/Branding.vue'
import Companies from '@/components/Companies.vue'
import Precing from '@/components/Precing.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Section,
    Branding,
    Companies,
    Precing,
    Contact,
    Footer,
  }
}
</script>
