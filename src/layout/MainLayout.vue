<template>
  <div class="main-layout-wrapper">
    <div class="header">
      <router-link to="/" tag="div" class="logo-wrapper">
        <img src="../assets/2horizontal.svg" class="logo">
      </router-link>
    </div>
    <slot></slot>
    <div class="footer">
      <img class="campus-logo" src="../assets/campus.png" alt="" onclick='window.open("http://www.iic.md/")'>
      <div class="made-with-wrapper">
        <div class="made-with-text">Project made with: </div>
        <img class="made-with-item" src="../assets/vue-b-100.png" alt="" onclick="window.open('https://vuejs.org/')">
        <img class="made-with-item" src="../assets/js-b-100.png" alt="" onclick="window.open('http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf')">
        <img class="made-with-item" src="../assets/github-b-100.png" alt="" onclick="window.open('https://github.com')">
        <img class="made-with-item" src="../assets/digital-b-100.png" alt="" onclick="window.open('https://www.digitalocean.com/')">
        <img class="made-with-item" src="../assets/css-b-100.png" alt="" onclick="window.open('https://www.w3.org/Style/CSS/current-work.ru.html')">
        <img class="made-with-item" src="../assets/html-b-100.png" alt="" onclick="window.open('https://html.spec.whatwg.org/multipage/')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}

</script>

<style lang="sass" scoped>
.main-layout-wrapper
  border: 3px solid red
  height: 100%
  display: flex
  flex-wrap: wrap
  flex-direction: column
  justify-content: space-between
  align-items: center
.header,
.footer
  border: 3px solid blue
  width: 100%
  height: 50px
  display: flex
  justify-content: space-between
  align-items: center
.logo
  width: 100%
.logo-wrapper
  width: 230px
  display: flex
  align-items: center
  cursor: pointer
.campus-logo
  width: 350px
  object-fit: contain
  cursor: pointer
.made-with-text
  align-self: center
.made-with-wrapper
  border: 3px solid red
  display: flex
  justify-content: flex-end
  width: 33%
  height: 100%
.made-with-item
  object-fit: contain
  width: 70px
  cursor: pointer
</style>
