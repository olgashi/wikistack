const router = require('express').Router();
const addPage = require('../views/addPage');

router.get('/', (req, res) => {
  res.send('we made it to GET WIKI');
});

router.post('/', (req, res) => {
  res.send('we got to POST WIKI');
});

router.get('/add', (req, res) => {
  //res.send(addPage());
  res.send(addPage());
})



module.exports = router;
