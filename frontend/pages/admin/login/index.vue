<template>
  <div class="contentBlock">
    <h2><i class="fas fa-sign-in-alt"></i>管理画面へのログイン</h2>
    <div class="contentBox">
      <form @submit.prevent="login">
        <p v-if="error" class="error">
          メールアドレスまたはパスワードが違います。
        </p>
        <p>
          <label>ログインID</label
          ><input
            id="loginid"
            v-model="form.email"
            type="text"
            name="email"
            class="w50p"
          />
        </p>
        <p>
          <label>パスワード</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            name="password"
            class="w50p"
          />
        </p>
        <p>
          <input class="btn-basic" type="submit" value="ログイン" />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'admin',
  // middleware: 'auth',
  data() {
    return {
      error: false,
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      try {
        // const URL = 'http://localhost:18080/api/auth/login'
        // const response = await axios.post(URL, {
        //   email: this.email,
        //   password: this.password,
        // })
        const response = await this.$auth.loginWith('local', {
          data: this.form,
        })
        console.log(response)
        // OKだったら管理画面に遷移してログイン状態にする
      } catch (e) {
        this.error = true
      }
    },
  },
}
</script>

<style>
.contentBlock {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  width: 94%;
  text-align: left;
}
.contentBlock {
  background: #f5f6f3;
  border-radius: 20 px;
  padding: 20 px;
  margin-bottom: 20 px;
}
h2 {
  margin: 0 0 1 em;
  padding: 0;
  font-weight: bold;
  font-size: 100%;
  line-height: 1.566666666666667;
  color: inherit;
  font-family: inherit;
}
form {
  display: block;
  margin-top: 0em;
}
p {
  margin: 0 0 1 em;
  padding: 0;
}
form label {
  display: block;
  padding: 0;
  font-weight: bold;
  line-height: 2.215;
  margin-bottom: 0.5 rem;
}
.w50p {
  width: 50%;
}
form input {
  padding: 6 px;
  font-size: 13px;
  border: 1 px solid #d5d5d5;
  color: #333;
  line-height: inherit;
  touch-action: manipulation;
  overflow: visible;
  margin: 0;
  font-family: sans-serif;
}
.btn-basic {
  background: #009245;
  border: 1 px solid #009245;
  box-shadow: 0 1px #007534;
  color: #fff !important;
  border-radius: 5 px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 2 px 10 px;
}
</style>
