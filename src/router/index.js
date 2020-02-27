import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Recipes from "@/components/Recipes";
import Recipe from "@/components/Recipe";
import Swip from "@/components/Swip";
import Cookbook from "@/components/Cookbook";
// import Signup from "@/components/auth/Signup";
// import Login from "@/components/auth/Login";
// import ViewProfile from "@/components/profile/ViewProfile";
// import firebase from "firebase";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/recipe",
      name: "Recipe",
      component: Recipe
    },
    {
      path: "/recipes/:mealId",
      name: "Recipes",
      component: Recipes,
      props: true
    },
    {
      path: "/swip",
      name: "Swip",
      component: Swip
    },
    {
      path: "/cookbook",
      name: "Cookboo",
      component: Cookbook
    }
  ]
});

// {
//   path: "/signup",
//   name: "Signup",
//   component: Signup
// },
// {
//   path: "/login",
//   name: "Login",
//   component: Login
// },
// {
//   path: "/profile/:id",
//   name: "ViewProfile",
//   component: ViewProfile,
//   meta: {
//     requiresAuth: true
//   }
// }
