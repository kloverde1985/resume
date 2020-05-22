const express = require('express');
const pool = require('./mysql_config');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const {getResumes,getAllResumes,getCollections} = require ('./resume');
app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));



var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get('/resumes',async (req,res) => {
  let id =req.query.id;
  if(!id)
  {
    res.send(await getAllResumes()) ;
  } else
  {
    res.send(await getResumes(id));
  }

});

app.get('/collections',async (req,res) =>
{
  res.send(await getCollections());
})


app.listen(port,() => console.log('Listening at http://localhost:${port}'))
