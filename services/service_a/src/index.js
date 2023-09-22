import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
  console.log('hit /');
  try {
    const result = await axios({
      method: 'get',
      url: 'http://kube-api-service'
    });
    console.log('get result from api server: ', result.data);

    res.send({
      success: 'hit on service_a'
    });
  } catch (err) {
    console.log('err', err);
  }

});


app.listen(port, () => {
  console.log('app is running on ', port);
});