import mongoose from "mongoose";

const connectionString = process.env.MongoDb || "mongodb://localhost/mydb1";

export default async () => {
  try {
    mongoose.set("strictQuery", false);
    const dbConnection = await mongoose.connect(connectionString);
    return dbConnection;
  } catch (error) {
    console.log(error);
  }
};
