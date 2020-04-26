import mongoose from 'mongoose';
const { Schema, model } = mongoose;

export const AssetSchema = new Schema({
  upc: String,
  ean: String,
  type: String,
  release_title: String,
  song_title: String,
  artUrl: String,
  fileUrl: String,
  metadata: {
    artist: [ String ],
    songwriter: [ String ],
    label: [ String ],
    lyrics: String
  },
  rights: [ String ]
});

export const Asset = model('Asset', AssetSchema);
