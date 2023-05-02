import User from "../model/User"
import {AuthService} from '../services/auth.service';

export const resolvers = {
//   Query: {
//     user: (_: unknown, { id }: { id: string }) => getUserById(id),
//     users: () => getUsers(),
//   },
  Mutation: {
    registerUser: (_: unknown, { email, password, firstName, lastName }: { email: string; password: string, firstName: string, lastName: string }) =>
      AuthService.registerUser({
          email, password,
          firstName,
          lastName
      })
}
}