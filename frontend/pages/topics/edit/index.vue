<template>
	<div class="container">
		<h2>Update Topic Title</h2>

		<form @submit.prevent="update">
			<div class="form-group mt-5">
				<input v-model="topic.title" type="text" class="form-control">
				<small v-if="errors.title" class="form-text text-danger">{{errors.title[0]}}</small>
			</div>
			<button class="btn btn-outline-success">Update</button>
		</form>
		<p class="mt-5 btn btn-outline-warning">
			<nuxt-link to="/topics">Back to topics</nuxt-link>
		</p>
	</div>
</template>

<script>
	export default {
		async asyncData({$axios, params}) {
    		const url = process.client ? `http://localhost:18080/api/topics/${params.id}/${params.body}` : `http://web:80/api/topics/${params.id}/${params.body}`
    		const { data } = await $axios.$get(url)
			// const {data} = await $axios.$get(`/topics/${params.id}/posts/${params.body}`)
			return {topic: data}
		},
		data() {
			return {
				topic: {
					title: ''
				}
			}
		},
		methods: {
			async update() {
				await this.$axios.$patch(`/topics/${this.$route.params.id}/posts/${this.$route.params.body}`, {
					body: this.post.body
				})
				// redirect
				this.$router.push('/topics')
			}
		}
	}
</script>
