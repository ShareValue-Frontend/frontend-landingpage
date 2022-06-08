<template>
<div>
  <TheScene @animationDone="allowScroll = true" @animationResumed="allowScroll = false" />
  <div v-show="!allowScroll">
    <TheQuote />
    <TheInformation />
    <TheTeamQuote />
    <TheTeam />
    <TheTheExpression />
  </div>
</div>
</template>

<script>
import TheScene from '@/components/TheScene.vue'
import TheTeam from '@/components/TheTeam.vue'
import TheInformation from '@/components/TheInformation.vue'
import TheQuote from '@/components/TheQuote.vue'
import TheTeamQuote from '@/components/TheTeamQuote.vue'
import TheTheExpression from '@/components/TheExpression.vue'

export default {
  name: 'HomeView',
  setup() {
    return {
      allowScroll: false,
    };
  },
  components: {
    TheScene,
    TheInformation,
    TheTeam,
    TheQuote,
    TheTeamQuote,
    TheTheExpression,
  },
}
</script>