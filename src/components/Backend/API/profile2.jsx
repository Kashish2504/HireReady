import { doc, getDoc,updateDoc } from "firebase/firestore";
import { db} from './firebase'
export default async function APIResetPass(username,oldPassword,newPassword) {
    try{
        const userRef=doc(db,'auth',username);
        const document=await getDoc(userRef);
        if(document.exists()){
            if(oldPassword==document.data().password){
                await updateDoc(userRef,{username:username , password:newPassword , name:document.data().name});
                return {status:"success"};
            }
            else{
                return {status:"failed",data:"Wrong Old Password"};
            }
        }
        else{
            return {status:"failed",data:"Network Error"};
        }
    }
    catch(error){
        console.log(error);
        return {status:"failed",data:"internal server error"}
    }
}