const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://phibux:5KFQ119VNkMSNea2@cluster0.tf17i3g.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql',graphqlHTTP.graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,() => {
    console.log('listening requests on port 4000')
});