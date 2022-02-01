<template>
  <v-main>
    <v-container mt-50 pt-50>
      <v-row class="white" style="height: auto;">
        <v-col v-for="(topic, index) in topics" :key="index" cols=auto>
          <v-card max-height="400" max-width="400" min-height="400" min-width="350" elevation="3" class="mx-auto" outlined :to="{name: 'topics-id', params: {id: topic.id}}">

            <template v-for="content in topic.posts">
              <v-img :key="content.type" class="white--text align-end" height="200px" :src="topic.img">
              <!-- 良いね機能後で実装 -->
                <!-- <v-card-title>
                  <div class="btn btn-outline-primary fa fa-thumbs-up ml-5 mb-2" @click="likePost(topic.id, content)">
                    <span class="badge">{{content.like_count}}</span>
                  </div>
                </v-card-title> -->
              </v-img>

              <v-card-text :key="content.id" class="text--primary">
                {{topic.title}}
              </v-card-text>

              <v-card-subtitle :key="content.body" class="pb-0">
                {{content.body.substr(0,10)}}...
              </v-card-subtitle>
            </template>
            <br><br>
            <v-card-actions>
              <v-btn color="orange" text>
                Read
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
	export default {
		async asyncData({ $axios }) {
      const url = process.client ? 'http://localhost:18080/api/topics' : 'http://web:80/api/topics'
      const {data, links} = await $axios.$get(url)
			// const {data, links} = await $axios.$get('/topics')
      console.log(data)
      console.log(links)
			return {
				topics: data,
        links
			}
		},
		data() {
			return {
				topics: [],
        links: []
			}
		},
    methods: {
       async loadMore(key) {
        const {data} =  await this.$axios.$get(key)
        this.topics = {...this.topics, ...data}
        return this.topics
      },
      async deleteTopic(id) {
        await this.$axios.$delete(`/topics/${id}`)
        this.$router.push('/')
      },
      async likePost(topicId, content) {
        const userFromVuex = this.$store.getters["auth/user"];
        if (userFromVuex) {
          // cant like your own post
          if (userFromVuex.id === content.user.id) {
            alert('You cant like your own post')
          }
          // if user have already liked
          if (content.users) {
            if (content.users.some(user => user.id === userFromVuex.id)) {
              alert('You have already liked this post')
            } else {
              await this.$axios.$post(`/topics/${topicId}/posts/${content.id}/likes`)
              const {data, links} = await this.$axios.$get(`/topics`)
              this.topics = data
              this.links = links
            }
          }
        } else {
          alert('Please log in')
          this.$router.push('/login')
        }
      }
    }
	}
</script>
