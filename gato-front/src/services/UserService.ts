import  api from "../../../../wasa/frontend/src/config/api.ts"
import IUser from "../../../../wasa/frontend/src/interfaces/IUser.ts";

const getUsers=()=>{
    return api.get<Array<IUser>>("/users")
}


