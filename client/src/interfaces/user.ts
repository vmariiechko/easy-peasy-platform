import {MotivationItemText} from "../enums/motivationItem";

export type User = {
    username?: string;
    avatar?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    birthday?: string;
    likes?: string[];
    motivations?: MotivationItemText[];
}