import CloudConvert from 'cloudconvert';
import { Storage } from '@google-cloud/storage';

const bucketName = 'conversor_bucket';
const cloudConvert = new CloudConvert('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGQ4N2Q3NjA4MzQxNjk4ZDdjNGE1Yjg2MDAxNDk4YmRjNmRjYmI0YjVjZGRlZDk4NjY3YjU0ZTc2NmIyMmVjMDJlNmE5OGJjZGUxZmEwNTQiLCJpYXQiOiIxNjE2MDY0NjY4LjEzNTc1OSIsIm5iZiI6IjE2MTYwNjQ2NjguMTM1NzYxIiwiZXhwIjoiNDc3MTczODI2OC4wNzcxNjciLCJzdWIiOiI0OTczODA0MyIsInNjb3BlcyI6WyJwcmVzZXQud3JpdGUiLCJwcmVzZXQucmVhZCIsIndlYmhvb2sud3JpdGUiLCJ3ZWJob29rLnJlYWQiLCJ0YXNrLndyaXRlIiwidGFzay5yZWFkIiwidXNlci53cml0ZSIsInVzZXIucmVhZCJdfQ.hmF_q9NDE70iJGoXtlFvUnxQRSZSvEwRWjlpNUpFUTJ_Ss02wJ5OcxfXNd5T53wTM43c2b-AztaQhcLbQRZIRh1saZ_adh5xGnp9zQaemnUPDF_AJQ-WEI87VoG2_ZRoAziAT-4zHaiMpbqShXyL3ycXgrmVgLTX-8sV594itTiQEJ1lS25YszVnJFOzPEkWPNIiFfSZHzQM-ik6OYPO4nzHYjxjs6ptPRfW2QTORMrMky0nCo_00UCGYh4HZAZQN2lnk73GSovGipRXrzHeQWvnTAslHChYrQayafTcVLqBeTh0QeNyCjTnWnv2zjToPBzEAygp12p038NJ27ebung5m_5xqmW5q0rATtmZQXJZg04eHl5XWMnFqEM43B405aP-TvDxpoMqpsLl3iMbCwK3I44HOYxRpc2VYPDMdfbeDlK7ZtgsfbxqSQU2oTWOStOPxxykL24n-Cl6q8OEYXHxiNv2obAUN2Qo9KU1JTQ_sgzcHdHtl-9-Zdah2iPxSlHGVXFYm4TB4fL8S5BGANC5q4VI359lmeEhRP93_odsn1-MMuOZ6iNZCnwxy3BsVYq716t9qAxx2Zx3gDBWVNnJgr1a5WbcJw4vh3aLLEUzlVW_Pu6qP7FeVq5Hk7dyxFBijq5Uoc4vlrDf-1IDh3zT10Pv4hIFIq55nWOBMuU');

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