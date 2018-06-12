<template >
  <div>
    <div class="arrow left-arrow" @click="changeDosGameLeft">
      <svg><g><line x2="227.62" y1="31.28" y2="31.28"></line><polyline points="222.62 25.78 228.12 31.28 222.62 36.78"></polyline><circle cx="224.67" cy="30.94" r="30.5" transform="rotate(180 224.67 30.94) scale(1, -1) translate(0, -61)"></circle></g></svg>
      <span>{{ pacman }}</span>
    </div>
    <div class="arrow right-arrow" @click="changeDosGameRight">
      <svg><g><line x2="227.62" y1="31.28" y2="31.28"></line><polyline points="222.62 25.78 228.12 31.28 222.62 36.78"></polyline><circle cx="224.67" cy="30.94" r="30.5" transform="rotate(180 224.67 30.94) scale(1, -1) translate(0, -61)"></circle></g></svg>
      <span>{{ aladin }}</span>
    </div>
    <div class="computer">
      <img src="../assets/computer-screen.png" alt="" class="computer-screen">
      <img src="../assets/computer-screen-cut.png" class="computer-screen-cut" alt="">
      <div class="games-wrapper">
        <dos-game :src="link" id="iframe"></dos-game>
      </div>
    </div>
  </div>
</template>
<script>
import DosGame from '@/components/DosGame'
export default {
  name: 'Dos',
  components: {
    DosGame
  },
  props: {
    aladin: {
      type: String,
      default: 'Play Aladin'
    },
    prince: {
      type: String,
      default: 'Play Prince'
    },
    pacman: {
      type: String,
      default: 'Play Pacman'
    }
  },
  data () {
    return {
      isLeftAladin: false,
      isLeftPacman: true,
      isLeftPrince: false,
      isRightAladin: false,
      isRightPacman: true,
      isRightPrince: false,
      link: 'https://archive.org/embed/msdos_Prince_of_Persia_1990'
    }
  },
  methods: {
    changeDosGameLeft: function () {
      let text1 = document.querySelectorAll('.arrow span')[0].innerHTML
      let text2 = document.querySelectorAll('.arrow span')[1].innerHTML
      if (text1 === this.pacman && text2 === this.aladin) {
        document.querySelectorAll('.arrow span')[0].innerHTML = this.prince
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Pac-Man_1983'
      }
      if (text1 === this.pacman && text2 === this.prince) {
        document.querySelectorAll('.arrow span')[0].innerHTML = this.aladin
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Pac-Man_1983'
      }
      if (text1 === this.prince && text2 === this.aladin) {
        document.querySelectorAll('.arrow span')[0].innerHTML = this.pacman
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Prince_of_Persia_1990'
      }
      if (text1 === this.prince && text2 === this.pacman) {
        document.querySelectorAll('.arrow span')[0].innerHTML = this.aladin
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Prince_of_Persia_1990'
      }
      if (text1 === this.aladin && text2 === this.prince) {
        document.querySelectorAll('.arrow span')[0].innerHTML = this.pacman
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Disneys_Aladdin_1994'
      }
      if (text1 === this.aladin && text2 === this.pacman) {
        document.querySelectorAll('.arrow span')[0].innerHTML = this.prince
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Disneys_Aladdin_1994'
      }
    },
    changeDosGameRight: function () {
      let text1 = document.querySelectorAll('.arrow span')[0].innerHTML
      let text2 = document.querySelectorAll('.arrow span')[1].innerHTML
      if (text2 === this.aladin && text1 === this.pacman) {
        document.querySelectorAll('.arrow span')[1].innerHTML = this.prince
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Disneys_Aladdin_1994'
      }
      if (text2 === this.aladin && text1 === this.prince) {
        document.querySelectorAll('.arrow span')[1].innerHTML = this.pacman
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Disneys_Aladdin_1994'
      }
      if (text2 === this.prince && text1 === this.pacman) {
        document.querySelectorAll('.arrow span')[1].innerHTML = this.aladin
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Prince_of_Persia_1990'
      }
      if (text2 === this.prince && text1 === this.aladin) {
        document.querySelectorAll('.arrow span')[1].innerHTML = this.pacman
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Prince_of_Persia_1990'
      }
      if (text2 === this.pacman && text1 === this.aladin) {
        document.querySelectorAll('.arrow span')[1].innerHTML = this.prince
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Pac-Man_1983'
      }
      if (text2 === this.pacman && text1 === this.prince) {
        document.querySelectorAll('.arrow span')[1].innerHTML = this.aladin
        document.getElementById('iframe').src = 'https://archive.org/embed/msdos_Pac-Man_1983'
      }
    }
  }
}

</script>

<style lang="sass" scoped>
.computer
  width: 43vw
  height: 43vw
  position: absolute
  top: 0
  bottom: 0
  right: 0
  left: 0
  margin: auto
.computer-screen
  width: 100%
  height: 100%
  z-index: 2
  position: relative
  pointer-events: none
.games-wrapper
  border: 3px solid black
  width: 25vw
  font-size: 0
  height: 17.8vw
  position: absolute
  top: 13%
  right: 0
  left: 22%
  bottom: 0
  border-radius: 58px
.computer-screen-cut
  width: 26vw
  font-size: 0
  height: 18vw
  position: absolute
  top: 13%
  right: 0
  left: 21%
  bottom: 0
  z-index: 3
  mix-blend-mode: screen
  pointer-events: none
.arrow
  font-size: 10px
  display: inline-block
  width: 25.6em
  height: 6.3em
  overflow: hidden
  vertical-align: middle
  text-align: left
  text-decoration: none
  line-height: 3em
  color: #000
  cursor: pointer
  transform: translateZ(0)
  transition: 0.5s
  svg
    z-index: 1
    position: absolute
    top: 0
    left: 0
    g
      line, polyline, circle
        fill: none
        stroke: #000
      line, polyline
        stroke-miterlimit: 10
      circle
        display: block
        stroke-linecap: round
        stroke-linejoin: round
        stroke-width: 0.066em
        stroke-dasharray: 200
        stroke-dashoffset: 0
        transition: stroke-dashoffset ease-out 0.5s
  span
    z-index: 2
    position: relative
    display: inline-block
    font-family: "Roboto", Helvetica, Arial, sans-serif
    font-size: 1.5em
  &:hover
    transform: translateZ(0) translateX(0.5em)
    svg g circle
      stroke-dashoffset: 200
.iframe
  width: 100%
  height: 100%
.left-arrow
  position: absolute
  top: 0
  bottom: 0
  left: 15%
  margin: auto
  transform: scale(-1, 1)
  &:hover
    transform: translateZ(0) translateX(-0.5em) scale(-1, 1)
  span
    transform: scale(-1, 1)
.right-arrow
  position: absolute
  top: 0
  bottom: 0
  right: 15%
  margin: auto
@media (max-width: 1500px)
  .left-arrow
    left: 10%
  .right-arrow
    right: 10%
@media (max-width: 1200px)
  .left-arrow
    left: 5%
  .right-arrow
    right: 5%

</style>
