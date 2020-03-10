<template>
  <div class="signup container page">
    <form @submit.prevent="login" class="card-panel">
      <h1 class="title-sign">CONNEXION</h1>
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
    <div class="field-button center">
      <router-link to="/signup" class="button-signup">Doesn't have an account yet 👉</router-link>
    </div>
    <div :style="{ backgroundImage: `url('${bgimg}')` }" class="img-bg"></div>
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
      feedback: null,
      bgimg: "/bgimg.png"
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

<style>
.card-panel {
  margin-top: 50%;
  z-index: auto;
}

.button-signup {
  border: 1px solid #c7e591;
  border-radius: 100px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 10px;
  padding: 12px 80px 12px 80px;
  color: #000000;
}
</style>