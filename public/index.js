const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors({
  origin: '*',
}));

// We use express to define our various API endpoints and
// provide their handlers that we implemented in routes.js
app.get('/', routes.coins);

app.listen(8080, () => {
      console.log('server listening on port 8080')
});

module.exports = app;