<template>
  <div class="container">
    <h1 class="title-cookbook">COOKBOOK</h1>
    <form action class="form-cookbook">
      <label for>Looking for something ?</label>
      <input type="text" value="Apple" class="input-form" />
    </form>

    <div class="cards-cookbook" v-for="(recipe, index) in cookbooks" :key="index">
      <div class="card-recipe">
        <div class="img-cookbook">
          <router-link :to="{ name: 'Recipes', params: { mealId } }">
            <img class="img-cookbook2" :src="recipe.img" alt />
          </router-link>
        </div>
        <div class="text-cookbook">
          <h2>{{recipe.title }}</h2>
          <p>{{ recipe.type }}</p>
        </div>
      </div>
    </div>

    <!-- <div
      class="background-image"
      style="background-image: url(@/assets/path_2.png)"
    ></div>-->

    <img class="img-bg" src="@/assets/path_2.png" alt="background" />
  </div>
</template>


<script>
import db from "@/db/init";
export default {
  name: "Cookbook",
  data() {
    return {
      cookbooks: [],
      mealId: []
    };
  },
  created() {
    db.collection("cookbook")
      .get()
      .then(snapshot => {
        snapshot.forEach(el => {
          let recipe = el.data();
          console.log(this.mealId);
          // console.log(el.data());
          // console.log(recipe.id);

          // console.log(this.mealId);
          // let id = el.data().id;
          // console.log(recipe);
          // recipe.id = el.id;

          //   console.log(el.id);
          this.cookbooks.push(recipe);
        });
        this.cookbooks.forEach(recipes => {
          // this.mealId = this.$route.params.recipes.id;
          this.mealId = recipes.id;
          console.log(this.mealId);
        });
      });
  },
  methods: {
    getid() {}
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

.img-bg {
  width: 100%;
  height: 51%;
  position: relative;
  bottom: -115px;
  z-index: 1;
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
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #000000;
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