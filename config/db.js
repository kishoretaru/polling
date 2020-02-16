const mongoose = require('mongoose');


// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect('mongodb+srv://tkishore_11:kaushik123@cluster0-cibtx.gcp.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
