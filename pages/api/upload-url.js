import { Storage } from '@google-cloud/storage';

const bucketName = 'conversor_bucket';
const maxAgeSeconds = 3600;
const method = ['PUT','POST', 'GET'];
const origin = 'https://heictojpg.com.br/';
const responseHeader = 'application/json';

export default async function handler(req, res) {
    const storage = new Storage({
        keyFilename: './natural-bison-308114-315290460e89.json',
        projectId: 'natural-bison-308114'
    });

    const bucket = storage.bucket(bucketName);
    const file = bucket.file(req.query.file);
    const options = {
        expires: Date.now() + 1 * 60 * 1000, //  1 minute,
        fields: { 'x-goog-meta-test': 'data' },
    };



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