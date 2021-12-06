<template>
  <footer class="footer">
    <ul class="footer-list">
      <li>
        <nuxt-link to="/life"> 人生 </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/programming"> プログラミング </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/jobchange"> 転職 </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/savings"> 節約 </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact"> お問い合わせ </nuxt-link>
      </li>
    </ul>
    <p class="copyright">© 2021 TAROの日記</p>
  </footer>
</template>

<style>
.footer {
  background: white;
  padding: 3rem 0 2rem;
  text-align: center;
}

@media screen and (min-width: 769px) {
  .footer {
    padding: 5rem 0;
  }
}

.footer-list {
  display: inline-block;
  margin-bottom: 5rem;
  vertical-align: middle;
}

.footer-list > li {
  display: inline-block;
  font-size: 1.3rem;
  letter-spacing: 0.05em;
  line-height: 1.8;
  margin: 0 10px;
}

@media screen and (min-width: 769px) {
  .footer-list > li {
    font-size: 16px;
  }
}

.copyright {
  font-size: 1rem;
  letter-spacing: 0.05em;
  padding-bottom: 2rem;
}
</style>
