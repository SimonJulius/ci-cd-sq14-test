const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/User').default
const {AuthService} = require('../services/auth.service')


jest.mock('bcrypt');
jest.mock('jsonwebtoken');
jest.mock('../model/User.ts')

describe('register', () => {
    
    it('should register a user and return a token and the user', async () => {
        const userInfo = {
            firstName: 'Test1',
            lastName: 'User1',
            email: 'test1user1@gmail.com',
            password: 'password',
        }

        const saltValue = '#$je4w87ejrgjwuy74854'

        jest.spyOn(bcrypt, 'genSalt').mockResolvedValue(saltValue)
        jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword')

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(userInfo.password, salt)

        const user = {
            _id: 'mockedUserId',
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            password: hashedPassword
        }

        User.findOne.mockResolvedValue(null)
        User.prototype.save.mockResolvedValue()


        jwt.sign.mockResolvedValue('secret')

        const expectedReturnedUser = {
            token: 'secret',
            user
        }

        const returnedUser = await AuthService.registerUser(userInfo)

        expect(User.findOne).toHaveBeenCalledWith({email: userInfo.email})
        expect(User.prototype.save).toBeCalled()
        expect(returnedUser).toEqual(expectedReturnedUser)
    })
})