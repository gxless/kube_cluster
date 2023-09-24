import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  console.log('hit /');
  res.send({
    success: 'hit on api service'
  });
});


app.listen(port, () => {
  console.log('app is running on ', port);
});