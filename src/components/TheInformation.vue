<template>
  <div class="information">
     <h2 v-text="['< Informatie />'].join('')" />
     <p v-html="information" />
  </div>
</template>

<script>
export default {
  name: 'TheInformation',
  setup() {
    const information = "Bij ShareValue onderzoeken we <strong>samen met jou</strong> waar jouw ambities en kwaliteiten liggen. Bij ons draait het om de match tussen jou en dé opdracht. Wij beschikken over een uitgebreid netwerk van interessante opdrachtgevers zoals ING, Microsoft, Nederlandse Spoorwegen, Lely en Technische Unie. Samen zoeken we het project dat bij jou past. Soms kijk je naar reisafstand en werksfeer en soms zoek je nét dat ene uitdagende project met die technologie waarin je verder wilt. Bij ons kan dat!"
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
  .title {
    display: flex;
    justify-content: center;
      h2 {
        font-size: 3vw;
        color: #000000;
      }
    }
}
</style>