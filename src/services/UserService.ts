import api from "../http";
import { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export default class UserServise {
    static fetchusers(): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>('/users');
    }
}