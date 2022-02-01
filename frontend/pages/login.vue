<template>
  <div class="container col-md-6 mt-5">
  	<h2>ログイン</h2>
  	<br>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>メールアドレス</label>
        <input v-model.trim="form.email" type="email" class="form-control" placeholder="Enter email" autofocus>
        <small v-if="errors.email" class="form-text text-danger">{{errors.email[0]}}</small>
      </div>
      <div class="form-group">
        <label>パスワード</label>
        <input v-model.trim="form.password" type="password" class="form-control" placeholder="Password">
        <small v-if="errors.password" class="form-text text-danger">{{errors.password[0]}}</small>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <br>
    <!-- <div>
      <p>アカウントを持っていますか？ <nuxt-link to="/register">新規登録</nuxt-link></p>
      <p><nuxt-link to="/password/forgot" class="text-danger">パスワードを忘れた方はこちら</nuxt-link></p>
    </div> -->
  </div>
</template>

<script>
    export default {
      middleware: ['guest'],
      data() {
        return {
          form: {
            email: '',
            password: ''
          }
        }
      },
      methods: {
          async submit() {
          await this.$auth.loginWith("local", {
            data: this.form
          })
          this.$router.push({
            path: this.$route.query.redirect || "/dashboard"
          })
        }
      }
    }
</script>
