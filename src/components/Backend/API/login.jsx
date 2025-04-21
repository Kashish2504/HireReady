import { doc, getDoc } from "firebase/firestore";
import { db} from './firebase';
import bcrypt from "bcryptjs";
export default async function getLogin(userName,password){
    try{
        const userRef=doc(db,'auth',userName);
        const document=await getDoc(userRef);
        if(document.exists()){
            if(await bcrypt.compare(password, document.data().password)){
                return {status:"success",data:"loggedin"};
            }
            else{
                return {status:"failed",data:"Incorrect Password"}
            }
        }
        else{
            return {status:"failed",data:"Incorrect UserName"};

        }
    }
    catch(error){
        console.log(error)
        return {status:"failed",data:error}
    }
}