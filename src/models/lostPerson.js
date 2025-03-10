import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String, 
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  description: {
    type: String, 
  },
  image: {
    type: String,
    required: true,
  },
  lastSeenLocation: {
    type: String,
    required: true,
  },
  
  status: { 
    type: String,
    required: true, 
    enum: ['missing', 'found'],
  },
  contactInfo: {
    type: String,
    required: true,
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },

  lostOrFoundDate: {
    type: Date,
    default: Date.now,
  }
});

export const LostPerson = mongoose.model('LostPerson', schema);