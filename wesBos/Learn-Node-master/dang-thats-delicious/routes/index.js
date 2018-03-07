const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = {name:'WEs', age:100, cool:true};
  // res.send('Hey! It works!');
  // res.json(wes);
  // res.send(req.query.name);
  res.render('hello')
});

router.get('/reverse/:name',(req, res)=>{
  res.send('req.params.name');
});

module.exports = router;
