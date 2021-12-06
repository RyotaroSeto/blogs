<template>
    <div>
        <div>
            <h2>making api request ----vue way</h2>
            <hr>
        </div>
        <div class="container">
            <Card v-for="post in posts" :key="post.id" :post="post" class="" />
            <button v-scroll-to="'body'" class="btn btn-danger">Back to Top</button>
        </div>
   </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import Card from '@/components/Card'


export default {
    components: { Card },
    data() {
        return {
            allPosts: ""
        }
    },
    async fetch({store}) {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        store.dispatch("setPosts", data)
    },
    head: {
        title: "safe money"
    },
    computed: {
        ...mapGetters(['posts'])
    },
}
</script>
