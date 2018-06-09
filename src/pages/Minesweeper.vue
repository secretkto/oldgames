<template>
  <main-layout>
    <div class="hello">
      dsfsdf
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'Minesweeper',
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
<style lang="sass" scoped>
  .hello
    border: 3px solid red
</style>
