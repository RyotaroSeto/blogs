<template>
  <v-app id="inspire">
    <Navbar/>
    <nuxt/>
    <Footer/>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
