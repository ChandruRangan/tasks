const app = require('./src/app');

const port = 5007;

app.listen(port, () => {
  console.log('Application hosting on', port);
});