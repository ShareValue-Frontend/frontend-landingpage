<template>
  <div class="team">
    <h2>Leer ons team kennen</h2>

    <div class="employees">
      <div v-for="(employee, idx) in employees" :key="idx">
        <div class="employee">
          <img :src="employee.image" :alt="employee.name" />
        </div>
        <div class="employee-name-tag" >
          <p v-text="['<', employee.name, '/>'].join('')" />
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
      employees: [
        {name: 'Sem', image: 'https://www.sharevalue.nl/images/sharevalue/employees/Sem.jpg' },
        {name: 'Wietze', image: 'https://www.sharevalue.nl/images/sharevalue/employees/Wietze.jpg'},
        {name: 'Johan', image: 'https://www.sharevalue.nl/images/sharevalue/employees/Johan.jpg'},
        {name: 'Rudy', image: 'https://www.sharevalue.nl/images/sharevalue/employees/Rudy.jpg'},
        {name: 'Marwan', image: 'https://www.sharevalue.nl/images/sharevalue/employees/Marwan.jpg'},
      ]
    };
  },
}
</script>

<style scoped lang="scss">

.team {
  padding: 7vw;
  width: 100vw;
}

.employees {
  display: flex;
  justify-content: space-between;
  .employee {
    width: 18rem;
    height: 16rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;;
    margin: 10px;
    border: 1px solid #CCC;
    -webkit-box-shadow: 0px 10px 13px -7px #121212, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #121212, 5px 5px 15px 5px rgba(0,0,0,0);
  }
  .employee-name-tag {
    position: relative;
    bottom: 20px;
    width: 18rem;
    background: #121212;
    color: #FFE742;
    text-align: center;
    padding: 2px 10px;
    font-size: 1.1vw;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0 10px;
  }
}
@media screen and (max-width: 1280px) {
  .employees {
   .employee-name-tag {
      font-size: 2vw;
    }
  }
}
@media screen and (max-width: 992px) {
  .employees {
   flex-wrap: wrap;
   .employee-name-tag {
      font-size: 3vw;
    }
  }
}
@media screen and (max-width: 600px) {
  .employees {
   flex-wrap: wrap;
   .employee-name-tag {
      font-size: 5vw;
    }
  }
}
</style>