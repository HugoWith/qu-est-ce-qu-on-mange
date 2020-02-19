const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const path = require("path");
const app = express();
const axios = require("axios");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// axios
//   .get("https://www.themealdb.com/api/json/v1/1/random.php")
//   .then(function (response) {
//     // handle success
//     console.log(response.data.meals);
//   });

// http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
