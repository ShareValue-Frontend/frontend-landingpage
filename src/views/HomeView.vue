<template>
<div>
  <TheScene @animationDone="allowScroll = true" @animationResumed="allowScroll = false" />
  <div v-show="!allowScroll">
    <TheQuote />
    <TheTeam />
  </div>
</div>
</template>

<script>
import TheScene from '@/components/TheScene.vue'
import TheTeam from '@/components/TheTeam.vue'
import TheQuote from '@/components/TheQuote.vue'

export default {
  name: 'HomeView',
  setup() {
    return {
      allowScroll: false,
    };
  },
  components: {
    TheScene,
    TheTeam,
    TheQuote,
  },
}
</script>