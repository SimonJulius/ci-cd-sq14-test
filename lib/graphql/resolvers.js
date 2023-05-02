"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const auth_service_1 = require("../services/auth.service");
exports.resolvers = {
    //   Query: {
    //     user: (_: unknown, { id }: { id: string }) => getUserById(id),
    //     users: () => getUsers(),
    //   },
    Mutation: {
        registerUser: (_, { email, password, firstName, lastName }) => auth_service_1.AuthService.registerUser({
            email, password,
            firstName,
            lastName
        })
    }
};
//# sourceMappingURL=resolvers.js.map