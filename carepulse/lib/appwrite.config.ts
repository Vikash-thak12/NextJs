// "use client"
import * as sdk from 'node-appwrite'
import dotenv from 'dotenv';

dotenv.config();

export const {
NEXT_PUBLIC_PROJECT_ID: PROJECT_ID,
NEXT_PUBLIC_API_KEY: API_KEY,
DATABASE_ID,
PATIENT_COLLECTION_ID,
DOCTOR_COLLECTION_ID,
APPOINTMENT_COLLECTION_ID,
NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;



const client = new sdk.Client();

// Ensure all required environment variables are defined
// if (!PROJECT_ID || !API_KEY || !ENDPOINT) {
//     throw new Error("Please define PROJECT_ID, API_KEY, and ENDPOINT environment variables");
// }

console.log("PROject ID",PROJECT_ID);
console.log("API KEY",API_KEY);
console.log("ENDPOINT",ENDPOINT);


client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);


export const databases = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const messaging = new sdk.Messaging(client)
export const users = new sdk.Users(client)
