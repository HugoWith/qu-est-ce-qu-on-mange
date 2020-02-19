import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const apolloClient = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  apolloProvider,
}).$mount("#app");

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// wait for firebase auth to init before creating the app
