<template>
          <div>
            <div v-for="(recipe, index) in recipes" v-bind:key="index">
              <div>
                <h1>Coucou</h1>
                <h3>{{ recipe.strMeal }}</h3>
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
        this.recipes = response.data.meals
        })
    }
  },
   beforeMount(){
    this.getRecipes()
 },
}
</script>
