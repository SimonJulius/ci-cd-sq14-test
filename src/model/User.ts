import mongoose, {Document} from 'mongoose'

export interface UserModel extends Document {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}


const userSchema = new mongoose.Schema<UserModel>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String}
})

const User = mongoose.model<UserModel>('User', userSchema)


export default User