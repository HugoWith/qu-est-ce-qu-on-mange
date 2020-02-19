<template>
  <div class="recipes">
    <p>test</p>
    <ul v-if="roles">
      <li v-for="recipe of recipes" v-bind:key="recipe.idMeal">
        {{ recipe.strMeal }}
      </li>
    </ul>
  </div>
</template>
<script>
// Do you remember the 'yarn add graphql-tag'? :import gql from 'graphql-tag'
import gql from "graphql-tag";

export default {
  name: "Recipes",
  data() {
    return {};
  },
  apollo: {
    // Simple query that will update the 'roles' vue property
    recipes: gql`
      query allRecipes {
        recipe {
          idMeal
          strMeal
        }
      }
    `
  }
};
</script>
