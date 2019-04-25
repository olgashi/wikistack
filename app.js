const express = require('express');
const morgan = require('morgan');
const bodyParser  = require('body-parser');
const { db, Page, User } = require('./models');
const userRouter = require('./routes/user');
const wikiRouter = require('./routes/wiki');
const PORT = 3000;


db.authenticate().
then(() => {
  console.log('connected to the database');
});

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('./wiki', wikiRouter);
app.use('./user', userRouter);


app.use('/', require('./router'));
const init = async () => {
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
}

init();


