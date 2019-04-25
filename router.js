const router = require('express').Router();
const layout = require('./views/layout.js');

module.exports = router;

router.get('/', async(req, res) => {
  try {
    res.send(layout(''));
  }
  catch (error){
    res.send(error);
  }
})

