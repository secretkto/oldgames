<template >
  <div class="made-with-item" :onclick="click">
    <img class="made-with-image" :src="link" alt="" >
  </div>
</template>
<script>

export default {
  props: {
    link: {
      type: String
    },
    click: {
      type: String
    }
  }
}

</script>

<style lang="sass" scoped>
  .made-with-item
    width: 38px
    position: relative
    margin-left: 15px
  .made-with-image
    width: 100%
    cursor: pointer
    position: absolute
    display: block
    top: 0
    bottom: 0
    right: 0
    left: 0
    margin: auto
</style>
