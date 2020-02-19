import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";
import { createHttpLink } from "apollo-link-http";

Vue.use(VueApollo);

// All the graphql requests will be made at yourdomaine.com/graphql
const httpLink = createHttpLink({ uri: "http://localhost:5000/graphql" });

// We give this to the graphql client
const apolloClient = new ApolloClient({
  link: httpLink
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);


new Vue({
  router,
  render: h => h(App),
  apolloProvider
}).$mount("#app");

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// wait for firebase auth to init before creating the app
