import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Document } from "mongoose"
import User, { UserModel } from '../model/User'
import dotenv from "dotenv"

dotenv.config()

const saltRound = 10;

const secreteKey = process.env.PASSWORD_SECRETE_KEY

interface UserInfo {
    firstName: string
    lastName: string
    email: string
    password: string
}

interface UserInterface {
    token?: string 
    user: Document<unknown, {}, UserModel>
}

export class AuthService {
    static async registerUser(userInfo: UserInfo): Promise<UserInterface> {
        const salt = await bcrypt.genSalt(saltRound)
        const hashedPassword = await bcrypt.hash(userInfo.password, salt)
        const {firstName, lastName, email} = userInfo

        const userExist = await User.findOne({email})
        console.log("user exist ",userExist)
        if(!!userExist) {
            throw new Error('A user with this email already exist')
        }

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        await user.save();

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY as string)

        const returnedUser = {
            token,
            user
        }

        return returnedUser
    }
}