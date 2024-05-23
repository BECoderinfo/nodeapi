require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 7000;

const products_routes = require("./routes/products");

app.get("/",(req,res) => {
    res.send("hi ,i am live");
});
app.use(express.json());
app.use("/api",products_routes);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT,() => {
            console.log(`We are connected to the port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();