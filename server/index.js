const express = require ('express');
const app = express();

const cors = require ('cors');
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sleep-write');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  // let user = new User({username:'hahaha',email:'lalala'});
  // user.save();
  console.log('success');
});

app.get('/',function(req,res){
  res.send('Hello World\n')
});


app.listen(3000,function(){
  console.log('running on port 3000 ...');
});
