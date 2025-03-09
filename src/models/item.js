import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  category: { 
    type: String,
    required: true,
    enum: ['lost', 'found'],
  },
  status: { 
    type: String,
    // required: true, 
    enum: ['pending', 'claimed', 'returned'],
    default: 'pending',
  },
  location: {
    type: String,
    required: true,
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

export const Item = mongoose.model('Item', schema);