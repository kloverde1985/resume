const {getMongoDB} = require('./mongo');

const resumes = 'resumes';

async function getAllResumes(){
  const mdg = await getMongoDB();
 return mdg.collection(resumes).find({}).toArray();

}

async function getResumes(id){
  const mdg = await getMongoDB();
  return mdg.collection(resumes).find({owners_pk:id}).toArray();

}

async function getCollections()
{

  const mdg = await getMongoDB();
  return mdg.collections().toArray();
}


module.exports =
  {
    getAllOwners: getAllResumes,
    getResumes,
    getCollections
  }
