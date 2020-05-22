const {getMongoDB} = require('./mongo');

const resumes = 'resumes';

async function getAllResumes(){
  const mdg = await getMongoDB();
 return mdg.collection(resumes).find({}).toArray();

}

async function getResumes(id){
  const mdg = await getMongoDB();
  return mdg.collection(resumes).findOne({owners_pk:id});

}

async function getCollections()
{

  const mdg = await getMongoDB();
  return mdg.collections().toArray();
}


module.exports =
  {
     getAllResumes,
    getResumes,
    getCollections
  }
