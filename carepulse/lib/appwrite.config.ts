"use client"
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

// import * as sdk from 'node-appwrite';

// Load environment variables
// export const {
//     PROJECT_ID,
//     API_KEY,
//     DATABASE_ID,
//     PATIENT_COLLECTION_ID,
//     DOCTOR_COLLECTION_ID,
//     APPOINTMENT_COLLECTION_ID,
//     NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
//     NEXT_PUBLIC_ENDPOINT: ENDPOINT,
// } = process.env;


// const PROJECT_ID = "66a6422e001513a88aeb"
// const API_KEY = "0dc9f45065dea933535f79cbb17f683eb8842ab48b1cb79e626bfee724b74f93a7cb6ac13cc695abdebb1dc963147d19041813d706f519f54cf37c724a6d54c1bf477441874dac4158de8c24a7235359199f49e858f2f464d1f6ba75a385f72b5738a91c3a475d14f90b8c9a5463ad9262e0e693a6543c177e3ab991084ef355",
// const DATABASE_ID = "66a642c6003543cbc2f7",
// const PATIENT_COLLECTION_ID = "66a642ef0030217f6bf5",
// const DOCTOR_COLLECTION_ID = "66a643080030d7bf5cd9",
// const APPOINTMENT_COLLECTION_ID = "66a64331002ced71ac12",
// const NEXT_PUBLIC_BUCKET_ID = "66a64362002cebb994c2",
// const ENDPOINT = "https://cloud.appwrite.io/v1"

// Ensure all required environment variables are defined
// if (!PROJECT_ID || !API_KEY || !ENDPOINT) {
//     throw new Error("Please define PROJECT_ID, API_KEY, and ENDPOINT environment variables");
// }

// Initialize Appwrite client
// const client = new sdk.Client();

// client
//     .setEndpoint(ENDPOINT!)
//     .setProject(PROJECT_ID!)
//     .setKey(API_KEY!);

// client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66a6422e001513a88aeb").setKey("0dc9f45065dea933535f79cbb17f683eb8842ab48b1cb79e626bfee724b74f93a7cb6ac13cc695abdebb1dc963147d19041813d706f519f54cf37c724a6d54c1bf477441874dac4158de8c24a7235359199f49e858f2f464d1f6ba75a385f72b5738a91c3a475d14f90b8c9a5463ad9262e0e693a6543c177e3ab991084ef355");

// export const databases = new sdk.Databases(client);
// export const storage = new sdk.Storage(client);
// export const messaging = new sdk.Messaging(client);
// export const users = new sdk.Users(client);
