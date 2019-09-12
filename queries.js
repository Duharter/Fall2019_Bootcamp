var fs = require('fs'),
  mongoose = require('mongoose'),
  Listing = require('./ListingSchema.js'),
  config = require('./config');


mongoose.connect('mongodb+srv://duharter:Julito90@@cluster0-kds1v.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
var findLibraryWest = function () {

  Listing.find({ name: "Library West" }, function (err, obj) {
    if (err)
      throw err;
    else
      console.log(obj[1]);
  });
};
var removeCable = function () {

  Listing.findOneAndRemove({ code: "CABL" }, function (err, obj) {
    if(err) throw err;
    else
    console.log(obj);
  });
};
var updatePhelpsMemorial = function () {

  Listing.findOneAndUpdate({ name: "Phelps Laboratory"}, {address: "100 Phelps Lab P.O. Box 116350 Gainesville, FL  32611"}, {'new': true}, function(err,obj){
    if(err) throw err;
    else
    console.log(obj);
  });
};
var retrieveAllListings = function () {

  Listing.find({}, function (err, obj) {
    if(err)
    console.error(err);
    else
    console.log(obj); //accidently posted multiple entries into database. Around 500 will print.
  })
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();