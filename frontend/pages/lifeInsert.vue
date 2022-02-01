<template>
  <div class="container col-md-6 mt-5">
    <h2>人生やりたいことリストを追加する</h2>
    <br>
    <form @submit.prevent="create">
      <div class="form-group">
        <label><strong>やりたいこと:</strong></label>
        <textarea v-model="form.plan" class="form-control" rows="5"></textarea>
        <small v-if="errors.plan" class="form-text text-danger">{{errors.plan[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>結果:</strong></label>
        <textarea v-model="form.result" class="form-control" rows="5"></textarea>
        <small v-if="errors.result" class="form-text text-danger">{{errors.result[0]}}</small>
      </div>
      <button type="submit" class="btn btn-primary">作成</button>
    </form>
  </div>
</template>

<script>
  export default {
    middleware: ['auth'],
    data() {
      return {
        form: {
          plan: '',
          result: ''
        }
      }
    },
    methods: {
      async create() {
        const response = await this.$axios.$post('/life/insert', this.form)
        console.log(response)
        return this.$router.push('/')
      }
    }
  }
</script>
