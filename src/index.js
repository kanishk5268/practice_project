const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const app = require('./app');

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("MongoDB connection failed !!!", err);
  });
