var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.listen(process.env.PORT);

var dbUrl = 'mongodb+srv://ontheway:ontheway@node-qlelv.gcp.mongodb.net/test?retryWrites=true&w=majority'

var Message = mongoose.model('Message',{
    name: String,
    message: String
})

var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Jane', message: 'Hello'}
]

app.get('/messages', (req, res) =>{
    Message.find({},(err,messages)=>{
        res.send(messages)
    })
    
})

app.post('/messages', (req, res) =>{
    var message = new Message(req.body)

    message.save((err)=>{
        if(err)
            sendStatus(500)
            io.emit('message', req.body)
            res.sendStatus(200)
    })

})

io.on('connection', (socket) => {
    console.log('a user connected')
})

mongoose.connect(dbUrl,{ useNewUrlParser: true },(err)=>{
    console.log('mongo db connection', err)
})

//test
app.get('/', (req, res) => {
    res.send('run test on travis');
  });

var server = http.listen(3000, () => {
    console.log('App running on port', server.address().port)
})


