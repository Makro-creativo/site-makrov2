<template>
  <div>
    <Header />
    <Section />
    <Branding />
    <Services />
    <Precing />
    <Contact />
    <Footer />
    <ButtonWhatsapp />
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
import Footer from '@/components/Footer.vue'
import ButtonWhatsapp from '@/components/ButtonWhatsapp.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Section,
    Branding,
    Services,
    Precing,
    Contact,
    Footer,
    ButtonWhatsapp,
  }
}
</script>
