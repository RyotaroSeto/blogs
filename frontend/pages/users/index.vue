<template>
  <div>
      <h1>Hello user</h1>
      <no-ssr>
          <VSelect v-model="selected" placeholder="Select Category" :options="['foo', 'bar']"></VSelect>
      </no-ssr>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selected: '',
    }
  },
  methods: {
  },
}
</script>
