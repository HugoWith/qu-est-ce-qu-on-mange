<template>
  <div class="container-recipe">
    <div class="btn-back">
      <a href="/"><font-awesome-icon icon="user-secret" /></a>
    </div>
    <div v-for="(recipe, index) in recipes" v-bind:key="index">
      <div class="cadre">
        <div class="photo">
          <img class="imgRecipe" :src="recipe.strMealThumb" alt />
        </div>
        <div class="title">
            <h3>{{recipe.strMeal}}</h3>
            <h4>{{recipe.strArea}}-{{recipe.strCategory}}</h4>
        </div>
      </div>
    </div>
    <img class="img-bg-recipe" src="@/assets/path_2.png" alt="background"/>
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

        return { ingredients: itm, measures: this.measures[i] }
      })

    }
  },

  beforeMount() {
    this.getRecipes();
  }
};
</script>

<style>
:root {
  --primaryColor: #FDCB5F;
  --mainRed: #FF8C8C;
  --offWhite: #f7f7f7;
  --mainBlack: #000000;
  --secondRed: #FE5068;
  --mainGreen: #C7E591;
  --mainBlue: #3CA4FF;
}
a{
  text-decoration: none;
  color: var(--mainGreen);
}
.container-recipe{
  margin: 0 auto;
  width: 414px;
  height: 100vh;
  border: 1px solid black;
}
.img-bg-recipe{
  width: 100%;
  height: 48%;
  position: relative;
  z-index: 1;
}
.btn-back {
  text-decoration: none;
  display: flex;
  justify-content: start;
  border: var(--primaryColor) solid 1px;
  color: var(--mainGreen);
  width: 20vw;
}
.cadre{
  background-color: var(--primaryColor);
  width:23em;
  height: 30em;
  margin: 0 auto;
  border-radius: 20px;
}
.photo{
    background-color: var(--offWhite);
    width: 19em;
    height: 19em;
    margin: 1em 2.3em;
    padding-top: 1em;
    position: absolute;
    border-radius: 2em
}
.title{
  position:absolute;
  background-color: var(--offWhite);
  margin-top: 21em;
    margin-left: 2.2em;
    width: 19em;
    height: 4em;
    border-radius: 1em;
    text-align: start;
}
.title h3,
.title h4{
  margin-left: 0.5em;
}
.imgRecipe{
  width: 17em;
  height: 17em;
  border-radius: 3em;

}
</style>
