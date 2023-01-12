const mongoose = require("mongoose");

const uri =
  "mongodb://root:rootpassword@localhost:27017/?authMechanism=DEFAULT";

const connectDb = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to Database"));
};

module.exports = connectDb;
