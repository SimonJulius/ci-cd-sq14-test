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
exports.getUsersByAge = exports.createUser = void 0;
const User_1 = __importDefault(require("../model/User"));
const pipeline = [
    { $group: { _id: '$age', count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
];
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, age, stack } = req.body;
        const user = new User_1.default({ name, email, age, stack });
        yield user.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});
exports.createUser = createUser;
const getUsersByAge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.aggregate(pipeline);
        res.status(201).json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});
exports.getUsersByAge = getUsersByAge;
//# sourceMappingURL=UserController.js.map