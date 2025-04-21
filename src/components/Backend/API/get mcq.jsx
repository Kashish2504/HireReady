import { doc, getDoc } from "firebase/firestore";
import { db} from './firebase'
const getMCQ=async(category)=>{
    try{
        const UserRef=doc(db,'M_CAT',category);
        const documnet=await getDoc(UserRef);
        if(documnet.exists()){
            return {status:"success",data:documnet.data().data};
        }
        else{
            return {status:"failed"};
        }
    }
    catch(error){
        console.log(error);
        return {status:"failed"};
    }
}
export default getMCQ;