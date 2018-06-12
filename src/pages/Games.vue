<template>
  <div>
    <div class="games-wrapper">
      <div class="game-wrapper">
        <h2>Tetris</h2>
        <router-link to="/tetris" tag="div" class="tetris game-link"></router-link>
      </div>
      <div class="game-wrapper">
        <h2>Minesweeper</h2>
        <router-link to="/minesweeper" tag="div" class="minesweeper game-link"></router-link>
      </div>
      <div class="game-wrapper">
        <h2>TicTacToe</h2>
        <router-link to="/tictactoe" tag="div" class="tictactoe game-link"></router-link>
      </div>
      <div class="game-wrapper">
        <h2>Dos Games</h2>
        <router-link to="/dos" tag="div" class="dos game-link"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Games'
}
</script>

<style lang="sass" scoped>
.games-wrapper
  width: 100%
  height: 50%
  display: flex
  justify-content: space-around
  align-items: center
  transform: translateY(-10%)
  position: absolute
  top: 0
  bottom: 0
  right: 0
  left: 0
  margin: auto
  transform: translatez(0)
  h2
    color: black
    transition: .1s ease all
  .game-wrapper div
    width: 20vw
    height: 20vw
    display: inline-flex
    border: 10px solid black
    border-radius: 50%
    overflow: hidden
    justify-content: center
    align-items: center
    cursor: pointer
.game-wrapper
.tetris
  transform: rotate(-11deg)
  background: url(../assets/tetris.png)
  background-size: cover
  background-position-x: -0.5vw
  background-position-y: -0.3vw
.minesweeper
  transform: rotate(-16deg)
  background: url(../assets/minesweeper.png)
  background-size: cover
  background-position-x: -0.5vw
  background-position-y: -0.3vw
.tictactoe
  transform: rotate(-25deg)
  background: url(../assets/tictactoe.png)
  background-size: cover
.dos
  transform: rotate(-15deg)
  background: url(../assets/dos.png)
  background-size: cover
.game-link
  transition: .3s ease all
.game-wrapper:hover
  .game-link
    transform: rotate(0deg)
  h2
    transform: scale(1.5) translatez(0)
</style>
