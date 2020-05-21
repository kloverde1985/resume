const {getMongoDB} = require('./mongo');

const owners = 'owners';

async function getAllOwners(){
  const mdg = await getMongoDB();
 return mdg.collection(owners).find({}).toArray();

}

async function getOwners(id){
  const mdg = await getMongoDB();
  return mdg.collection(owners).find({owners_pk:id}).toArray();

}
module.exports =
  {
    getAllOwners,
    getOwners
  }
