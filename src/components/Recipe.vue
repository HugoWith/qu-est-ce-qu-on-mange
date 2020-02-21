<template>
  <div class="container-recipe">
    <div class="button-back">
      <a href="/" class>
        <i class="fas fa-long-arrow-alt-left"></i>
      </a>
    </div>
    <div v-for="(recipe, index) in recipes" v-bind:key="index">
      <div class="cadre">
        <div class="photo">
          <img class="imgRecipe" :src="recipe.strMealThumb" alt />
        </div>
        <div class="title">
          <h3>{{ recipe.strMeal.toUpperCase() }}</h3>
          <h4>{{ recipe.strArea }}-{{ recipe.strCategory }}</h4>
        </div>
      </div>
    </div>
    <div class="button-swipe">
      <a href class="btn-nope">
        <i class="fas fa-times"></i>
      </a>
      <a href class="btn-recipe">
        <i class="fas fa-book"></i>
      </a>
      <a href class="btn-yes">
        <i class="fas fa-heart"></i>
      </a>
    </div>
    <div class="background">
      <img class="img-bg-recipe" src="@/assets/path_2.png" alt="background" />
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
:root {
  --primaryColor: #fdcb5f;
  --mainRed: #ff8c8c;
  --offWhite: #f7f7f7;
  --mainBlack: #000000;
  --secondRed: #fe5068;
  --mainGreen: #c7e591;
  --mainBlue: #3ca4ff;
}
a {
  text-decoration: none;
  color: var(--mainGreen);
}
/* .container-recipe {
  margin: 0 auto;
  width: 414px;
  height: 100vh;
  border: 1px solid black;
} */
.img-bg-recipe {
  width: 100%;
  height: 48%;
  position: absolute;
  bottom: -399px;
  left: 0px;
  z-index: 10;
}
.button-back {
  margin: 30px 30px 30px 30px;
  border: 1px solid #fdcb5f;
  border-radius: 100px;
  z-index: 2;
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
.cadre {
  background-color: var(--primaryColor);
  width: 23em;
  height: 33em;
  margin: 0 auto;
  border-radius: 20px;
}
.photo {
  background-color: var(--offWhite);
  width: 21em;
  height: 22em;
  margin: 1em 4%;
  padding-top: 1em;
  position: absolute;
  border-radius: 10px;
}
.title {
  position: absolute;
  background-color: var(--offWhite);
  padding-top: 10px;
  margin: 26em 4%;
  width: 21em;
  height: 4.5em;
  border-radius: 1em;
  text-align: start;
}

.title h3 {
  margin-bottom: 8px;
  margin-left: 1.7em;
  font-size: 14px;
}
.title h4 {
  margin-bottom: 8px;
  margin-left: 1.7em;
  font-size: 14px;
}
.imgRecipe {
  width: 90%;
  height: 94%;
  border-radius: 10px;
}

.button-swipe {
  display: flex;
  justify-content: space-around;
  z-index: 1;
}

.button-swipe a {
  font-size: 40px;
  color: white;
  text-align: center;
  border-radius: 50%;
  margin-top: 1.5em;
  height: 80px;
  width: 80px;
  z-index: 1;
}

.button-swipe i {
  margin-top: 21px;
}

.btn-yes {
  background-color: var(--mainGreen);
}
.btn-nope {
  background-color: var(--mainRed);
}
.btn-recipe {
  background-color: var(--mainBlue);
}
.background {
  z-index: 3;
}
</style>
