import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import userRouter from "./routes/user.js";
import vendorRouter from "./routes/vendor.js";

const app = express();

const PORT = process.env.PORT || 4100;

await mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected'))
.catch( err => console.log('error'))

app.use(cors());

// Body parser
app.use(express.json());

app.use('/api/v1',userRouter);
app.use("/api/v1", vendorRouter);

// App listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
