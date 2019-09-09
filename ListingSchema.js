var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var listingSchema = new Schema({
  code:{
    type: String,
    required: true,
  },
  name:{
    type: String,
    requried:true,
  },
  coordinate:{
    latitude: Number,  
    longitude: Number,
  },
  address: String,
  updated_at: Date,
  created_at: Date
});


listingSchema.pre('save', function(next) {

  var currentDate = new Date();

  this.updated_at = currentDate;
  if(!this.created_at)
    this.created_at = currentDate;

    if(typeof code!= String){
      throw err;
    }
    else if(typeof name!= String){
      throw err;
    }
    else
  next();
});

var Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;