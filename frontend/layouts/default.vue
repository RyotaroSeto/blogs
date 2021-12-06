<template>
  <div>
    <Nav />
    <div class="jumbotron"></div>
    <nuxt />

    <!-- <nui-sidebar /> -->
    <div class="footer_wrap">
      <nui-footer />
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
// import NuiHeader from '@/components/Header.vue'
import NuiSidebar from '@/components/Sidevar.vue'
import NuiFooter from '@/components/Footer.vue'

export default {
  components: { Nav, NuiSidebar, NuiFooter },

}
</script>
