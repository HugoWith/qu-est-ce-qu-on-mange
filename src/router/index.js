import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Recipes from "@/components/Recipes";
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
      path: "/recipes",
      name: "Recipes",
      component: Recipes
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
