<template>
  <div class="container page">
    <div v-for="(recipe, index) in recipes" v-bind:key="index">
      <div>
        <div class="navbar">
          <div class="button-back">
            <router-link to="/">
              <i class="fas fa-long-arrow-alt-left"></i>
            </router-link>
          </div>
          <div class="button-back">
            <router-link to="/cookbook">
              <p>📙</p>
            </router-link>
          </div>
          <div class="button-back">
            <router-link :to="{ name: 'userAccount', params: { userId } }">👨‍🍳</router-link>
          </div>
        </div>
        <div class="borderImg">
          <img class="imgMeal" :src="recipe.strMealThumb" alt />
          <h1 class=".recipe-title">{{ recipe.strMeal.toUpperCase() }}</h1>
          <div class="guidelines">
            <h2 class=".guidelines-title">What you need 👇</h2>
          </div>

          <div class="cards-ing">
            <ul v-for="obj in list" v-bind:key="obj.ingredients" class="ingredients-list">
              <li>
                <strong>{{ obj.ingredients }}</strong>
                <br />
                <span class="measures-text">
                  <em>{{ obj.measures }}</em>
                </span>
              </li>
            </ul>
          </div>

          <div class="guidelines">
            <h2 class=".guidelines-title">What to do 👨‍🍳</h2>
          </div>
          <div class="instructions" v-if="isVisible">
            <p>{{ instruction }}</p>
            <hr />
          </div>
          <button class="button-instruction" v-on:click="isVisible = !isVisible">
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
    <form action @submit.prevent="addRecipe">
      <input type="submit" value="Add to my Cookbook 📙" class="button-like" />
    </form>
    <!-- <div :style="{ backgroundImage: `url('${bgimg}')` }" class="img-bg"></div> -->
  </div>
</template>

<script>
import axios from "axios";
// import recipe from "./Recipe";
import db from "@/db/init";
import firebase from "firebase";
// import firebase from "firebase";

export default {
  name: "Recipes",
  props: ["mealId"],
  data() {
    return {
      bgimg: "/bgimg.png",
      img: null,
      recipes: [],
      loading: false,
      ingredients: [],
      measures: [],
      filteredrecipe: [],
      title: null,
      instruction: null,
      id: this.mealId,
      type: null,
      user: null,
      isVisible: false
    };
  },
  methods: {
    addRecipe() {
      db.collection("cookbook")
        .add({
          id: this.id,
          title: this.title,
          ingredients: this.ingredients,
          measures: this.measures,
          instruction: this.instruction,
          img: this.img,
          type: this.type,
          user: this.user
        })
        .then(() => {
          this.$router.push({ name: "Cookboo" });
        });

      console.log(this.title);
    },

    getRecipes: function() {
      this.loading = true;

      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`
        )
        .then(response => {
          // console.log(response.data.meals);
          // console.log(response);
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
          this.title = response.data.meals[0].strMeal;
          this.img = response.data.meals[0].strMealThumb;
          this.type = response.data.meals[0].strArea;
        });
    }
  },
  mounted() {
    let user = firebase.auth().currentUser;
    console.log(user.uid);
    this.user = user.uid;
  },

  computed: {
    list() {
      let arr = this.ingredients.filter(Boolean);
      // console.log(arr);
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
  z-index: 1;
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
  font-size: 14px;
  list-style: none;
  text-align: center;
  margin: 5px 5px;
  color: black;
}

.ingredients-list {
  /* background-color: #fcfcfc; */
  /* border: 1px solid grey; */
  border-radius: 20px;
  background-color: white;
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
  font-size: 15px;

  line-height: 25px;
}

.img-bg-recipes {
  bottom: -80%;
  z-index: 2;
  position: absolute;
  right: 29%;
}
.button-recipes {
  background-image: linear-gradient(
    60deg,
    #27292d -80%,
    #f5cf66 98%,
    #fdcb5f 100%
  );
  border-radius: 100px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 12px 80px 12px 80px;
  color: #ffffff;
  z-index: 2;
  text-align: center;
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

.cards-ing {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.measures-text {
  font-size: 12px;
}

.button-instruction {
  width: 15%;
  height: 30px;
  margin-bottom: 10px;
  background-image: linear-gradient(
    73deg,
    #27292d -7%,
    #f5cf66 42%,
    #fdcb5f 22%
  );
  border-radius: 20px;
  border: 1px solid grey;
}
</style>
