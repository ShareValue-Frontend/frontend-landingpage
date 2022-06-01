<template>
  <div class="code-team-quote">
    <div class="quote-wrapper">
      <p 
        @click="show = !show" 
        class="constructor">
        <span class="method">@import</span> {&nbsp;
        <span class="variable">Team, Events</span>&nbsp;}&nbsp;
        <span class="method">from </span>
        <span class="location">"./ShareValue/Front-end/People"</span>
      </p>
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

.code-team-quote {
  padding: 2vw 7vw;
  background-color: #d6bf28;
  color: #2C3E50;
  width: 100vw;
  font-size: 3vw;
  .quote-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .constructor {
      color: #2C3E50;;
      cursor: pointer;
      .code {
        color: #2C3E50;;
      }
      .variable {
        color: #2C3E50;;;
      }
      .function {
        color: #2C3E50;;
      }
      .method {
        color: #2C3E50;;
      }
      .location {
        color: #2C3E50;;
      }
    }
  }
}

</style>