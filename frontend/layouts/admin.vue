<template>
  <div>
    <admin-header />
    <div id="formPosition" class="container rc-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/AdminHeader.vue'

export default {
  components: { AdminHeader },

  // setup() {
  //   const title = ref('')
  //   const setListener = () => {
  //     // emitで発火させたイベント名にする
  //     $nuxt.$on('updateHeader', setHeader)
  //   }
  //   const setHeader = () => {
  //     // 第1引数にはemitで渡した値が入ってくる。
  //     // 第2引数以降を渡す場合も同様に、それ以降の引数で受け取れる
  //     this.title = title || ''
  //   }

  //   created(() => {
  //     setListener()
  //   })

  //   return { title }
  // },
}
</script>

<style>
#formPosition {
  padding-top: 30 px;
}
.container {
  max-width: 900 px;
  height: 80%;
  position: relative;
  width: 100%;
  padding: 0 30 px;
}
</style>
