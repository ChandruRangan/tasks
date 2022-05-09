const app = require('./index');
const port = 9000;
app.listen(port, () => {
  console.log('Application hosting on', port);
});