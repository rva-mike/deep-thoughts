const mongoose = require('mongoose');

                                                                     //directory name
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/deep-thoughts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
