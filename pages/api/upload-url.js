import { Storage } from '@google-cloud/storage';

const bucketName = 'conversor_bucket';
const maxAgeSeconds = 3600;
const method = ['PUT','POST', 'GET'];
const origin = 'http://heictojpg.com.br/';
const responseHeader = 'application/json';

export default async function handler(req, res) {

    const credential = JSON.parse(
  Buffer.from(process.env.GCLOUD_CREDENTIALS, "base64").toString()
);


     const storage = new Storage({
       projectId: 'natural-bison-308114',
    credentials: {
    client_email: credential.client_email,
    private_key: credential.private_key,
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