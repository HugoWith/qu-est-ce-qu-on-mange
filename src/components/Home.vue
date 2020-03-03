<template>
  <div class="container">
    <div class="no-idea">
      <p>pas d'idée</p>
    </div>
    <div class="home-title1">
      <h1>QU'EST</h1>
    </div>
    <div class="home-title2">
      <h1>CE</h1>
    </div>
    <div class="home-title3">
      <h1 class="h1-light">QU'ON</h1>
    </div>
    <div class="onMange">
      <div class="home-title4">
        <h1>MANGE</h1>
      </div>
      <div class="home-title5">
        <h1>?</h1>
      </div>
    </div>
    <div class="img-bg-home">
      <a class="button-home" href="#">
        ON MANGE ?
        <i class="fas fa-long-arrow-alt-right"></i>
      </a>
    </div>
    <div class="button-home-border">
      <a href="#" class></a>
    </div>

    <!-- <div
      class="background-image"
      style="background-image: url(@/assets/path_2.png)"
    ></div>-->
    <div :style="{ backgroundImage: `url('${bgimg}')` }" class="img-bg"></div>
    <!-- <img class="img-bg" src="@/assets/path_2.png" alt="background" /> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bgimg: "/bgimg.png"
    };
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

a {
  text-decoration: none;
}

h1 {
  color: black;
}
.container {
  margin: 0 auto;
  max-width: 414px;
  height: 100vh;
  border: 1px solid black;
}

.no-idea {
  width: 45%;
  margin-top: 20px;
}

.no-idea p {
  color: #fdcb5f;
}

.button-home {
  background-image: linear-gradient(
    73deg,
    #27292d 0%,
    #f5cf66 74%,
    #fdcb5f 98%
  );
  border-radius: 100px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 15px 90px 15px 50px;
  color: #ffffff;
  z-index: 2;
}

.button-home-border {
  bottom: 55px;
  position: absolute;
  width: 70%;
  height: 8%;
  right: -27px;
  z-index: 3;
  border: 1px solid #000000;
  border-radius: 100px;
}

.fa-arrow {
  color: black;
}

.img-bg {
  width: 125%;
  height: 100%;
  position: fixed;
  background: no-repeat;
  z-index: 3;
}

.img-bg-home {
  bottom: 60px;
  z-index: 2;
  position: absolute;
  right: -15px;
}

.home-title1 {
  font-weight: 900;
  font-size: 25px;
  display: flex;
  justify-content: start;
  margin-left: 0.7em;
  margin-top: 1em;
}
.home-title1 h1 {
  font-weight: 900;
  line-height: 21px;
}

.home-title2 {
  font-size: 25px;
  display: flex;
  justify-content: center;
}
.home-title2 h1 {
  font-weight: 900;
}

.home-title3 {
  font-size: 25px;
  display: flex;
  justify-content: start;
  margin-left: 4em;
}
.home-title3 h1 {
  font-weight: 100;
  line-height: 15px;
}

.home-title4 {
  font-size: 25px;
  display: flex;
  justify-content: center;
  margin-left: 4.7em;
}

.home-title4 h1 {
  font-weight: 900;
}

.home-title5 h1 {
  font-weight: 100;
  font-size: 50px;
}

.onMange {
  display: flex;
  justify-content: center;
}
</style>
