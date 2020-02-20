<template>
  <div class="container">
    <div v-for="(recipe, index) in recipes" v-bind:key="index">
      <div>
        <div class="borderImg">
          <img class="imgMeal" :src="recipe.strMealThumb" alt />
        </div>
        <h1>{{ recipe.strMeal }}</h1>
      </div>
    </div>
    <div class="ingredients-list">
      <ul>
        <li v-for="(ingredient, index) in ingredients" :key="index">{{ingredient.ingredient}}</li>
      </ul>
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
      loading: false,
      ingredients: []
    };
  },
  methods: {
    getRecipes: function() {
      this.loading = true;

      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => {
          console.log(response.data.meals);
          console.log(response);
          this.loading = false;
          this.recipes = response.data.meals;
          this.ingredients.push(
            response.data.meals[0].strIngredient1 +
              response.data.meals[0].strIngredient2 +
              response.data.meals[0].strIngredient3 +
              response.data.meals[0].strIngredient4 +
              response.data.meals[0].strIngredient5 +
              response.data.meals[0].strIngredient6 +
              response.data.meals[0].strIngredient7 +
              response.data.meals[0].strIngredient8 +
              response.data.meals[0].strIngredient9 +
              response.data.meals[0].strIngredient10
          );
          // const html = `<li>${this.ingredients}</li>`;
          // document
          //   .querySelector(".ingredients-list")
          //   .insertAdjacentHTML("beforeend", html);
        });
    }
  },
  beforeMount() {
    this.getRecipes();
  }
};
</script>

<style>
.imgMeal {
  width: 100%;
  height: 20%;
  border-radius: 40px;
  padding: 20px 20px;
}

.borderImg {
  border: solid yellow 5px;
  margin: 10px 10px;
}
</style>
