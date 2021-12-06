<template>
  <div class="contentBlock">
    <p>ログインに成功しました。ホーム画面です。</p>
    <div>
      <input
        class="btn-basic"
        type="button"
        value="ログアウト"
        @click="logout"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'admin',
  //   middleware: 'auth',
  methods: {
    async logout() {
      try {
        const URL = 'http://localhost:18080/api/auth/logout'
        const response = await axios.post(URL)
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style>
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
