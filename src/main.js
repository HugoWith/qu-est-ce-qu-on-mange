import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";


const httpLink = new HttpLink({
  uri: "http://localhost:5000/graphql"
});

// we use a usefull error handling tool provided by Apollo in order to execute some code when errors occur.
const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  // We log every GraphQL errors
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  // When a 401 error occur, we log-out the user.
  if (networkError) {
    if (networkError.statusCode === 401) {
      window.location.href = "/api/security/logout";
    }
  }
});

const apolloProvider = new ApolloClient({
  link: onErrorLink.concat(httpLink)
});

export default new VueApollo({
  defaultClient: apolloProvider
});

new Vue({
  router,
  render: h => h(App),
  apolloProvider,
}).$mount("#app");

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// wait for firebase auth to init before creating the app
