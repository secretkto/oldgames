<template>
  <div class="game-wrapper">
    <slot></slot>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    'title': String
  }
}
</script>

<style lang="sass" scoped>
  .game-wrapper
    border: 3px solid red
</style>
