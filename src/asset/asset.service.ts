import { Asset } from './asset.schema';
import bcrypt from 'bcrypt';

export const find = async (data: any): Promise<any> => await Asset.findOne({ ...data });

export const findAll = async (): Promise<any> => await Asset.find();

export const create = async ({}: any): Promise<any> => {
    // upc: String,
    // ean: String,
    // type: String,
    // release_title: String,
    // song_title: String,
    // artUrl: String,
    // fileUrl: String,
    // metadata: {
    //   artist: [ String ],
    //   songwriter: [ String ],
    //   label: [ String ],
    //   lyrics: String
    // },
    // rights: [ String ]

    // let userExist = await User.findOne({ email });
    // const hash = await bcrypt.hash(password, 10);
    // const newUser = new User({ email, first_name, last_name, picture, password: hash });

    // return await newUser.save();
};

// export const update = async (updatedItem: Item): Promise<void> => {...};

// export const remove = async (id: number): Promise<void> => {
//   const record: Item = items[id];

//   if (record) {
//     delete items[id];
//     return;
//   }

//   throw new Error("No record found to delete");
// };
