import express, {Router} from 'express';
import {UserController} from "../../controllers/userController";
import {RoleName} from "../../enums/role";
import {verifyRoles} from "../../middleware/verifyRoles";
import {config} from "../../../config/config";

export const userRouter: Router = express.Router();
const controller = new UserController();

userRouter.route('/')
    .get(controller.getAllUsers)
    .post(verifyRoles([RoleName.Admin]), controller.createNewUser)
    .put(verifyRoles([RoleName.Admin, RoleName.Tutor, RoleName.User]), controller.updateUser)
    .delete(verifyRoles([RoleName.Admin]),controller.deleteUser)

userRouter.route('/upload')
    .post(
        verifyRoles([RoleName.Admin, RoleName.User, RoleName.Tutor]),
        config.upload.single('avatar'),
        controller.uploadAvatar
    )

userRouter.route('/:id')
    .get(controller.getUser)
