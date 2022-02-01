<template>
  <v-footer dark padless>
    <v-card flat tile class="lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px" @click="move(icon)">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      
      <v-btn v-for="link in links" :key="link.to" text rounded class="my-2">
        <nuxt-link style="color: #FFFFFF;" :to="link.to">{{ link.title }}</nuxt-link>
      </v-btn>

      <v-card-text class="white--text pt-0">
        こんにちは。りょうたろうです。ノート(りょうたろうの)は瀬戸遼太郎の日常と考察のブログです。また一応エンジニアなためシステムに関しての情報も発信できたらなと思っております。
        人生のやりたいことについてたくさんの方と共有できたらなと思っております。気軽にSNSのDMをお願いします。お待ちしております。詳細なプロフィールは<nuxt-link to="/profile">プロフィール</nuxt-link>こちらへ。
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>ノート(りょうたろうの). All rights reserved.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        // 'mdi-linkedin',
        'mdi-instagram',
      ],
      links: [
        { title: "ホーム",to: "/"},
        { title: "プロフィール",to: "/profile"},
        { title: "人生のやりたいリスト",to: "/life"},
         // ブログ記事が少ないため増えてから
        // { title: "エンジニアログ",to: "/engineering"},
        // { title: "ライフプラン",to: "/life-plan"},
      ],
    }),
    methods: {
        move(iconNm) {
            if (iconNm === "mdi-facebook") {
                const url = 'https://www.facebook.com/profile.php?id=100014551206868'
                window.open(url, '_blank') 
            } else if (iconNm === "mdi-twitter") {
                const url = 'https://twitter.com/RyotaroTanqle'
                window.open(url, '_blank') 
            } else if (iconNm === "mdi-linkedin") {
                const url = 'https://twitter.com/RyotaroTanqle'
                window.open(url, '_blank') 
            } else if (iconNm === "mdi-instagram") {
                const url = 'https://www.instagram.com/ryotaro_0303_/'
                window.open(url, '_blank') 
            }
        },
    }
  }
</script>
