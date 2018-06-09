<template>
  <main-layout>
    <div class="games-wrapper">
      <div class="tetris">{{ title }}</div>
      <div class="minesweeper">{{ title }}</div>
      <div class="tictactoe">{{ title }}</div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'Games',
  components: {
    MainLayout
  }
}
</script>

<style lang="sass" scoped>
.games-wrapper
  border: 3px solid red
  width: 500px
  height: 500px
  div
    width: 50px
    height: 50px
    display: inline-block
    border: 3px solid green
</style>
