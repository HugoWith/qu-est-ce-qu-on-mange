<template>
  <div>
    <div v-for="(recipe, index) in recipes" v-bind:key="index">
      <div>
        <h1>Coucou</h1>
        <h3>{{ recipe.strMeal }}</h3>
        <ul class="ingredient"></ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Recipes",
  data() {
    return {
      recipes: [],
      loading: false
    };
  },
  methods: {
    getRecipes: function() {
      this.loading = true;
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => {
          console.log(response);
          this.loading = false;
          this.recipes = response.data.meals;
          this.recipe = `<li>${recipe.strIngredient1}</li>`;
          document
            .querySelector(".ingredients")
            .insertAdjacentHTML("beforeend", this.recipe);
        });
    }
  },
  beforeMount() {
    this.getRecipes();
  }
};
</script>
