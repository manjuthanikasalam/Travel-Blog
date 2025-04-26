const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://manju:manju1013@manju.nlsyjda.mongodb.net/?retryWrites=true&w=majority&appName=Manju', {



  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


module.exports = mongoose.connection; 

 