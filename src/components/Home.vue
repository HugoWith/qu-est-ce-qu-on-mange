<template>
  <div class="container">
    <div class="no-idea">
      <p>pas d'idée</p>
    </div>
    <div class="home-title1">
      <h1>QU'EST</h1>
    </div>
    <div class="home-title1">
      <h1>CE</h1>
    </div>
    <div class="home-title1">
      <h1 class="h1-light">QU'ON</h1>
    </div>
    <div class="home-title1">
      <h1>MANGE ?</h1>
    </div>
    <div class="img-bg-home">
      <a class="button-home" href="#">On mange ?</a>
      <img src="@/assets/path_2.png" alt="background" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  width: 414px;
  height: 100vh;
  border: 1px solid black;
}

.button-home {
  background-image: linear-gradient(
    73deg,
    #27292d 0%,
    #f5cf66 74%,
    #fdcb5f 98%
  );
  border-radius: 100px;
  font-family: Gotham-Black;
  font-size: 16px;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 34.5px;
  background: #ffffff;
  background: #ffffff;
}
</style>
