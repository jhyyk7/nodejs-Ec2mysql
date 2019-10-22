var express = require('express');
var app = express();
var cors = require('cors')
var helmet = require ('helmet')
var path = require('path')
var fetch=require('node-fetch')

var bodyParser = require ('body-parser');
var compression = require ('compression');
var template = require ('./lib/template');

var indexRouter = require('./routes/index')
var topicRouter = require('./routes/topic')
var authorRouter = require('./routes/author')
var weatherRouter = require('./routes/weather')

// var whitelist = ['http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?serviceKey=e0%2BAk2r1HN6uoNO9EdA1Q0tcRJ5G4xLhNOVRDKL5aFgnu2L0%2BypiHgaZ0CjPctzJF%2BtjWNX5cIOMUVWRe7pvQA%3D%3D&base_date=20191007&base_time=0500&nx=60&ny=127&numOfRows=10&pageNo=1&_type=jsonr', 'http://helo.kma.go.kr']
// var corsOptions = {

//   origin: function(origin, callback){

//   var isWhitelisted = whitelist.indexOf(origin) !== -1;

//   callback(null, isWhitelisted); 

//   // callback expects two parameters: error and options 

//   },

//   credentials:true

// }

// app.set('port', 8080);
app.use(cors());
app.post('*', bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());
app.get('*', template.infoTopic);
app.use(express.static('public'));
app.use('*',template.infoAuthor);
// app.use( cors(corsOptions) );  
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



app.use('/', indexRouter)
app.use('/topic', topicRouter)
app.use('/author', authorRouter)
app.use('/weather',weatherRouter);

app.get('/testweather',function(request, response){
  
  response.sendfile(path.join('weather1.html'))
})



app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
  });
app.use(function(err, req, res, next) { //TODO: 아직 미완성 , 여러개의 에러처리 만들기
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// app.listen(app.get('port'));
app.listen(3000);