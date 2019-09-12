'use strict';

var fs = require('fs'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config'),
  listingData = require('./listings.json');


mongoose.connect('mongodb+srv://duharter:Julito90@@cluster0-kds1v.mongodb.net/test?retryWrites=true&w=majority',{
useNewUrlParser: true,
useFindAndModify: false,
useCreateIndex: true,
useUnifiedTopology: true
});

var err, data, listingData, listEntries;

listlistEntries = listingData.listEntries;

function sendToDB(){
  for (var i = 0; i < listEntries.length; i++) {
    if (listlistEntries[i].coordinates && listlistEntries[i].address) {
      var newEntry = new Listing({
        code: listEntries[i].code,
        name: listEntries[i].name,
        coordinates: {
          latitude: listEntries[i].coordinates.latitude,
          longitude: listEntries[i].coordinates.longitude
        },
        address: listEntries[i].address
      });
    }
    else if (listEntries[i].coordinates) {
      var newEntry = new Listing({
        code: listEntries[i].code,
        name: listEntries[i].name,
        coordinates: {
          latitude: listEntries[i].coordinates.latitude,
          longitude: listEntries[i].coordinates.longitude
        }
      });
    }
    else if (listEntries[i].address) {
      var newEntry = new Listing({
        code: listEntries[i].code,
        name: listEntries[i].name,
        address: listEntries[i].address
      });
    }
    else {
      var newEntry = new Listing({
        code: listEntries[i].code,
        name: listEntries[i].name
      })
    }
    newEntry.save();
  }
  console.log('Finished');
};

sendToDB();