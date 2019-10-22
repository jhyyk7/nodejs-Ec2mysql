var express = require('express')
var router = express.Router();
var path = require('path')




  router.get('/', function (request, response){
   
    
    
    response.sendfile(path.join('public','./weather/weather1.html'))

  })

  module.exports=router;