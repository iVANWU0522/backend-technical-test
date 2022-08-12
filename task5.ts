import * as dotenv from 'dotenv';
import { PutObjectCommand } from "@aws-sdk/client-s3";

import { s3Client } from './libs/s3-client';

export const task5 = async (csv: any): Promise<void> => {
	console.log(`This is task 5`);
    dotenv.config();
    console.log(`AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID}`);
    console.log(`AWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY}`);

    const uploadParams = {
    	Bucket: 'inquisitive-backend-developer-tests',
    	Key: 'Ivan-Wu.csv',
    	Body: csv,
    };

    try {
    	const data = await s3Client.send(new PutObjectCommand(uploadParams));
    	console.log('Success', data);
    } catch (error) {
    	console.log('Error', error);
    }
}