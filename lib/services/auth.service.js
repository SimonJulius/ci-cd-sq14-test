"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../model/User"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const saltRound = 10;
const secreteKey = process.env.PASSWORD_SECRETE_KEY;
class AuthService {
    static registerUser(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(saltRound);
            const hashedPassword = yield bcrypt_1.default.hash(userInfo.password, salt);
            const { firstName, lastName, email } = userInfo;
            const userExist = yield User_1.default.findOne({ email });
            console.log("user exist ", userExist);
            if (!!userExist) {
                throw new Error('A user with this email already exist');
            }
            const user = new User_1.default({
                firstName,
                lastName,
                email,
                password: hashedPassword
            });
            yield user.save();
            const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
            const returnedUser = {
                token,
                user
            };
            return returnedUser;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map