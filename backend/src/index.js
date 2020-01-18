const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');
const http = require('http');
const { setupWebsoket } = require('./websocket');

const app = express();
const server = http.Server(app);
setupWebsoket(server);

mongoose.connect('mongodb+srv://jose:jlss29101996@cluster0-eynwp.mongodb.net/omniweek?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json()); //usado para ler json.
app.use(routes);

server.listen(3333);