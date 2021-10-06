<template>
  <div>
    <Header />
    <Section />
    <Branding />
    <Services />
    <Precing />
    <Contact />
    <CardPrecing />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Section from '@/components/Section.vue'
import Branding from '@/components/Branding.vue'
import Services from '@/components/Services.vue'
import Precing from '@/components/Precing.vue'
import Contact from '@/components/Contact.vue'
import CardPrecing from '@/components/CardPrecing.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Section,
    Branding,
    Services,
    Precing,
    Contact,
    CardPrecing,
    Footer,
  }
}
</script>
