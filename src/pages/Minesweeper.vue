<template>
  <main-layout>
    <game>
      <div class="title">
        minesweaper
      </div>
    </game>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'Minesweeper',
  components: {
    MainLayout
  }
}
</script>

<style lang="sass" scoped>
  .hello
    border: 3px solid red
</style>
