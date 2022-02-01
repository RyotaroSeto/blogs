<template>
  <div class="container col-md-6 mt-5">
    <h2>ブログを作成する</h2>
    <br>
    <form @submit.prevent="create">
      <div class="form-group">
        <label><strong>タイトル:</strong></label>
        <input v-model="form.title" type="text" class="form-control" placeholder="タイトルを入力してね" autofocus>
        <small v-if="errors.title" class="form-text text-danger">{{errors.title[0]}}</small>
      </div>
      <div class="form-group">
        <label><strong>内容:</strong></label>
        <textarea v-model="form.body" class="form-control" rows="5"></textarea>
        <small v-if="errors.body" class="form-text text-danger">{{errors.body[0]}}</small>
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
          title: '',
          body: ''
        }
      }
    },
    methods: {
      async create() {
        await this.$axios.$post('/topics', this.form)
        return this.$router.push('/')
      }
    }
  }
</script>
