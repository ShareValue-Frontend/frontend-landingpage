<template>
<div class="page-container">
  <h1 style="z-index:9999;position:fixed;top:0;left:0;">{{allowScroll}}</h1>
  <TheScene @animationDone="allowScroll = true" @animationResumed="allowScroll = false" />
  <div v-show="allowScroll">
    <TheQuote />
    <TheInformation />
    <TheTeamQuote />
    <TheTeam />
    <TheExpression />
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import TheScene from '@/components/TheScene.vue'
import TheTeam from '@/components/TheTeam.vue'
import TheInformation from '@/components/TheInformation.vue'
import TheQuote from '@/components/TheQuote.vue'
import TheTeamQuote from '@/components/TheTeamQuote.vue'
import TheExpression from '@/components/TheExpression.vue'

export default {
  name: 'HomeView',
  setup() {
    const allowScroll = ref(false)
    return {
      allowScroll
    };
  },
  components: {
    TheScene,
    TheInformation,
    TheTeam,
    TheQuote,
    TheTeamQuote,
    TheExpression,
  },
}
</script>

<style>
.page-container {
  padding: 0;
  margin: 0;
  max-width: 100vw;
  overflow: hidden;
}
</style>