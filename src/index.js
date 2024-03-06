const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at prot:${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("MongoDB connection failed !!!", err);
  });
