<template>
  <div class="container page">
    <!-- <button @click="add">Add card</button>
    <button @click="remove">Remove card</button>
    <button @click="swing">Swing card</button>-->
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
    <!-- <div class="cadre2"></div> -->

    <vue-swing
      @throwout="onThrowout"
      :config="config"
      ref="vueswing"
      v-if="isVisible"
      @throwoutright="throwoutright"
    >
      <transition name="animated-card">
        <div v-for="(recipe, index) in recipes" v-bind:key="index" v-show="showRemove">
          <transition name="animated-right">
            <div class="cadre" v-if="showAdd">
              <div class="photo">
                <img class="imgRecipe" :src="recipe.strMealThumb" alt />
              </div>
              <div class="title">
                <h3>{{ recipe.strMeal.toUpperCase() }}</h3>
                <h4>{{ recipe.strArea }}-{{ recipe.strCategory }}</h4>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </vue-swing>

    <div class="card2 fixed">
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
    </div>

    <div class="button-swipe">
      <a href class="btn-nope" @click.prevent="remove">
        <i class="fas fa-times"></i>
      </a>

      <router-link :to="{ name: 'Recipes', params: { mealId } }" class="btn-recipe">
        <i class="fas fa-book"></i>
      </router-link>
      <form @submit.prevent="addRecipe">
        <button class="btn-yes">
          <i class="fas fa-heart" id="fa-heart"></i>
        </button>
      </form>
    </div>

    <!-- <div :style="{ backgroundImage: `url('${bgimg}')` }" class="img-bg"></div> -->
  </div>
</template>

<script>
import axios from "axios";
import VueSwing from "vue-swing";
import db from "@/db/init";
import firebase from "firebase";

export default {
  name: "Recipes",
  components: { VueSwing },

  data() {
    return {
      bgimg: "/bgimg.png",
      showRemove: true,
      showAdd: true,
      id: null,
      isVisible: true,
      userId: null,
      index: 0,
      recipes: [],
      ingredients: [],
      measures: [],
      filteredrecipe: [],
      img: null,
      loading: false,
      title: null,
      instruction: null,
      type: null,
      user: null,

      throwoutright: VueSwing.Direction.RIGHT,

      config: {
        allowedDirections: [
          // VueSwing.Direction.UP,
          // VueSwing.Direction.DOWN,
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT
        ],
        minThrowOutDistance: 100,
        maxThrowOutDistance: 350,
        isThrowOut: function(xOffset, yOffset, element, throwOutConfidence) {
          return throwOutConfidence > 0.6;
        }
      }
    };
  },

  methods: {
    addRecipe() {
      db.collection("cookbook")
        .add({
          id: this.mealId,
          title: this.title,
          ingredients: this.ingredients,
          measures: this.measures,
          instruction: this.instruction,
          img: this.img,
          type: this.type,
          user: this.user
        })
        .then(() => {
          this.add();
        });
      console.log("coucou");
    },

    getRecipes: function() {
      this.loading = true;
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
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

          // this.mealId.push(response.data.meals[0].idMeal);
          this.mealId = response.data.meals[0].idMeal;
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
          // console.log(this.mealId);

          console.log(this.recipes);
        });
    },

    add() {
      this.getRecipes();
      this.showAdd = false;
      setTimeout(() => (this.showAdd = true), 500, this.getRecipes());
    },
    remove() {
      this.getRecipes();
      this.showRemove = false;
      setTimeout(() => (this.showRemove = true), 500, this.getRecipes());
    },

    onThrowout({ throwDirection }) {
      console.log(throwDirection);
      setTimeout(() => (this.isVisible = false), 100);
      setTimeout(() => {
        this.isVisible = true;
        if (throwDirection == this.throwoutright) {
          console.log("if");
          this.addRecipe();
        } else {
          console.log("else");
          this.remove();
        }
      }, 100);

      // console.log(`Threw out ${target.textContent}!`);
      // console.log(this.recipes);
    }
  },

  computed: {
    list() {
      let arr = this.ingredients.filter(Boolean);
      // console.log(arr);
      return arr.map((itm, i) => {
        return { ingredients: itm, measures: this.measures[i] };
      });
    },
    current() {
      return this.recipes[this.index];
    }
  },

  mounted() {
    let user = firebase.auth().currentUser;
    console.log(user.uid);
    this.user = user.uid;
    // this.userId = user.uid;
  },

  beforeMount() {
    this.getRecipes();
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";

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

.navbar {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}

.avatar-small {
  margin: 30px 30px 30px 30px;
  font-size: 30px;
  height: 50px;
  width: 50px;
  border: 1px solid #fdcb5f;
  border-radius: 50%;
}

.button-back {
  margin: 30px 30px 30px 30px;
  border: 1px solid #fdcb5f;
  border-radius: 100px;
  z-index: 2;
  width: 25%;
  padding: 4px;
}

.button-back i {
  text-decoration: none;
  color: #c7e591;
  margin-left: 15px;
  font-size: 30px;
}
.cadre {
  position: relative;
  background-color: var(--primaryColor);
  width: 23em;
  height: 22em;
  margin: -5px auto;
  border-radius: 20px;
  z-index: 1;
}

.cadre2 {
  position: relative;
  z-index: 1;
  background-color: #c7e591;
  width: 22em;
  height: 32em;
  margin: 0 auto;
  top: 16%;
  left: 2%;
  border-radius: 20px;
}
.photo {
  background-color: var(--offWhite);
  width: 21em;
  height: 19em;
  margin: 1em 4%;
  padding-top: 1em;
  position: absolute;
  border-radius: 10px;
}
.title {
  position: absolute;
  background-color: var(--offWhite);
  padding-top: 10px;
  margin: 21em 4%;
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
  width: 83%;
  height: 93%;
  border-radius: 10px;
}

.button-swipe {
  display: flex;
  justify-content: space-around;
  z-index: 1;
  transform: translate(0%, -220%);
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
  border: none;
  font-size: 40px;
  color: white;
  text-align: center;
  border-radius: 50%;
  margin-top: 1.5em;
  height: 80px;
  width: 80px;
  z-index: 1;
}

#fa-heart {
  margin-top: 10px;
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

.card2 {
  z-index: 1;
}

.fixed {
  position: relative;
  transform: translate(0%, -98%) rotate(8deg);
  margin-bottom: 0px;
  z-index: -10;
}

.animated-card-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.animated-card-leave-to {
  transform: translateX(-100px) rotateZ(-90deg);
  opacity: 0;
}

.animated-card-leave {
  transform: translateX(0px) rotateZ(0deg);
  opacity: 1;
}

.animated-right-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.animated-right-leave-to {
  transform: translateX(100px) rotateZ(90deg);
  opacity: 0;
}

.animated-right-leave {
  transform: translateX(0px) rotateZ(0deg);
  opacity: 1;
}
</style>
