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
      ingredients: [{ ingredient: "Foo" }, { ingredient: "Bar" }]
    };
  },
  methods: {
    getRecipes: function() {
      this.loading = true;

      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => {
          console.log(response.data.meals);
          this.loading = false;
          this.recipes = response.data.meals;
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
