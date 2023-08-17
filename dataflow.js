// Imports the Google Cloud client library

const {TemplatesServiceClient} = require('@google-cloud/dataflow');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'
// TODO(developer): replace with your bucket path.
// const gcsPath = 'gs://<bucket>/path'

// Creates a client
const client = new TemplatesServiceClient();

//TODO(library generator): write the actual function you will be testing
async function getTemplate() {
  const template = await client.getTemplate({
    projectId : 'jnu-idv-07',
    gcsPath : 'gs://jnu-idv-07/',
  });
  console.info(template);
}
getTemplate();

