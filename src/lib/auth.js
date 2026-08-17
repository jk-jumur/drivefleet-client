
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { betterAuth } from "better-auth";

const client = new MongoClient("mongodb://localhost:27017/database");
const db = client.db("drivefleet");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    
    client
  }),
});