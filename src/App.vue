<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  border: 3px solid red;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  border: 3px solid yellow;
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
