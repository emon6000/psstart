const app = require('./app');
const config = require('./config/config');

const port = config.app.port || 4000;



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
