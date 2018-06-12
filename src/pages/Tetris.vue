<template >
  <div class="iframe-wrapper">
    <iframe src="http://bassfunk.tk/tetris/" frameborder="0" id="tetris-iframe" tabindex="0" ></iframe>
  </div>
</template>

<style lang="sass" scoped>
@media(max-width: 500px)
  body
    min-width: 500px
#tetris-iframe
  width: 100vw
  height: 70vh
  position: absolute
  top: 0
  bottom: 0
  right: 0
  left: 0
  margin: auto
  z-index: 1
.iframe-wrapper
  position: absolute
  top: 0
  right: 0
  left: 0
  bottom: 0
  background: black
</style>
<script>

export default {
  mounted () {
    this.$nextTick(function () {
      document.getElementById('tetris-iframe').focus();
    })
  }
}

</script>
