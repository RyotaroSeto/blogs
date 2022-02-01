<template>
	<div class="container">
		<h3>人生のやりたいことリスト</h3>
        <p>こんにちは、瀬戸遼太郎です。</p>
        <div>
            <div>
                <h1><span style="font-size: x-large;">瀬戸遼太郎の人生でやりたいことリスト</span></h1>
                <p>現在{{count.count}}個中{{count.finishCount}}個 達成。{{count.countPercent}}%</p>
            </div>
            <div v-if="!authenticated">
                <template v-for="(val, index) in life">
                    <p v-if="val.result === ''" :key="index">
                        {{val.id}}.{{val.plan}}
                    </p>
                    <p v-else :key="index">
                        <del>{{val.id}}.&nbsp;{{val.plan}}</del><span style="color: #3366ff;">&nbsp;達成：{{val.result}}&nbsp;達成日：{{val.updated_at}}</span>
                    </p>
                </template>
            </div>
            <div v-else>
                <template v-for="(val, index) in life">
                    <p v-if="val.result === ''" :key="index">
                        <nuxt-link :to="{name: 'lifeEdit', params: {id: val.id}}">{{val.id}}.{{val.plan}}</nuxt-link>
                    </p>
                    <p v-else :key="index">
                        <del>{{val.id}}.&nbsp;{{val.plan}}</del><span style="color: #3366ff;">&nbsp;達成：{{val.result}}&nbsp;達成日：{{val.updated_at}}</span>
                    </p>
                </template>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		async asyncData({ $axios }) {
            const url = process.client ? 'http://localhost:18080/api/life' : 'http://web:80/api/life'
            const response = await $axios.$get(url)
			// const response = await $axios.$get('/life')
            console.log(response)
			return { life: response.life, count: response.count }
		},
		data() {
			return {
			}
		},
        methods: {
        }
	}
</script>

<style scoped>
  .content {
    border-left: 10px solid white;
    padding: 0 10px 0 10px;
  }
  .btn-outline-success, .btn-outline-danger {
    border: none;
  }
</style>
