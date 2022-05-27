<template>
<div>
  <TheScene @animationDone="allowScroll = true" @animationResumed="allowScroll = false" />
  <div v-show="!allowScroll">
    <TheQuote />
    <TheTeamDeck />
    <TheTeam />
  </div>
</div>
</template>

<script>
import TheScene from '@/components/TheScene.vue'
import TheTeamDeck from '@/components/TheTeamDeck.vue'
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
    TheTeamDeck,
    TheQuote,
  },
}
</script>