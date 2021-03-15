import Formidable from "formidable-serverless";
import fs from "fs";

export const config = {
  api: {
    sizeLimit: '3mb',
    bodyParser: false,
  },
};

export default function uploadFormFiles(req, res) {
  return new Promise(async (resolve, reject) => {
    const form = new Formidable.IncomingForm({
      multiples: true,
      keepExtensions: true,
    });
    let fileName = '';
    form
      .on("file", (name, file) => {
        const data = fs.readFileSync(file.path);
        fileName = `public/uploads/${file.name}`;
        fs.writeFileSync(fileName, data);
        fs.unlinkSync(file.path);
      })
      .on("aborted", () => {
        reject(res.status(500).send({ error: 'Aborted' }))
      })
      .on("end", () => {
        resolve(res.status(200).send({ url: fileName }));
      });

    await form.parse(req)
  });
}