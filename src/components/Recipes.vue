<template>
  <div id="container">
      <div class="wrapper">
          <div class="row">
            <div v-for="(recipe, index) in recipes" v-bind:key="index">
              <div>
                <h3>{{ recipe.strArea }}</h3>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Recipes',
  data () {
    return {
      recipes: [],
      loading: false
    }
  },
  methods: {
    getRecipes: function () {
      this.loading = true;
      axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response)  =>  {
        console.log(response);
        this.loading = false;
        this.recipes = response.data
        })
    }
  },
   beforeMount(){
    this.getRecipes()
 },
}
</script>
