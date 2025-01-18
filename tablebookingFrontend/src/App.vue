<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <header>
    <div class="header-container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/clients">Clients</RouterLink>
        <RouterLink to="/reservations">Reservations</RouterLink>
        <RouterLink to="/tables">Tables</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.header-container {
  display: flex;
  justify-content: flex-start;
  align-items: center; 
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

nav {
  display: flex;
  gap: 15px; 
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>