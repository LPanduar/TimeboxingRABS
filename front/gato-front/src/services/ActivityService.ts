import api from "../../../../wasa/frontend/src/config/api.ts";
import IActivity from "../../../../wasa/frontend/src/interfaces/IActivity.ts";
import IUser from "../../../../wasa/frontend/src/interfaces/IUser.ts";

const GetActivities=()=>{
    return api.get<Array<IActivity>>("/users")
}

const getUser=(id:number)=>{
    return api.get<IUser>(`/users/${id}`)
}

const createUser=(currentUser:IUser)=>{
    return api.post<IUser>("/users", currentUser)
}