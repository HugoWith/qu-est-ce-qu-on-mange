<template>
  <div class="container page">
    <h1>MY DETAILS</h1>
    <div class="avatar">
      <img src="../../assets/orange.jpg" alt="photo account" class="img-account" />
    </div>
    <div class="userInfos">
      <h2 v-if="name">{{ name }}</h2>
      <h2 v-if="surname">{{ surname }}</h2>
    </div>
    <div class="button-back">
      <router-link to="/cookbook">
        <i class="fas fa-long-arrow-alt-left"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "@/db/init";

export default {
  name: "userAccount",
  data() {
    return {
      name: null,
      surname: null,
      email: null
    };
  },
  created() {
    let user = db.collection("users");
    user.get().then(snapshot => {
      snapshot.forEach(el => {
        console.log(el.data());
        this.name = el.data().name;
        this.surname = el.data().surname;
        this.email = el.data().email;
      });
      console.log(this.email);
    });
  }
};
</script>

<style>
.img-account {
  width: 300px;
  height: 300px;
  border-radius: 50%;

  object-fit: cover;
}

.userInfos {
  color: black;
}
</style>