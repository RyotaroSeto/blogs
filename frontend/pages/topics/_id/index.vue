<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="(content, index) in topic.posts" :key="index" class="ml-5 content">
          <v-card flat>
            <v-card-text>
              <v-row class="mb-4" align="center">
                <strong class="text-h5 font-weight-bold">{{topic.title}}</strong>
                <v-spacer></v-spacer>
              </v-row>
              <v-img class="white--text align-end" max-height="500" max-width="1100" min-height="350" min-width="300" :src="'/'+topic.img"></v-img>
              <hr>
              <p class="text-muted">{{topic.created_at}} by {{topic.user.name}}</p>
              <p class="text-h6">{{content.body}}</p>
              <div v-if="authenticated">
                <div v-if="user.id === content.user.id">
                  <button class="btn btn-outline-danger fa fa-trash  pull-right" @click="deletePost(content.id)"></button>

                  <nuxt-link :to="{name: 'topics-posts-edit', params: {id: $route.params.id, body: content.id}}">
                    <button class="btn btn-outline-success fa fa-edit pull-right"></button>
                  </nuxt-link>
                </div>
              </div>
              <div v-if="authenticated" class="mt-5 ml-5 mb-5">
                <form @submit.prevent="create">
                  <div class="form-group">
                    <h4>update post</h4>
                    <textarea v-model="body" class="form-control" rows="5"></textarea>
                    <small v-if="errors.body" class="form-text text-danger">{{errors.body[0]}}</small>
                  </div>
                  <button class="btn btn-outline-primary">update post</button>
                </form>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const url = process.client ? `http://localhost:18080/api/topics/${params.id}` : `http://web:80/api/topics/${params.id}`
    const { data } = await $axios.$get(url)
    // const { data } = await $axios.$get(`/topics/${params.id}`)
    console.log(data)
    return {
      topic: data
    }
  },
  data() {
    return {
      topic: '',
      body: '',
      length: 3,
      window: 0,
    }
  },
  methods: {
    async create() {
      await this.$axios.$post(`/topics/${this.$route.params.id}/posts`, {body: this.body})
      this.$router.push('/topics')
    },
    async deletePost(id) {
        await this.$axios.$delete(`/topics/${this.$route.params.id}/posts/${id}`)
        this.$router.push('/')
    }
  }
}
</script>
