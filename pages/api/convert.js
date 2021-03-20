import CloudConvert from 'cloudconvert';
import { Storage } from '@google-cloud/storage';

const bucketName = process.env.BUCKET_NAME;
const cloudConvert = new CloudConvert(process.env.CLOUD_CONVERT);

export default async function handler(req, res) {

    let job = await cloudConvert.jobs.create({
        tasks: {
            'import-my-file': {
                operation: 'import/url',
                url: req.query.file
            },
            'convert-my-file': {
                operation: 'convert',
                input: 'import-my-file',
                output_format: 'jpg',
                some_other_option: 'value'
            },
            'export-my-file': {
                operation: 'export/url',
                input: 'convert-my-file'
            }
        }
    });

    job = await cloudConvert.jobs.wait(job.id); // Wait for job completion

    const exportTask = job.tasks.filter(
        task => task.operation === 'export/url' && task.status === 'finished'
    )[0];
    const file = exportTask.result.files[0];
  
    res.status(200).json(file);
}