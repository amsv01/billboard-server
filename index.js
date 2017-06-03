'use strict';

const
  express = require('express'),
  graphqlHTTP = require('express-graphql'),
  app = express(),
  compression = require('compression'),
  {buildSchema} = require('graphql');

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
};

app.use(compression({
  filter: shouldCompress
}));
//app.use(express.bodyParser());
//app.use(express.methodOverride());


var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => 'Hello world!'
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(app.get('port'), () => {
  console.log(`Server start listening on ${app.get('port')}`)
});