const router = require('express').Router();
const addPage = require('../views/addPage');
const {Page} = require("../models");

console.log('page: ', Page)

router.get('/add', (req, res) => {
  //res.send(addPage());
  res.send(addPage());
})

router.get('/', (req, res) => {
  res.redirect('/');
});

router.post('/', async (req, res, next) => {
  // res.json(req.body);
  console.log(req.body.title);
  

  // const page = new Page({
  //   title: req.body.title,
  //   content: req.body.content
  // })

  // console.log(page);

  try {

    await model.Page.create({title: req.body.title,
    content: req.body.content})
    // await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});






module.exports = router;
