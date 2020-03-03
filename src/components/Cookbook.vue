<template>
  <div class="container">
    <h1 class="title-cookbook">COOKBOOK</h1>
    <h2 v-if="feedback">{{ feedback}}</h2>
    <form action class="form-cookbook">
      <label for>Looking for something ?</label>
      <input type="text" value="Apple" class="input-form" />
    </form>

    <div class="cards-cookbook" v-for="(recipe, index) in cookbooks" :key="index">
      <div class="card-recipe">
        <div class="img-cookbook">
          <router-link :to="{ name: 'Recipes', params: { mealId: recipe.id } }">
            <img class="img-cookbook2" :src="recipe.img" alt />
          </router-link>
        </div>
        <div class="text-cookbook">
          <!-- <i @click="deleteRecipe" class="fas fa-times"></i> -->
          <h2>{{recipe.title }}</h2>
          <p>{{ recipe.type }}</p>
        </div>
      </div>
    </div>

    <!-- <div
      class="background-image"
      style="background-image: url(@/assets/path_2.png)"
    ></div>-->

    <div :style="{ backgroundImage: `url('${bgimg}')` }" class="img-bg"></div>
  </div>
</template>


<script>
import db from "@/db/init";
import firebase from "firebase";

export default {
  name: "Cookbook",
  data() {
    return {
      bgimg: "/bgimg.png",
      cookbooks: [],
      feedback: null
    };
  },
  methods: {
    deleteRecipe() {
      console.log("coucou");
      db.collection("cookbook")
        .get()
        .then(snapshot => {
          snapshot.forEach(el => {
            let recipe = el.data();
            console.log(recipe);
            recipe.delete();
          });
        });
    }
  },
  created() {
    //get current user

    db.collection("cookbook")
      .get()
      .then(snapshot => {
        snapshot.forEach(el => {
          let recipe = el.data();
          // console.log(recipe);
          // console.log(this.mealId);
          if (recipe.user == firebase.auth().currentUser.uid) {
            this.cookbooks.push(recipe);
          } else {
            null;
          }
        });
        // this.cookbooks.forEach(recipes => {
        //   // this.mealId = this.$route.params.recipes.id;
        //   this.mealId = recipes.id;
        //   console.log(this.mealId);
        // });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

h1 {
  color: black;
}
.container {
  margin: 0 auto;
  width: 414px;
  height: 100vh;
  border: 1px solid black;
}

.img-bg-home {
  bottom: 60px;
  z-index: 2;
  position: absolute;
  right: -15px;
}

.card-recipe {
  width: 90%;
  margin: 0 auto;
  background: #fdcb5f;
  box-shadow: 1px 3px 15px rgb(34, 33, 33, 0.6);
  border-radius: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #000000;
  z-index: 1;
  display: flex;
}

.text-cookbook {
  margin-top: 10px;
  margin-left: 20px;
  text-align: left;
}

.cards-cookbook {
  margin-top: 30px;
}

.title-cookbook {
  margin-top: 30px;
}

.form-cookbook {
  margin-top: 30px;
}

.input-form {
  border: 1px solid #c7e591;
  border-radius: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #a19a9a;
  width: 60%;
  margin: 0 auto;
  padding: 5px;
}

.img-cookbook2 {
  width: 80px;
  height: 80px;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: 5px;
  margin-bottom: 5px;
  margin: 5px 20px 5px 10px;
}
</style>