<template>
  <router-link tag="div" to="/minesweeper" class="main-wrapper">
    <div class="logo-wrapper">
      <img src="../assets/2vertical.svg" class="logo">
      <router-view/>
    </div>
    <div class="screen">
    <div class="perspective">
      <div class="transform">
        <div class="content">
        </div>
      </div>
    </div>
    </div>
  </router-link>

</template>

<script>
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'Homepage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-wrapper{
    border: 3px solid blue;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .logo-wrapper{
    width: 60%;
  }
  .logo{
    width: 100%;
    display: block;
  }
  .screen{
    position: absolute;
    width: 11.5%;
    transform: translatex(-9%) translateY(-4.35vw);
  }
  .perspective{
    position: relative;
    perspective: 713px;
    width: 100%;
  }
  .transform{
    transform-style: preserve-3d;
    transform: rotateX(1deg) rotateY(33deg) rotateZ(-4deg);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    padding-bottom: 65%;
    position: relative;
  }
  .content{
     background-size: 2vw 2vw;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 75%, transparent 75%, transparent);
    animation: barberpole 1s ease infinite;
    width: 100%;
    position: absolute;
    height: 100%;
  }
  @keyframes barberpole {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 4vw 0;
    }
  }
</style>
