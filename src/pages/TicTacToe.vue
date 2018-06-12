<template >
  <div>

    <div id='tictactoe'>
      <transition enter-active-class='animated fadeIn' leave-active-class='animated fadeOut' mode='out-in'>
        <modal v-if='showModal'>
          <maker-select></maker-select>
        </modal>

        <div id='welcome' v-if='!started'>
          <div class='titleBlock'>
            <h1>tic<span>tac</span>toe</h1>
            <div class='row mode' @click='init("player")' @mouseover='tick.play()'>
              [versus<span>player</span>]
            </div>
            <div class='row mode'
            @click='showModal = true'
            @mouseover='tick.play()'>
              [versus<span>computer</span>]
            </div>
          </div>
        </div>

        <div id='main' v-if='started && !game.over'>
          <table id='board'>
            <tr v-for='row in board'>
              <td v-for='box in row'>
                <div class='square' @click='router(box)' :class='{"square active": box.bg}'>
                  {{box.val}}
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div id='reset' v-if='started && game.over'>
          <div class='titleBlock'>
            <h1 v-if='!game.draw'><span>{{game.winner}}</span> wins!</h1>
            <h1 v-if='game.draw'><span>draw</span></h1>
            <h2>play again?</h2>
            <div class='row mode' @click='init("player")' @mouseover='tick.play()'>
              [versus<span>player</span>]
            </div>
            <div class='row mode'
            @click='showModal = true'
            @mouseover='tick.play()'>
            [versus<span>computer</span>]
            </div>
          </div>
        </div>
      <!--//-->
      </transition>
    </div>
  </div>
</template>
<script>
import MakerSelect from '@/components/MakerSelect'
export default {
  name: 'TicTacToe',
  data () {
    return {
      started: false,
      showModal: false,
      mode: '',
      run: false,

      turn: 'X',

      markers: {
        player: '',
        computer: ''
      },

      game: {
        over: false,
        winner: '',
        draw: false
      },

      board: [
        [{val: '', bg: ''}, {val: '', bg: ''}, {val: '', bg: ''}],
        [{val: '', bg: ''}, {val: '', bg: ''}, {val: '', bg: ''}],
        [{val: '', bg: ''}, {val: '', bg: ''}, {val: '', bg: ''}]
      ],

      windex: [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
      ],

      tick: new Audio('https://dl.getdropbox.com/s/kgqqnei0yhv3r8n/219069__annabloom__click1.wav')
    }
  }, // DATA
  components: {
    MakerSelect
  },
  computed: {
    arr () {
      return this.board.map(x => x.map(y => y.val))
    },

    winArr () {
      return this.windex.map(x => x.map(y => this.board[y[0]][y[1]].val))
    },

    check () {
      // const board = this.arr
      const windex = this.winArr
      const draw = this.arr.every(x => x.every(y => y !== ''))

      const checkWin = windex.forEach((x, ind) => {
        const vector = this.windex[ind]
        let over = false

        if (x.every(y => y === 'X')) {
          this.game.winner = 'X'
          over = true
        }

        if (x.every(y => y === 'O')) {
          this.game.winner = 'O'
          over = true
        }

        if (draw) {
          this.game.draw = true
          over = true
        }

        if (over) {
          this.run = false
          this.setWin(vector)
        }
      })
    },

    AIWinMove () {
      let move = ''
      const board = this.board
      const combos = this.winArr
      const AI = this.markers.computer
      const AIStr = AI.repeat(3)
      combos.forEach((x, ind) => {
        if (x.join('') + AI === AIStr) {
          let row = combos[ind]
          let col = row.indexOf('')
          let index = this.windex[ind][col]
          let box = board[index[0]][index[1]]
          move = box
        }
      })
      return move
    },

    AIBlockMove () {
      let move = ''
      const board = this.board
      const combos = this.winArr
      const player = this.markers.player
      const playStr = player.repeat(3)
      combos.forEach((x, ind) => {
        if (x.join('') + player === playStr) {
          let row = combos[ind]
          let col = row.indexOf('')
          let index = this.windex[ind][col]
          let box = board[index[0]][index[1]]
          move = box
        }
      })
      return move
    },

    randomMove () {
      const board = this.board
      let counter = 0
      const recurse = () => {
        if (counter == 8) return
        counter++
        let row = Math.floor(Math.random() * 2)
        let col = Math.floor(Math.random() * 2)
        if (board[row][col].val == '') {
          return board[row][col]
        } else { return recurse() }
      }
      return recurse()
    },

    AI () {
      const win = this.AIWinMove
      const block = this.AIBlockMove
      const random = this.randomMove

      if (win != '') { return win } else if (win == '' && block != '') { return block } else { return random }
    }
  }, // COMPUTED

  methods: {
    set (marker) {
      this.markers.player = marker
      this.markers.computer = marker === 'X' ? 'O' : 'X'
      this.init('computer')
    },
    init (mode) {
      this.reset()
      this.mode = mode
      this.showModal = false

      if (mode === 'computer') { this.turn = this.markers.player }

      this.start()
    },

    start () {
      this.run = true
      this.started = true
    },

    reset () {
      this.mode = ''
      this.run = false
      this.game.over = false
      this.game.winner = ''
      this.game.draw = false

      this.board.forEach(x => {
        x.map(y => { y.val = ''; y.bg = '' })
      })
    },

    router (box) {
      if (this.mode === 'player') { this.mark(box) }

      if (this.mode === 'computer' && box.val === '') {
        this.mark(box)
        setTimeout(() => {
          this.mark(this.AI)
        }, 300)
      }
    },

    mark (box) {
      const run = this.run

      if (box.val === '' && run) {
        box.val = this.turn
        this.turn = this.turn === 'X' ? 'O' : 'X'
        this.check
      }
    },

    setWin (vector) {
      if (!this.game.draw) {
        vector.forEach(x => {
          this.board[x[0]][x[1]].bg = 'active'
        })
      }

      setTimeout(() => {
        this.game.over = true
      }, 500)
    }
  }// METHODS
}

</script>

<style scoped>

* {
  user-select: none;
}

.center, .modal-container, .titleBlock, #board {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

span {
  color: #FFF;
}

.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(108, 122, 137, 0.5);
  transition: opacity .3s ease;
}

.modal-container {
  width: 80%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all .3s ease;
}

.modal-body {
  font-family: "Oswald", sans-serif;
  font-size: 8vw;
  margin: 0;
  width: 100%;
  text-align: center;
  background: #6C7A89;
  color: white;
}

.select_marker {
  cursor: pointer;
}

#welcome {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
}

.titleBlock {
  color: white;
  font-family: "Oswald", sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
}
.titleBlock h1 {
  font-size: 100px;
  width: 100%;
}
.titleBlock .mode {
  font-size: 50px;
  cursor: pointer;
}

#board {
  border-collapse: separate;
  border-spacing: 2px;
}

td {
  vertical-align: middle;
}

.square {
  transition: .3s ease all;
  margin: 0;
  width: 10vw;
  height: 10vw;
  background: #FFF;
  cursor: pointer;
  font-family: "Oswald", sans-serif;
  font-size: 10vw;
  line-height: 10.2vw;
  text-align: center;
  color: #000;
  border-radius: 50%;
}
.square:hover {
  opacity: .8;
}
.square.active {
  background: red;
}

#reset {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
}
#main{
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
