import { doc, getDoc } from "firebase/firestore";
import { db} from './firebase'
export default async function APIgetProfile(userName){
    try{
        const userRef=doc(db,'auth',userName);
        const document=await getDoc(userRef);
        if(document.exists()){
                return {status:"success",data:document.data()};
        }
        else{
            return {status:"failed",data:"Incorrect UserName"};
        }
    }
    catch(error){
        console.log(error)
        return {status:"failed",data:"error"}
    }
}