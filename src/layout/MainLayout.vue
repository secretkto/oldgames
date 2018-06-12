<template>
  <div class="main-layout-wrapper">
    <div class="header">
      <router-link to="/" tag="div" class="main-logo-wrapper">
        <img src="../assets/2horizontal.svg" class="logo" @mouseover="invertOnHeader" @mouseout="invertOffHeader">
      </router-link>
      <div class="inside-link-wrapper">
        <router-link to="/tetris" tag="div" class="tetris-link inside-link">
          <img class="inside-link-tetris-img" src="../assets/tetris-icon.png" alt="">
          <span class="span">Tetris</span>
        </router-link>
        <router-link to="/minesweeper" tag="div" class="mine-link inside-link">
          <img class="inside-link-mine-img" src="../assets/minesweeper-icon.png" alt="">
          <span class="span">Minesweeper</span>
        </router-link>
        <router-link to="/tictactoe" tag="div" class="tictactoe-link inside-link">
          <img class="inside-link-tic-img" src="../assets/tictactoe-icon.png" alt="">
          <span class="span">TicTacToe</span>
        </router-link>
        <router-link to="/dos" tag="div" class="dos-link inside-link">
          <img class="inside-link-dos-img" src="../assets/dos-icon.png" alt="">
          <span class="span">Dos Hames</span>
        </router-link>
        <button
          :class="isActiveClass"
          class="hamburger hamburger--collapse"
          type="button"
          @click="toggle();about()"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <slot></slot>
    <div class="footer">
      <img class="campus-logo" src="../assets/campus.png" alt="" onclick="window.open('http://www.iic.md/')" @mouseover="invertOnFooter" @mouseout="invertOffFooter">
      <div class="made-with-text span">Project made with:</div>
      <div class="made-with-wrapper">
        <social-icon
          v-for="link in links"
          v-bind:key="link.id"
          v-bind:link="link.src"
          v-bind:onclick="link.goto"
        >
        </social-icon>
      </div>
    </div>
    <div class="about"></div>
    <div class="author about-text" @click="toggle();about()">
      <span>
        Project Made By:
      </span>
      <span>
        Ponomariov Artiom, student of gr.1618
      </span>
      <span onclick="window.open('https://dl.dropbox.com/s/tlo17ptlnp5audy/%D0%B4%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC.docx')" class="read" >Read<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.494 31.494" >
        <path style="fill: #ffffff;" d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
        </svg>
      </span>
    </div>
    <div class="university about-text">
      <span>
        Ministry of Education of the Republic of Moldova
      </span>
      <span>
        Institute of Continuing Education
      </span>
      <span>
        Faculty of Information Technologies
      </span>
      <span>
        Department of Information Technologies
      </span>
    </div>
    <div class="diplom about-text">
      <span>
        QUALIFYING WORK
      </span>
      <span>
        Theme: "The Desirability Of Using Modern Javascript Frameworks"
      </span>
    </div>
  </div>
</template>

<script>
import SocialIcon from '@/components/SocialIcon'
export default {
  name: 'MainLayout',
  components: {
    SocialIcon
  },
  data () {
    return {
      isActive: false,
      isActiveClass: '',
      links: [
        {id: 1, src: require('../assets/vue-b-100.png'), goto: 'window.open(\'https://vuejs.org/\')'},
        {id: 2, src: require('../assets/js-b-100.png'), goto: 'window.open(\'http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf\')'},
        {id: 3, src: require('../assets/github-b-100.png'), goto: 'window.open(\'https://github.com/secretkto/oldgames\')'},
        {id: 4, src: require('../assets/digital-b-100.png'), goto: 'window.open(\'https://www.digitalocean.com/\')'},
        {id: 5, src: require('../assets/css-b-100.png'), goto: 'window.open(\'https://www.w3.org/Style/CSS/current-work.ru.html\')'},
        {id: 6, src: require('../assets/html-b-100.png'), goto: 'window.open(\'https://html.spec.whatwg.org/multipage/\')'}
      ]
    }
  },
  computed: {
    $header () {
      return document.getElementsByClassName('header')[0]
    },
    $footer () {
      return document.getElementsByClassName('footer')[0]
    },
    $button () {
      return document.getElementsByClassName('hamburger')[0]
    }
  },
  methods: {
    toggle: function () {
      // this.isActive = !this.isActive
      // this.isActive ? this.isActiveClass='is-active' : this.isActiveClass=''
      this.$button.classList.toggle('is-active')
    },
    invertOnHeader: function () {
      this.$header.style.filter="invert(1)"
    },
    invertOffHeader: function () {
      this.$header.style.filter="invert(0)"
    },
    invertOnFooter: function () {
      this.$footer.style.filter="invert(1) brightness(1.5)"
    },
    invertOffFooter: function () {
      this.$footer.style.filter="invert(0)"
    },
    about: function () {
      this.isActive = !this.isActive
      let about = document.getElementsByClassName('about')
      let aboutText = document.getElementsByClassName('about-text')
      if (!this.isActive) {
        about[0].style.transform = 'translatex(100%) translatey(-50%)'
        about[0].style.transitionDelay = '.3s'
        Array.prototype.forEach.call(aboutText, function (el) {
          el.style.transform = 'translatex(100vw)'
          el.style.opacity = '0.3'
        })
      } else {
        about[0].style.transform = 'translatex(0) translatey(-50%)'
        about[0].style.transitionDelay = '0s'
        Array.prototype.forEach.call(aboutText, function (el) {
          el.style.transform = 'translatex(0)'
          el.style.opacity = '1'
        })
      }
    }
  }
}

</script>

<style lang="sass" scoped>
  .main-layout-wrapper
    height: 100%
    display: flex
    flex-wrap: wrap
    flex-direction: column
    justify-content: space-between
    align-items: center
  .header,
  .footer
    width: 100%
    height: 50px
    display: flex
    justify-content: space-between
    align-items: center
    z-index: 4
    background: white
    transition: .3s ease all
  .span
    display: inline-block
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
  .header
    position: relative
    padding-bottom: 5px
  .footer
    position: fixed
    bottom: 0
    padding-top: 20px
  /*header*/
  .logo
    width: 100%
  .main-logo-wrapper
    width: 270px
    display: flex
    align-items: center
    cursor: pointer
    margin-left: 20px
    margin-top: 9px
  .inside-link-wrapper
    height: 50px
    display: flex
    align-items: center
    margin-right: 20px
    margin-top: 5px
  .inside-link
    height: 50px
    display: flex
    align-items: center
    margin-right: 35px
    cursor: pointer
    transition: .2s ease all
    img
      width: 30px
      margin-right: 10px
    .inside-link-tetris-img
      margin-top: 3px
      width: 32px
    .inside-link-tic-img
      width: 26px
    .inside-link-dos-img
      width: 27px
    &:hover
      transform: translatey(3px)

  .hamburger:focus
    outline: none
  .hamburger
    margin-left: 20px
    margin-top: 10px
    transform: scale(0.95)
    padding: 0
  .hamburger-inner
    width: 33px
    &:before,
    &:after
      width: 33px
  /*footer*/
  .campus-logo
    width: 350px
    object-fit: contain
    cursor: pointer
    margin-left: 20px
    margin-bottom: 20px
  .made-with-text
    align-self: center
    flex-grow: 1
    display: flex
    justify-content: flex-end
    margin-bottom: 21px
    margin-right: 20px
  .made-with-wrapper
    display: flex
    justify-content: flex-end
    height: 100%
    margin-right: 20px
    margin-bottom: 20px
  .made-with-item
    border-color: white
  .made-with-item:hover
    border: 3px solid white
    transition: .2s ease all
    transform: translatey(3px)
  .made-with-item:first-of-type
    width: 34px
  .made-with-item:nth-of-type(2)
    width: 39px
  .made-with-item:last-of-type
    width: 38px
  .made-with-item:nth-last-of-type(2)
    width: 38px
  .made-with-item:nth-last-of-type(4)
    width: 37px
  //about
  .about
    position: absolute
    width: 2500px
    height: 2500px
    background: black
    z-index: 3
    border-radius: 50%
    top: 50%
    right: 0
    left: 0
    margin: auto
    transform: translatex(100%) translateY(-50%)
    transition: 0.7s cubic-bezier(.33,.33,.62,.94) all
  .about-text
    color: white
    position: absolute
    width: 550px
    height: 50px
    top: 0
    bottom: 0
    right: 0
    left: 0
    margin: auto
    z-index: 4
    transform: translatex(100vw)
    transition: 0.7s cubic-bezier(.33,.33,.62,.94) all
    opacity: 0.3
    span
      display: block
      line-height: 17px
  .author
    top: 40%
    transition-delay: .3s
    span:nth-child(2)
      margin-top: 5px
  .university
    transition-delay: .2s
    width: 950px
    font-size: 2em
    height: 140px
    span
      line-height: 27px
    span:nth-child(3)
      margin-top: 20px
  .diplom
    transition-delay: .1s
    bottom: 40%
    font-size: 1.5em
    width: 800px
    height: 70px
    span
      line-height: 23px
  .read
    margin-top: 30px
    display: flex
    align-items: center
    transition: .3s ease all
    cursor: pointer
    svg
      width: 15px
      transform: scale(-1, -1) translatey(-3px)
      margin-left: 20px
    &:hover
      transform: translateX(10px)
</style>
