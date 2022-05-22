<template>
  <div class="team">
    <h2>Leer ons team kennen</h2>

    <div class="employees">
      <div class="employee" v-for="(employee, idx) in employees" :key="idx">
        <img :src="employee.image" :alt="employee.name" />
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
      ]
    };
  },
}
</script>

<style scoped lang="scss">

.team {
  padding: 7rem;
  background-color: #f7df1e;
  width: 100vw;
}

.employees {
  display: flex;
  justify-content: space-between;
  .employee {
    width: 16rem;
    height: 16rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 8px solid #121212;
  }
}

</style>