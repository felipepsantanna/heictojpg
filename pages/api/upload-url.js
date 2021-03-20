import { Storage } from '@google-cloud/storage';

const bucketName = 'conversor_bucket';
const maxAgeSeconds = 3600;
const method = ['PUT','POST', 'GET'];
const origin = process.env.ORIGIN;
const responseHeader = 'application/json';

export default async function handler(req, res) {

    console.log(process.env.GCLOUD_CREDENTIALS)


     const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });

  console.log(storage);

    const bucket = storage.bucket(bucketName);
    const file = bucket.file(req.query.file);
    const options = {
        expires: Date.now() + 1 * 60 * 1000, //  1 minute,
        fields: { 'x-goog-meta-test': 'data' },
    };

    console.log(1);

    await storage.bucket(bucketName).setCorsConfiguration([
        {
            maxAgeSeconds,
            method: [method],
            origin: [origin],
            responseHeader: [responseHeader],
        },
    ]);

    const [response] = await file.generateSignedPostPolicyV4(options);
    res.status(200).json(response);
}