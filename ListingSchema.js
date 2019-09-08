var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var listingSchema = new Schema({
  code:{
    type: String,
    required: true,
    unique: true,
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
  created_at: Date,
  updated_at: Date,
});


listingSchema.pre('save', function(next) {
  if(!this.created_at || !this.updated_at){ 
    this.created_at = this.updated_at = Date.now();
  }
  else{
    this.updated_at = Date.now();
  }
  next();
});
var Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;