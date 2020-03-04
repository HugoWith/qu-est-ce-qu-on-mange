import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Recipes from "@/components/Recipes";
import Recipe from "@/components/Recipe";
import Swip from "@/components/Swip";
import Cookbook from "@/components/Cookbook";
import Signup from "@/components/auth/Signup";
import Signin from "@/components/auth/Signin";
import userAccount from "@/components/profile/userAccount";
// import firebase from "firebase";
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
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/recipes/:mealId",
      name: "Recipes",
      component: Recipes,
      props: true
      // meta: {
      //   requiresAuth: true
      // }
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
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/profile/:userId",
      name: "userAccount",
      component: userAccount
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   // check to see if route require Auth
//   if (to.matched.some(rec => rec.meta.requiresAuth)) {
//     //check if user auth
//     let user = firebase.auth().currentUser;
//     if (user) {
//       next();
//     } else {
//       next({ name: "Signin" });
//     }
//   } else {
//     next();
//   }
// });

// export default router;
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
