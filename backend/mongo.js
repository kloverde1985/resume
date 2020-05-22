const {MongoClient} = require('mongodb');


const uri = 'mongodb+srv://kloverde:***REMOVED***@cluster0-w11ml.gcp.mongodb.net/resume?retryWrites=true&w=majority';

const mongoClient = new MongoClient(uri);

async function getMongoDB()
{
  try {
    const connection = await mongoClient.connect();
    return connection.db();
    // return connection;
  } catch (e) {
   console.log(e);
  }
}


module.exports =
  {
    getMongoDB
  };
