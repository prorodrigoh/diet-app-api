import { MongoClient } from "mongodb";

export const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  return client.db("diet-app");
};

export const getUserCollection = async () => {
  const db = await getDb();
  return db.collection("user");
};

export const getUserFoodCollection = async () => {
  const db = await getDb();
  return db.collection("user-food");
};
