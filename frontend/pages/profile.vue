<template>
	<div class="container">
		<h1>プロフィール</h1>
        <p><img loading="lazy" class="" src="/profile.jpg" alt="" width="35%" height="35%"></p>
        <div>
            <h2><span style="font-size: x-large;">瀬戸遼太郎（せとりょうたろう）</span></h2>
            <p>1996年3月3日生まれ</p>
            <p>好きな食べ物はカレー、エビフライ</p>
            <p>栃木県立宇都宮北高校卒</p>
            <p>武蔵野大学環境学部卒</p>
            <h4>IT業界に足を踏み入れるまで</h4>
            <p>学生時代は特にやりたいこともなく、典型的なちゃらんぽらん大学生でした。当時熱中していたことといえば、アルバイト、競馬、スロット、酒、女。喫煙はしなかった分、マシでしょう！汗<br>そのまま就職活動もエネルギー業界は生活の「インフラ」だから食いっぱぐれることもなく
               安定しているだろという安易な考えでガス業界大手の営業会社に入社。仕事に対して全く夢中になれず（むしろ仕事している時間が大嫌いでした。）、地味なプレッシャーもあり、日曜の7時にはサザエさん症候群になりました。
               拘束時間も長く、全国転勤であり田舎では生活できないと考えていたため、将来性がないと思い1年1ヶ月で退職。<br>かと言ってやりたいことなど特になかったため、友人がコールセンターの仕事をしており、毎日定時で帰れてとても楽と言っていたため
               コールセンターの仕事を探していました。コールセンターだと思い面接に行くとJava?の話やプログラミングの話になり、Excel、PowerPointなら知っていると回答。落ちたな・・と思いきや何故かその場で採用！これが僕がIT業界に踏み入れるキッカケでした！！
            </p>
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
