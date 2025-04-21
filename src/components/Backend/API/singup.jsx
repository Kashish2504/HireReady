import { doc, setDoc, getDoc } from "firebase/firestore";
import { db} from './firebase';
import bcrypt from "bcryptjs";


export default async function Signup_API(username,password,name){
    const hashPassword = async (password) => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    };
    try{
        const userRef= doc (db,'auth',username);
        const document=await getDoc(userRef);
        if(document.exists()){
            return {status:"failed",data:"UserName Already exist"};
        }
        else{
            const hashedPassword = await hashPassword(password);
            await setDoc(userRef,{username:username , password:hashedPassword , name:name});
            return {status:"success",data:"signup"};
        }
    }
    catch(error){
        console.log(error);
        return {status:"failed",data:error}
    }
}