import Signup_API from "../API/singup";
export default async function sign_up(username,password,name){
    const response=await Signup_API(username,password,name);
    return response;
}