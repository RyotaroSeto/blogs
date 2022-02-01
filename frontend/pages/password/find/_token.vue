
   
<template>
  <div class="container col-md-6 mt-5">
    <h2>Update your password</h2>
    <br>

    <div v-for="message in messages" :key="message" class="alert alert-primary">
        <template v-if="messages">
            {{message}}
        </template>
    </div>

    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Email address</label>
        <input v-model.trim="form.email" type="email" class="form-control" placeholder="Enter email">
        <small v-if="errors.email" class="form-text text-danger">{{errors.email[0]}}</small>
      </div>
      <div class="form-group">
        <label>New Password</label>
        <input v-model.trim="form.password" type="password" class="form-control" placeholder="Password">
        <small v-if="errors.password" class="form-text text-danger">{{errors.password[0]}}</small>
      </div>
      <button type="submit" class="btn btn-primary">Login with new password</button>
    </form>
    <br>
    <p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
  </div>
</template>

<script>
  export default {
    middleware: ['guest'],
    data() {
      return {
        form: {
          email: '',
          password: '',
          token: ''
        },
        foundUserByToken: false,
        messages: []
      }
    },
    mounted() {
    	this.form.token = this.$route.params.token
    	console.log(this.form.token)
    },
    methods: {
      async submit() {
      	this.messages = []
      	// find the user based on token
        const response = await this.$axios.$get(`/password/find/${this.form.token}`)
        console.log('from backend: ', response)
        this.foundUserByToken = true
        this.messages.push("We found you... just a second!")
        if (this.foundUserByToken) {
        	// to reset password
        	const response = await this.$axios.$post(`/password/reset/`, this.form)
        	console.log('password reset is done: ', response)
        	this.messages.push("Password reset success!.. just a second!")
        	// login
	    	await this.$auth.loginWith('local', {
	          data: {
	            email: this.form.email,
	            password: this.form.password
	          }
	        })
	        this.messages.push("It's all done! Redirecting...")
	        // alert('Now you are logged in using your new password.')
	        this.messages = []
	        this.form = {}
	    	// redirect
	        this.$router.push('/topics')
        }
      }
    }
  }
</script>
