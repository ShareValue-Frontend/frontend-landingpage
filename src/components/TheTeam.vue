<template>
  <div class="team">
    <div class="team-image-wrapper">
      <div 
        v-for="(image, idx) in images" 
        :key="idx" 
        :class="['col', image.size].join('-')"> 
        <div 
          class="image" 
          :style="{
            backgroundImage: 'url(' + image.image + ')',
            backgroundPositionY: image.offset + 'px',
            }"
          >
          <div class="image-overlay">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheTeam',
  setup() {
    return {
      images: [
        {label: 'Sem', size: '20',offset: -80, image: 'https://www.sharevalue.nl/images/sharevalue/employees/Sem.jpg',},
        {label: 'Team building', size: '40',offset: 0, image: './src/assets/img/team_3.jpg',},
        {label: 'Wietze', size: '20',offset: -80, image: 'https://www.sharevalue.nl/images/sharevalue/employees/Wietze.jpg'},
        {label: 'Food', size: '20',offset: 0, image: './src/assets/img/food_1.jpg'},
        {label: 'Team building', size: '40',offset: 0, image: './src/assets/img/team_2.jpg',},
        {label: 'Rudy', size: '20',offset: -80, image: 'https://www.sharevalue.nl/images/sharevalue/employees/Rudy.jpg'},
        {label: 'Team building', size: '20',offset: 0, image: './src/assets/img/fun_3.jpg',},
        {label: 'Johan', size: '20',offset: -80, image: 'https://www.sharevalue.nl/images/sharevalue/employees/Johan.jpg'},
        {label: 'Team building', size: '20',offset: 0, image: './src/assets/img/fun_1.jpg',},
        {label: 'Marwan', size: '20',offset: -80, image: 'https://www.sharevalue.nl/images/sharevalue/employees/Marwan.jpg'},
        {label: 'Team building', size: '40',offset: 0, image: './src/assets/img/team_4.jpg',},
        {label: 'Raymon', size: '20',offset: -80, image: 'https://www.sharevalue.nl/images/sharevalue/employees/Raymon.jpg'},
      ]
    };
  },
}
</script>

<style scoped lang="scss">

.team {
  padding: 7vw 0;
  width: 100vw;
  background: #38382e;
  .team-image-wrapper {
    display: flex;
    flex-wrap: wrap;
    .col-20{
      width: 20%;
    }
    .col-40{
      width: 40%;
    }
    .image {
      background: #fff;
      height: 300px;
      background-size: cover;
      border: 5px solid #38382e;
      .image-overlay {
        background: #000;
        opacity: 0.0;
        width: 100%;
        height: 100%;
      }
    }
  }
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 20%; /* IE10 */
  flex: 20%;
  max-width: 20%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .team {
    .team-image-wrapper {
      .col-20, .col-40 {
        width: 100%;
      }
    }
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>