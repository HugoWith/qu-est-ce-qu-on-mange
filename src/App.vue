<template>
  <div id="app">
    <transition name="router-anim">
      <router-view />
    </transition>
  </div>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-anim-enter-active {
  animation: coming 0.8s;
  opacity: 0;
  animation-delay: 0.5;
}
.router-anim-leave-active {
  animation: going 0.8s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
