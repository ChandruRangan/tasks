const mongoose = require('mongoose');

// // Connect URL
// const url = 'mongodb://127.0.0.1:27017/csv';

// // Connect to MongoDB
// (async () => {
//     try {
//         await mongoose.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//         });
//         console.log(`MongoDB Connected: ${url}`);
//     } catch (err) {
//         console.error(err);
//     }
// })();

mongoose.connect('mongodb://localhost:27017/csv',
  {
    useNewUrlParser: true,
    //  useFindAndModify: false,
    //  useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
module.exports=mongo;