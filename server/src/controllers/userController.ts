import {Request, Response} from "express";
import {User} from "../models/User";
import {uploadFile} from "../services/s3";
import {unlink} from 'fs/promises';

export class UserController {
    async getUser(req: Request, res: Response) {
        try {
            const {username} = req.params;
            const user = User.findOne({username});
            return res.status(200).json(user);
        } catch (err) {
            console.error(err);
        }
    }
    async getAllUsers(req: Request, res: Response){
        const users = await User.find();
        if(!users) return res.status(204).json({message: "No users found"});
        res.json(users);
    }
    async createNewUser(req: Request, res: Response) {
        if(!req.body?.firstname || !req?.body?.lastname){
            return res.status(400).json({message: 'First and last names are required'})
        }
        try {
            // const result = await User.create({
            //
            // })
            console.log('Add a new user. Mock method');
            res.status(201).json({message: "Mock create method"});
        } catch (err) {
            console.error(err);
        }
    }
    async deleteUser(req: Request, res: Response) {
        console.log('Delete a user. Mock method');
        // const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
        // if (!employee) {
        //     return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
        // }
        // const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
        // data.setEmployees([...filteredArray]);
        // res.json(data.employees);
        res.json({message: "Delete method. Mock method"})
    }
    async updateUser(req: Request, res: Response) {
        try {
            const { username } = req.body;
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(400).json({ message: `Username ${username} was not found` });
            }
            // Edition logic
            console.log('Update User. Mock method');
            return res.status(200).json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error updating user' });
        }
    }
    async uploadAvatar(req: Request, res: Response) {
        try {
            if(req.file){

                //@TODO: optimization of size before landing of S3
                const avatarUrl = await uploadFile(req.file);
                await unlink(req.file.path);

                // Updating User document
                const {userName} = req.body;
                await User.updateOne({ username: userName }, { $set: { avatar:  avatarUrl} });
                return res.status(200).json({imagePath: avatarUrl})
            } else {
                return res.status(400).json('Bad client request.')
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({error: 'Error uploading avatar.'})
        }
    }
}