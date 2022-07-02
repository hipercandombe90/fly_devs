import mongoose from "mongoose";
import config from "./config.mjs";

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL);
    console.log(" Database is connected to:", db.connection.name);
    // funcion auto invocada
  } catch (error) {
    console.error(error);
  }
})();
