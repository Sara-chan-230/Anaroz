import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(
      "mongodb+srv://salamasara949:JsO5RFl04Vg2aaIR@anraozcluster.jzitrar.mongodb.net/?retryWrites=true&w=majority&appName=AnraozCluster"
    );
    console.log("MongoDB connecté avec succès !");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error);
    process.exit(1);
  }
};

export default connectDB;
