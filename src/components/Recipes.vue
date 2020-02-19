<template>
    <ul v-if="roles">
        <li v-for="recipe of recipes" v-bind:key=recipe.idMeal>
            {{ recipe.strMeal }}
        </li>
    </ul>
</template>

<script>
// Do you remember the 'yarn add graphql-tag'? :p
import gql from 'graphql-tag'

export default {
    apollo: {
        // Simple query that will update the 'roles' vue property
        recipes: gql`query allRecipes {
            recipe {
                idMeal,
                strMeal
            }
        }`
    },
}
</script>
