
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

export const UserSchema = new Schema({
  email:  String,
  first_name: String,
  last_name:   String,
  picture: String,
  roles: [String],
  permissions: [String],
  password: String
});

export const User = model('User', UserSchema);
