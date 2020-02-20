<template>
  <div class="container">
    <div v-for="(recipe, index) in recipes" v-bind:key="index">
      <div>
        <div class="borderImg">
          <img class="imgMeal" :src="recipe.strMealThumb" alt />
        </div>
        <h1 class=".recipe-title">{{ recipe.strMeal }}</h1>
      </div>
    </div>

    <div>
      <ul v-for="obj in list" v-bind:key="obj.ingredients" class="ingredients-list">
        <li>{{obj.ingredients}} - {{obj.measures}}</li>
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
      ingredients: [],
      measures: [],
      filteredrecipe: []
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

          this.ingredients.push(response.data.meals[0].strIngredient1);
          this.ingredients.push(response.data.meals[0].strIngredient2);
          this.ingredients.push(response.data.meals[0].strIngredient3);
          this.ingredients.push(response.data.meals[0].strIngredient4);
          this.ingredients.push(response.data.meals[0].strIngredient5);
          this.ingredients.push(response.data.meals[0].strIngredient6);
          this.ingredients.push(response.data.meals[0].strIngredient7);
          this.ingredients.push(response.data.meals[0].strIngredient8);
          this.ingredients.push(response.data.meals[0].strIngredient9);
          this.ingredients.push(response.data.meals[0].strIngredient10);

          this.measures.push(response.data.meals[0].strMeasure1);
          this.measures.push(response.data.meals[0].strMeasure2);
          this.measures.push(response.data.meals[0].strMeasure3);
          this.measures.push(response.data.meals[0].strMeasure4);
          this.measures.push(response.data.meals[0].strMeasure5);
          this.measures.push(response.data.meals[0].strMeasure6);
          this.measures.push(response.data.meals[0].strMeasure7);
          this.measures.push(response.data.meals[0].strMeasure8);
          this.measures.push(response.data.meals[0].strMeasure9);
          this.measures.push(response.data.meals[0].strMeasure10);
        });
    }
  },

  computed: {
    list() {
      let arr = this.ingredients.filter(Boolean);
      console.log(arr);
      return arr.map((itm, i) => {
        return { ingredients: itm, measures: this.measures[i] };
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
  border-radius: 50%;
  padding: 20px 20px;
}

.borderImg {
  border: solid yellow 5px;
  margin: 10px 10px;
}

.recipe-title {
  margin: 15px 5px 15px 5px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 16px;
}

.ingredients-list li {
  list-style: none;
  text-align: left;
  margin-left: 20px;
  margin-top: 10px;
}
</style>







