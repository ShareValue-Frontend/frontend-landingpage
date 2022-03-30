<template>
  <TheScene @animationDone="allowScroll = true" />
  <div v-show="allowScroll">
    <TheTeam />
  </div>
</template>

<script>
import TheScene from '@/components/TheScene.vue'
import TheTeam from '@/components/TheTeam.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      allowScroll: false,
    };
  },
  components: {
    TheScene,
    TheTeam
  },
  mounted() {

  },
}
</script>