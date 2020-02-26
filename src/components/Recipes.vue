<template>
  <div class="container-recipes">
    <div v-for="(recipe, index) in recipes" v-bind:key="index">
      <div>
        <div class="button-back">
          <router-link to="/recipe">
            <i class="fas fa-long-arrow-alt-left"></i>
          </router-link>
        </div>
        <div class="borderImg">
          <img class="imgMeal" :src="recipe.strMealThumb" alt />
          <h1 class=".recipe-title">{{ recipe.strMeal.toUpperCase() }}</h1>
          <div class="guidelines">
            <h2 class=".guidelines-title">Ce dont tu as besoin 👇</h2>
          </div>
          <div>
            <ul v-for="obj in list" v-bind:key="obj.ingredients" class="ingredients-list">
              <li>{{obj.ingredients}} - {{obj.measures}}</li>
            </ul>
          </div>
          <div class="guidelines">
            <h2 class=".guidelines-title">Ce que tu dois faire 👨‍🍳</h2>
          </div>
          <div class="instructions">
            <p>{{instruction}}</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <a class="button-like" href="#">♥️</a>
  </div>
</template>

<script>
import axios from "axios";
// import recipe from "./Recipe";

export default {
  name: "Recipes",
  props: ["mealId"],
  data() {
    return {
      recipes: [],
      loading: false,
      ingredients: [],
      measures: [],
      filteredrecipe: [],
      instruction: null
    };
  },
  methods: {
    getRecipes: function() {
      this.loading = true;

      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`
        )
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

          this.instruction = response.data.meals[0].strInstructions;
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
.container-recipes {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  border: 1px solid black;
}
.imgMeal {
  width: 90%;
  height: 20%;
  margin: 10px 10px 10px 10px;
  border-radius: 50%;
  border: 30px solid white;
}

.borderImg {
  background-color: #fdcb5f;
  border-radius: 10px;
  margin: 10px 10px;
}

.borderImg h1 {
  color: black;
  margin: 15px 5px 15px 5px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 30px;
}

.guidelines {
  color: black;
  margin: 15px 5px 15px 5px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 14px;
}

.ingredients-list li {
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  list-style: none;
  text-align: left;
  margin-left: 20px;
  margin-top: 10px;
}

.button-back {
  margin: 30px 30px 30px 30px;
  border: 1px solid #fdcb5f;
  border-radius: 100px;
  z-index: 1;
  width: 25%;
}

.button-back i {
  text-decoration: none;
  color: #c7e591;
  position: relative;
  left: -20px;
  margin-left: 10px;
  font-size: 40px;
}

.instructions {
  padding-bottom: 15px;
  color: black;
  margin: 15px 5px 30px 5px;
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  font-size: 10px;
  line-height: 15px;
}

.img-bg-recipes {
  bottom: -80%;
  z-index: 2;
  position: absolute;
  right: 29%;
}
.button-recipes {
  background-image: linear-gradient(
    73deg,
    #27292d 0%,
    #f5cf66 74%,
    #fdcb5f 98%
  );
  border-radius: 100px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 15px 90px 15px 50px;
  color: #ffffff;
  z-index: 2;
}
.button-like {
  background-image: linear-gradient(
    73deg,
    #27292d 0%,
    #f5cf66 74%,
    #fdcb5f 98%
  );
  border-radius: 100px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 40px 10px 40px;
  color: #ffffff;
  z-index: 2;
  text-align: center;
  align-items: center;
}
</style>







