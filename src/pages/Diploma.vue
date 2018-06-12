<template >
  <div class="diploma-wrapper">

  </div>
</template>
<script>

import MainLayout from '@/layout/MainLayout'
export default {
  name: 'Diploma',
  components: {
    MainLayout
  },
  props: {
    aladin: {
      type: String,
      default: 'Play Aladin'
    }
  },
  data () {
    return {
    }
  }
}

</script>

<style scoped>
.diploma-wrapper{
  position: absolute;
  width: 100%;
  height: 100%;
  background:  red;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
</style>
