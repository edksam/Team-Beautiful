const mongoose = require("mongoose");

const graduateSchema = new mongoose.Schema({
  graduate_ID: {
    type: mongoose.Schema.Types.Mixed,
  },
  fullname: {
    type: String,
    required: [true, "Full Name is required"],
  },
  headline: {
    type: String,
    required: [true, "We need this to make look good"],
  },
  current_location: {
    type: String,
    required: [true, "We need this to make you look good"],
  },
  languages: {
    type: String,
  },
  
  // Enumurated Type To Type
  full_time: {
    type: Boolean,
  },
  part_time: {
    type: Boolean,
  },
  contract: {
    type: Boolean,
  },
  temp: {
    type: Boolean,
  },
  willing_relocate: {
    type: Boolean,
  },
  willing_remote: {
    type: Boolean,
  },
  linkedin: {
    type: String,
  },
  website: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  upload_cv: {
    data: Buffer,
    contentType: String,
  },
  resume_textarea: {
    type: String,
    max: 200,
  },
});

module.exports = mongoose.model("Graduate", graduateSchema);
