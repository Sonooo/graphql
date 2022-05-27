const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { resolvers } = require("./resolvers");
const { schema } = require("./schema");



const app = express()

app.get("/", (req, res) => {
    res.send(" server is up and running")
});

const root = resolvers
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

const port = process.env.PORT || 8082;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`
    );
}
);