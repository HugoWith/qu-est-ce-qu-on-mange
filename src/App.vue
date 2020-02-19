<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data(){
        return {
          idMeal: '',
          strMeal: ''
          }
      },
};
</script>

<script>
import gql from 'graphql-tag'

    export default {
      name: 'app',
      /* [...] */
      apollo: {
        recipes: gql`query {
          contacts {
            idMeal,
            strMeal
          }
        }`,
      },
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
