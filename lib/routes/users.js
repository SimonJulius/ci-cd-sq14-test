"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controller/UserController");
const router = express_1.default.Router();
/* GET users listing. */
router.post('/create-user', UserController_1.createUser);
router.get('/user-by-age', UserController_1.getUsersByAge);
exports.default = router;
//# sourceMappingURL=users.js.map