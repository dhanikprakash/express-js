const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send('users list');

});
router.route('/:id')
.get((req,res,logger)=>{
    res.send('Get the user with ID: '+req.params.id);
})
.put((req,res)=>{
    res.send('Get the user with ID: '+req.params.id);
})
.post((req,res)=>{
    res.send('Get the user with ID: '+req.params.id);
})
const users = [{name:'Dhanik'}, {name:'Prakash'}];
router.param('id',(req,res,next,id)=>{
  console.log(id);
  req.user = users[id].name;
  next();
});



module.exports = router;