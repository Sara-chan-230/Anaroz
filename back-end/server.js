const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

const MONGODB_URI =
  "mongodb+srv://hibaelharda:3!-6avQEC6_Dmeb@cluster0.oyiqovf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log(" MongoDB Connected!"))
  .catch((err) => {
    console.error(" MongoDB Connection Error:", err);
    process.exit(1);
  });

app.use(express.json());

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => res.send("API en fonctionnement !"));

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
