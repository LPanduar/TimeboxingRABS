import api from "../../../../wasa/frontend/src/config/api.ts";
import ITask from "../../../../wasa/frontend/src/interfaces/ITask.ts";

const getTask=()=>{
    return api.get<Array<ITask>>("/tasks")
}