<template>
    <div class="container col-md-6 mt-5">
        <h2>Register</h2>
        <br>
        <form @submit.prevent="submit">
            <div class="form-group">
                <label>Full Name</label>
                <input v-model.trim="form.name" type="text" class="form-control" placeholder="Enter your name"
                autofocus>
                <small v-if="errors.name" class="form-text text-danger">{{errors.name[0]}}</small>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input v-model.trim="form.email" type="email" class="form-control" placeholder="Enter email">
                <small v-if="errors.email" class="form-text text-danger">{{errors.email[0]}}</small>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input v-model.trim="form.password" type="password" class="form-control" placeholder="Password">
                <small v-if="errors.password" class="form-text text-danger">{{errors.password[0]}}</small>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
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
          name: '',
          email: '',
          password: '',
      },
    };
  },
  methods: {
      async submit() {
        await this.$axios.$post('/auth/register', this.form)
        await this.$auth.loginWith('local', {
            data: {
                email: this.form.email,
                password: this.form.password,
                name: this.form.name,
            }
        })
        this.$router.push('/')
      }
  }
};
</script>
