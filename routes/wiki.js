const router = require('express').Router();
const {Page} = require("../models");
const wikipage = require('../views/wikipage')


const addPage = require('../views/addPage');
router.get('/add', (req, res) => {
  res.send(addPage());
})


router.get('/:slug',async  (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });

    res.send(wikipage(req.body));

  } catch (error) {
    next(error) }

  });

router.get('/', (req, res) => {
  res.redirect('/');
});

router.post('/', async (req, res, next) => {
  try {
    await Page.create({title: req.body.title,
    content: req.body.content})
    console.log(req.body)
    res.redirect(`/wiki/:${res.body.slug}`);
  } catch (error) { next(error) }
  
});


module.exports = router;
