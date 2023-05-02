import express from 'express'
import User, {UserModel} from '../model/User'
import { PipelineStage } from 'mongoose'


const pipeline: PipelineStage[] = [
    {$group: {_id: '$age', count: {$sum: 1}}},
    {$sort: {_id: 1}}
]

export const createUser = async(req: express.Request, res: express.Response): Promise<void> => {
    try {        
        const {name, email, age, stack} = req.body
        const user: UserModel = new User({name, email, age, stack})
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({error: "Server Error"})
    }
}

export const getUsersByAge = async(req: express.Request, res: express.Response) => {
    try {
        const users = await User.aggregate(pipeline)
    res.status(201).json(users)
    } catch (error) {
        res.status(500).json({error: "Server Error"})
    }
}