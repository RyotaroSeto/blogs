<template>
  <div class="container col-md-6 mt-5">
    <h2>人生やりたいことリストを編集する</h2>
    <br>
    <form @submit.prevent="edit">
      <div class="form-group">
        <label><strong>やりたいこと:</strong></label>
        <textarea v-model="life.plan" class="form-control" rows="5"></textarea>
        <small v-if="errors.plan" class="form-text text-danger">{{errors.plan[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>結果:</strong></label>
        <textarea v-model="life.result" class="form-control" rows="5"></textarea>
        <small v-if="errors.result" class="form-text text-danger">{{errors.result[0]}}</small>
      </div>
      <button type="submit" class="btn btn-primary">編集</button>
    </form>
  </div>
</template>

<script>

export default {
    middleware: ['auth'],
	async asyncData({$axios, params}) {
		const response = await $axios.$get(`/life/edit?id=${params.id}`)
		return {life: response}
	},
    data() {
      return {
        life: {
          plan: '',
          result: ''
        }
      }
    },
    methods: {
      async edit() {
        const response = await this.$axios.$post('/life/edit', this.life)
        console.log(response)
        return this.$router.push('/')
      }
    }
}
</script>
