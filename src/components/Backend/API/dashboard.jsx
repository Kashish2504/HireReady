import { doc, getDoc} from "firebase/firestore";
import { db} from './firebase'
export default async function Fetch_Job_DB(){
    try{
        const userRef=doc(db,'jobs','jobdata');
        const document = await getDoc(userRef);
        if(document.exists()){
            return {status:"success",data:document.data()};
        }
        return {status:"failed"}
    }
    catch (error){
        console.log(error);
        return {status:"failed"};
    }
}