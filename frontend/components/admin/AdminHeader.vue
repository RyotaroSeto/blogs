<template>
  <header>
    <div class="headerTop rc-headerTop">
      <div class="container rc-container">
        <div class="row rc-container-in">
          <div class="col-6 rc-container-left">
            <h1><span class="rc-h1-txt">ブログ管理システム</span></h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
header {
  margin-bottom: 0;
  display: block;
}
.rc-headerTop {
  overflow: hidden;
  height: auto;
}
.headerTop {
  background: #ebede6;
}
.rc-container {
  padding: 5 px 30 px;
}
.container {
  max-width: 900 px;
  height: 80%;
  position: relative;
  width: 100%;
}
.rc-container-in {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.row {
  margin-right: -15 px;
  margin-left: -15 px;
}
.rc-container-left {
  max-width: none;
  width: auto;
  flex: auto;
  padding: 5 px 15 px;
}
h1 {
  margin: 0 0 1 em;
  padding: 0;
  font-weight: bold;
}
.rc-h1-txt {
  display: inline-block;
  color: #009245;
  margin: 0 12 px 0 0;
  padding: 0;
  font-size: 18px;
  vertical-align: middle;
  border-radius: 5 px;
  text-align: center;
  line-height: 22px;
}
</style>
