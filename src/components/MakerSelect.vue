<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <div class='row'>
                <div class="col-xs-2 select_marker"
                     @click='set("X")'><span>X</span></div>
                <div class="col-xs-8 select_title">
                  SELECT<span style='color:#00B16A'>MARKER</span>
                </div>
                <div class="col-xs-2 select_marker"
                     @click='set("O")'>O</div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "MakerSelect",
}

</script>

<style lang="sass" scoped>

</style>

