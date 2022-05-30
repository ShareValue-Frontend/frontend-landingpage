<template>
  <div class="team">
    <div class="title">
      <h2 v-text="['< OurFrontendDeck />'].join('')" />
    </div>
    <div class="employees">
      <div v-for="(employee, idx) in employees" :key="idx"> 
        <div 
          class="card-logo-top-wrapper"
          :class="['card', idx].join('-')">
          <div 
            class="card-logo primary"
            :class="employee.primaryFramework">
            <CardLogo :logo="employee.primaryFramework" />
          </div>
          <div 
            class="card-logo secondary" 
            :class="employee.secondaryFramework">
            <CardLogo :logo="employee.secondaryFramework" />
          </div>
          <div 
            class="card-logo tertiaire" 
            :class="employee.tertiaireFramework">
            <CardLogo :logo="employee.tertiaireFramework" />
          </div>
        </div>
        <div class="employee">
          <img 
            :src="employee.image ? employee.image : './src/assets/img/superwoman.jpg'" 
            :alt="employee.name" 
            :style="{left: employee.position + 'px'} " />
          <img 
            class="mirror" 
            :src="employee.image ? employee.image : './src/assets/img/superman.jpg'" 
            :alt="employee.name" 
            :style="{right: employee.position + 'px'} "  />
        </div>
        <div class="card-logo-bottom-wrapper">
          <div 
            class="card-logo primary"
            :class="employee.primaryFramework">
            <CardLogo :logo="employee.primaryFramework" />
          </div>
          <div 
            class="card-logo secondary"
            :class="employee.secondaryFramework">
            <CardLogo :logo="employee.secondaryFramework" />
          </div>
          <div 
            class="card-logo tertiaire" 
            :class="employee.tertiaireFramework">
            <CardLogo :logo="employee.tertiaireFramework" />
          </div>
        </div>
        <div class="employee-name-tag" >
          <p v-text="['', employee.name, ''].join('')" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import React from '@/components/icons/iconReact.vue'
import Vue from '@/components/icons/iconVue.vue'
import Angular from '@/components/icons/iconAngular.vue'
import CardLogo from '@/components/shared/cardLogo.vue'


export default {
  name: 'TheTeamDeck',
  components: {
    React,
    Vue,
    Angular,
    CardLogo,
  },
  setup() {
    return {
      employees: [
        {
        	name: 'Sem',
          primaryFramework: 'Angular',
          secondaryFramework: '',
          tertiaireFramework: '',
          image: 'https://www.sharevalue.nl/images/sharevalue/employees/Sem.jpg', 
          position: 1,
        }, {
        	name: 'Marwan',
          primaryFramework: 'React',
          secondaryFramework: '',
          tertiaireFramework: '',
        	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Marwan.jpg',
          position: -5,
        },{
        	name: 'Rudy',
        	position: 0,
          primaryFramework: 'React',
          secondaryFramework: '',
          tertiaireFramework: '',
        	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Rudy.jpg',
          position: -1,
        },{
        	name: 'Jij?',
        	position: 23,
          primaryFramework: 'Angular',
          secondaryFramework: 'Vue',
          tertiaireFramework: 'React',
        	image: '',
          position: 0,
        },{
        	name: 'Wietze',
          primaryFramework: 'Vue',
          secondaryFramework: '',
          tertiaireFramework: '',
        	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Wietze.jpg',
          position: 20,
        },{
        	name: 'Raymon',
          primaryFramework: 'Angular',
          secondaryFramework: '',
          tertiaireFramework: '',
        	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Raymon.jpg',
          position: 7,
        },{
        	name: 'Johan',
        	position: 23,
          primaryFramework: 'Angular',
          secondaryFramework: 'Vue',
          tertiaireFramework: '',
        	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Johan.jpg',
          position: 17,
        }, 
      ]
    };
  },
}
</script>

<style scoped lang="scss">

.team {
  padding: 7vw;
  width: 100vw;
  background: #38382e;
  .title {
    display: flex;
    justify-content: center;
      h2 {
        font-size: 3vw;
        color:#FFF;
      }
    }
  .employees {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90vw;
    .card-logo-top-wrapper{
      display: flex;
      .card-logo {
        width: 30px;
        height: 30px;
        position: relative;
        z-index: 10;
        &.primary {
          top: 55px;
          left: 25px;
        }
        &.secondary {
          top: 57px;
          left: 30px;
        }
        &.tertiaire {
          top: 57px;
          left: 30px;
        }
      }
    }
    .card-logo-bottom-wrapper{
      display: flex;
      flex-direction: row-reverse;
      .card-logo {
        width: 30px;
        height: 30px;
        position: relative;
        z-index: 10;
        transform: rotate(180deg);
        &.primary {
          bottom: 55px;
          right: 25px;
        }
        &.secondary {
          bottom: 57px;
          right: 30px;
        }
        &.tertiaire {
          bottom: 57px;
          right: 30px;
        }
      }
    }
    .employee {
      width: 11rem;
      height: 21rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;;
      margin: 10px;
      background: #fff;
      border: 1px solid #CCC;
      -webkit-box-shadow: 0px 10px 13px -7px #121212, 5px 5px 15px 5px rgba(0,0,0,0); 
      box-shadow: 0px 10px 13px -7px #121212, 5px 5px 15px 5px rgba(0,0,0,0);
      border-radius: 4%;
      img {
        position: relative;
        &.mirror {
          -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
        }
      }
    }
    .employee-name-tag {
      position: relative;
      bottom: 216px;
      width: 9rem;
      background: #121212;
      color: #FFE742;
      text-align: center;
      padding: 4px 10px;
      font-size: 1vw;
      font-weight: bold;
      letter-spacing: 2px;
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 1280px) {
  .employees {
   .employee-name-tag {
      font-size: 2vw !important;
    }
  }
}
@media screen and (max-width: 992px) {
  .employees {
   .employee-name-tag {
      font-size: 2vw !important;
    }
  }
}
@media screen and (max-width: 600px) {
  .employees {
   .employee-name-tag {
      font-size: 5vw !important;
    }
  }
}
</style>