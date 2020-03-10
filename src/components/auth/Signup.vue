<template>
  <div class="signup container page">
    <form @submit.prevent="signup" class="card-panel">
      <h1 class="title-sign">CONNEXION</h1>
      <div class="field">
        <label class="label-signup" for="name">Name:</label>
        <input class="input-signup" type="text" name="name" v-model="name" />
      </div>
      <div class="field">
        <label class="label-signup" for="surname">Surname:</label>
        <input class="input-signup" type="text" surname="surname" v-model="surname" />
      </div>
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
    <div :style="{ backgroundImage: `url('${bgimg}')` }" class="img-bg"></div>
  </div>
</template>

<script>
import db from "@/db/init";
import firebase from "firebase";

export default {
  name: "Signup",

  data() {
    return {
      email: null,
      password: null,
      name: null,
      surname: null,
      feedback: null,
      bgimg: "/bgimg.png"
    };
  },
  methods: {
    signup() {
      if (this.name && this.surname && this.email && this.password) {
        let ref = db.collection("users").doc(this.email);
        ref.get().then(doc => {
          console.log(doc);
          if (doc.exists) {
            this.feedback = "Cet email existe déjà 🥺";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                console.log(cred);
                ref.set({
                  name: this.name,
                  surname: this.surname,
                  email: this.email,
                  user_id: cred.user.uid
                });
              })
              .then(() => {
                this.$router.push({ name: "Home" });
              })
              .catch(err => {
                console.log(err);
                this.feedback = err.message;
              });
            this.feedback = "Cool ton compte est créé 🍾";
          }
        });
      } else {
        this.feedback = "Tu dois remplir les cases pour te connecter 🚓";
      }
    }
  }
};
</script>



<style>
.input-signup {
  border: 1px solid #c7e591;
  border-radius: 20px;
  width: 100%;
  padding: 5px;
  font-size: 20px;
  color: black;
  margin: 5px auto;
}
.label-signup {
  font-family: "Open sans";
  font-weight: bold;
  font-size: 20px;
  color: black;
  text-align: start;
}

.field {
  display: flex;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}

.field-button {
  margin-top: 30px;
}

.title-sign {
  margin-bottom: 40px;
  font-weight: bolder;
}
</style>