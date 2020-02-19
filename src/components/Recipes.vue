<template>
      <div id="container">
          <h1>Test</h1>
            <tr v-for='recipe in recipes' v-bind:key="recipe.idMeal">
              <td>{{ recipe.strMeal }}</td>
            </tr>
    </div>
</template>

<script>
export default {
  name: "Recipes",
  data() {
    return {};
  }
};
</script>
