const connectDb = require("./db/connect");
const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/task");

//  middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`server running at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
