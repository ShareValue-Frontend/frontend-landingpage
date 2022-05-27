<template>
  <div>
    <React v-if="logo === 'React'"/>
    <Vue v-if="logo === 'Vue'"/>
    <Angular v-if="logo === 'Angular'"/>
  </div>
</template>

<script>
  import React from '@/components/icons/iconReact.vue'
  import Vue from '@/components/icons/iconVue.vue'
  import Angular from '@/components/icons/iconAngular.vue'

export default {
  name: 'cardLogo',
  components: {
    React,
    Vue,
    Angular,
  },
  props: {
    logo: String
  },
  setup() {
    return {
    };
  },
}
</script>

<style scoped lang="scss">


</style>