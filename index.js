import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import userRouter from "./routes/user.js";
import advertRouter from "./routes/adverts.js";

const app = express();

const PORT = process.env.PORT || 4500;

await mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected'))
.catch( err => console.log('error'))

app.use(cors());

// Body parser
app.use(express.json());

app.use('/api',userRouter);
app.use("/api", advertRouter);

// App listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});