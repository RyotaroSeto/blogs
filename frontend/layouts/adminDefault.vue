<template>
  <div>
    <admin-header />
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/AdminHeader.vue'

export default {
  components: { AdminHeader },
}
</script>
