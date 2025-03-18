import express from "express";
import mongoose from "mongoose";
import cors from "cors"

const app = express();

const PORT = process.env.PORT || 4100;

await mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected'))
.catch(err => console.log('error'))


app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
