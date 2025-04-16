import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/news_point"
    );
    console.log("Mongodb Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
