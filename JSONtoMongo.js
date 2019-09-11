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

var err, data, listingData, entries;

entries = listingData.entries;

function sendData(){
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].coordinates && entries[i].address) {
      var newEntry = new Listing({
        code: entries[i].code,
        name: entries[i].name,
        coordinates: {
          latitude: entries[i].coordinates.latitude,
          longitude: entries[i].coordinates.longitude
        },
        address: entries[i].address
      });
    }
    else if (entries[i].coordinates) {
      var newEntry = new Listing({
        code: entries[i].code,
        name: entries[i].name,
        coordinates: {
          latitude: entries[i].coordinates.latitude,
          longitude: entries[i].coordinates.longitude
        }
      });
    }
    else if (entries[i].address) {
      var newEntry = new Listing({
        code: entries[i].code,
        name: entries[i].name,
        address: entries[i].address
      });
    }
    else {
      var newEntry = new Listing({
        code: entries[i].code,
        name: entries[i].name
      })
    }
    newEntry.save();
  }
  console.log('Finished');
};

sendData();