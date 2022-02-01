<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app class="hidden-md-and-up">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="" fixed  dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-avatar class="mr-10" color="grey darken-1" size="42"><img src="/profile.jpg" alt="ryotaro"></v-avatar>
      <v-toolbar-title to="/" v-text="title"/>
      <v-spacer />
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in items" :key="i" :to="item.to" >
          {{ item.title }}
        </v-btn>

        <template v-if="authenticated">
          <v-btn v-for="link in adminLinks" :key="link.to" :to="link.to" >
            {{ link.title }}
          </v-btn>
        </template>

        <template v-if="user">
          <template v-if="!authenticated">
            <v-btn v-for="link in auths" :key="link.to" :to="link.to" >
              {{ link.title }}
            </v-btn>
          </template>
          <template v-if="authenticated">
            <v-btn >
              {{user.name}}
            </v-btn>
            <v-btn >
              <a @click.prevent="logout">ログアウト</a>
            </v-btn>
          </template>
        </template>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        { title: 'ホーム', to: '/' },
        { title: 'プロフィール', to: '/profile' },
        { title: '人生のやりたいリスト', to: '/life' },
        // ブログ記事が少ないため増えてから
        // { title: 'エンジニアログ', to: '/engineering' },
        // { title: 'ライフプラン', to: '/life-plan' },
      ],
      auths: [
        {  title: 'ログイン', to: '/login' },
        {  title: '登録', to: '/register' },
      ],
      adminLinks: [
        {  title: 'ブログ作成', to: '/dashboard' },
        {  title: '人生のやりたいことリスト追加', to: '/lifeInsert' },
      ],
      title: "ノート(りょうたろうの)"
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
