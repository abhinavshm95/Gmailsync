const mongoose = require('mongoose');
const app = require('./app');
const path = require("path")
// const logger = require('./config/logger');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../.env') });

let server;
mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
    console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
