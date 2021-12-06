<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <nuxt-link to="/" class="navbar-brand">ROGO</nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">HOME</nuxt-link>
          </li>
          <li class="nav-item">
             <nuxt-link to="users" class="nav-link">USERS</nuxt-link>
          </li>
          <li class="nav-item">
             <nuxt-link to="/posts" class="nav-link">POSTS</nuxt-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->.
        </ul>
        <template v-if="!loggedIn">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
               <nuxt-link to="/login" class="nav-link">LOGIN</nuxt-link>
            </li>
            <li class="nav-item">
               <nuxt-link to="/register" class="nav-link">REGISTER</nuxt-link>
            </li>
          </ul>
        </template>
        <template v-if="loggedIn">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
               <a class="nav-link">{{user.name}}</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" @click.prevent="logout">LOGOUT</a>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      loggedIn: "Authenticated",
      user: "user",
    }),
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
