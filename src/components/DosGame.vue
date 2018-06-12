<template >
  <iframe :src="link" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen class="iframe"></iframe>
</template>
<script>

export default {
  props: {
    'link': String
  }
}

</script>

<style lang="sass" scoped>

</style>
