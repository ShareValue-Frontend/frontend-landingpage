<template>
  <div class="code-quote">
    <div class="quote-wrapper">
      <p 
        @click="show = !show" 
        class="constructor">
        <span class="code">const </span> 
        <span class="variable">yourJob </span> = 
        <span class="code">new </span>
        <span class="function">job</span>();
      </p>
      <transition name="fade">
        <p 
          v-if="show" 
          class="constructor">
          <span class="method">@import</span> {&nbsp;
          <span class="variable">jobs</span>&nbsp;}&nbsp;
          <span class="method">from </span>
          <span class="location">"@/ShareValue/Front-end"</span>
        </p>
      </transition>
    </div>
    <div class="logo-wrapper">
      <div class="logo">
        <React/>
      </div>
      <div class="logo">
        <Vue/>
      </div>
      <div class="logo">
        <Angular/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import React from '@/components/icons/iconReact.vue'
import Vue from '@/components/icons/iconVue.vue'
import Angular from '@/components/icons/iconAngular.vue'

export default {
  name: 'theQuote',
    components: {
    React,
    Vue,
    Angular,
  },
  setup() {
    const show = ref(false);
    return {
      show,
    };
  },
}
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.code-quote {
  padding: 7vw;
  background-color: #000;
  width: 100vw;
  font-size: 3vw;
  .quote-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .constructor {
      color: #fff;
      cursor: pointer;
      .code {
        color: #2452AD;
      }
      .variable {
        color: #44A9F7;
      }
      .function {
        color: #E1E1A1;
      }
      .method {
        color: #b578A3;
      }
      .location {
        color: #C3602C;
      }
    }
  }
  .logo-wrapper{
    display: flex;
    justify-content: center;
    .logo {
      width: 6vw;
      margin: 40px 30px 0;
    }
  }
}

</style>