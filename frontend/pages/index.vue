<template>
  <div>
    <h1 class="title">
        a
    </h1>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  // async asyncData({ $axios }) {
  //   const text = await $axios.$get('http://web:80/api');
  //   return {
  //     text,
  //   };
  // },
  data() {
    return {
      text: '',
    };
  },
};
</script>
