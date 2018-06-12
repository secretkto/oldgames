<template>
  <div id="app">
    <main-layout>
      <transition name="fade">
        <router-view/>
      </transition>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dhurjati');
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-size: 15px !important
}
#app {
  font-family: 'Dhurjati', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100%;
  width: 100%;
}
.fade-enter-active, .fade-leave-active{
  transition-property: opacity;
  transition-duration: .25s;
}
.fade-enter-active{
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
}
</style>
