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
          <span class="location">"./ShareValue/Front-end"</span>
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {

  name: 'theQuote',
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
  padding: 7rem;
  background-color: #000;
  width: 100vw;
  font-size: 40px;
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
}

</style>