<template>
    <div class="container">
        <h1>{{post.title}}</h1>
        <pre>{{post.body}}</pre>
        <nuxt-link to="/posts">前に戻る</nuxt-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData({params}) {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        return {post: data}
    },
    data() {
        return {
            post: ""
        }
    },
    head() {
        return {
            title: this.post.title
        }

    },
}
</script>
