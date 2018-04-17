var express = require('express');
var router = express.Router();

let todoList = [
  {
    id: 0,
    todo: "Learn Express",
    done: true
  },
  {
    id:1,
    todo: "Learn Express Generator",
    done: false
  }
];

router.get('/', function(req, res, next) {
  res.send(todoList);
});
router.get('/todo/:id', function(req, res, next) {
  res.send(todoList);
});

module.exports = router;
