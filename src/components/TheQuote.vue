<template>
  <div class="code-quote">
    <div class="quote-wrapper">
      <div class="invisilbe-quote">
        <transition 
          name="fade">
          <p 
            v-if="show" 
            class="constructor">
            <span class="method">@import</span> {&nbsp;
            <span v-if="react" class="variable">React, &nbsp;</span>
            <span v-if="vue" class="variable">Vue, &nbsp;</span>
            <span v-if="angular" class="variable">Angular, &nbsp;</span>
            <span class="variable">jobs</span>
            &nbsp;}&nbsp;
            <span class="method">from </span>
            <span class="location">"@/ShareValue/Front-end"</span>
          </p>
        </transition>
      </div>
      <div 
        class="visilbe-quote"
          @click="show = !show">
        <p 
          class="constructor">
          <span class="code">let </span> 
          <span class="variable">yourJob </span> = 
          <span class="code">new </span>
          <span class="function">job</span>();
        </p>
      </div>
    </div>
    <div class="logo-wrapper">
      <div class="logo">
        <React
          @click="show = true"
          @mouseover="react = true"
          @mouseleave="react = false"
          />
      </div>
      <div class="logo">
        <Vue
          @click="show = true"
          @mouseover="vue = true"
          @mouseleave="vue = false"
          />
      </div>
      <div class="logo">
        <Angular
          @click="show = true"
          @mouseover="angular = true"
          @mouseleave="angular = false"
          />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import React from '@/components/icons/iconReact.vue'
import Vue from '@/components/icons/iconVue.vue'
import Angular from '@/components/icons/iconAngular.vue'

export default defineComponent({
  name: 'theQuote',
    components: {
    React,
    Vue,
    Angular,
  },
  setup() {
    const show = ref(false);
    const react = ref(false);
    const vue = ref(false);
    const angular = ref(false);
    return {
      show,
      react,
      vue,
      angular,
    };
  },
})
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease;
}
.fast-fade-enter-active, .fast-fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to,
.fast-fade-enter-from, .fast-fade-leave-to {
  opacity: 0;
}

.code-quote {
  padding: 7vw 7vw 12vw;
  background-color: #000;
  width: 100vw;
  .quote-wrapper {
    display: flex;
    justify-content: center;
    font-size: 3vw;
    flex-wrap: wrap;

    @media screen and (min-width: 300px) and (max-width: 600px) {
      font-size: 7vw;
		}
    .invisilbe-quote {
      min-height: 90px;
      min-width: 77%;
    }
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
      cursor: pointer;
    }
  }
}

</style>