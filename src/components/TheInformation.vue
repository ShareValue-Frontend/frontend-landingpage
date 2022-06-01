<template>
  <div class="information">
     <!-- <h2 v-html="['< Informatie />'].join('')" /> -->
     <p v-html="information" />
  </div>
</template>

<script>
export default {
  name: 'TheInformation',
  setup() {
    const information = "Bij ShareValue onderzoeken we <strong>samen met jou</strong> waar jouw ambities en kwaliteiten liggen. Bij ons draait het om de match tussen jou en dé opdracht. Wij beschikken over een uitgebreid netwerk van interessante opdrachtgevers zoals ING, Microsoft, Nederlandse Spoorwegen, Lely en Technische Unie."
    return {
      information,
    };
  },
}
</script>

<style scoped lang="scss">

.information {
  padding: 7vw;
  width: 100vw;
  background: #FFE742;
  font-size: 2.5vw;
    h2 {
      font-size: 3vw;
      font-weight: bolder;
    }  
}
</style>