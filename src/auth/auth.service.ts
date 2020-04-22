import { User } from './auth.schema';
import bcrypt from 'bcrypt';

export const find = async (data: any): Promise<any> => await User.findOne({ ...data });

export const findAll = async (): Promise<any> => await User.find();

export const create = async ({ email, first_name, last_name, picture, password }: any): Promise<any> => {
    let userExist = await User.findOne({ email });
    if(userExist) {
        throw new Error('email already exist');
    } else {
        const hash = await bcrypt.hash(password, 10);
        const newUser = new User({ email, first_name, last_name, picture, password: hash });

        return await newUser.save();
    }
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
