const exporess = require('exporess');
const app = express();

const PORT = process.env.PORT || 8081;

app.get('/', async (req, res) => {
  try {
    res.send('Hello, World');
  } catch (e) {
    res.status(404).send('Error: ' + e.message)
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});