import { doc, getDoc } from "firebase/firestore";
import { db} from './firebase'
const loadMCQ_CAT =async ()=>{
    try{
        const UserRef=doc(db,'M_CAT','M_CAT');
        const document=await getDoc(UserRef);
        if(document.exists()){
            return {status:"success",data:document.data()};
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
export default loadMCQ_CAT;