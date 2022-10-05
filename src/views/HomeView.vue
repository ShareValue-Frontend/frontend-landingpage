<template>
<div class="page-container">
  <TheScene @animationDone="allowScroll = true" @animationResumed="allowScroll = false" />
  <div v-show="allowScroll">
    <TheNavbar />
    <TheQuote />
    <TheInformation />
    <TheTeamQuote />
    <TheTeam />
    <TheExpression />
    <TheFooter />
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
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'HomeView',
  setup() {
    const allowScroll = ref(false)
    return {
      allowScroll
    };
  },
  components: {
    TheNavbar,
    TheScene,
    TheInformation,
    TheTeam,
    TheQuote,
    TheTeamQuote,
    TheExpression,
    TheFooter,
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