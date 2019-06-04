const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT =3000;
 const app= express();

 app.use(bodyParser.json());
  app.use(cors());

  app.get('/', function(req, res) {
res.send('Hello from Server');
  })
app.listen(PORT, function(){
    console.log("Sever running on localhost:" + PORT);
    app.get('/', function(req, res) {
        res.status(200)({"message": "Data recieved"});
          })
})

app.listen(PORT, function(){
    

    });