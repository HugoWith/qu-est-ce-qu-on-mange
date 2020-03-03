<template>
  <div class="signup container">
    <form @submit.prevent="login" class="card-panel">
      <h1 class>CONNEXION</h1>
      <div class="field">
        <label class="label-signup" for="email">Email:</label>
        <input class="input-signup" type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label class="label-signup" for="password">Password:</label>
        <input class="input-signup" type="password" name="password" v-model="password" />
      </div>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="field-button center">
        <button class="button-recipes">Let's go 👉</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signin",

  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({ name: "Home" });
          })
          .catch(err => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = "C'est mieux de remplir les champs 🎻";
      }
    }
  }
};
</script>