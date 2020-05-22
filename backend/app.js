const express = require('express');
const pool = require('./mysql_config');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const {getAllOwners,getResumes,getCollections} = require ('./resume');
app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));





app.get('/resumes',async (req,res) => {
  let id =req.query.id;
  if(!id)
  {
    res.send(await getAllOwners()) ;
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
