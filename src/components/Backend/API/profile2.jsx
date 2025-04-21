export default async function APIResetPass(username,oldPassword,newPassword) {
    try{
       
            return {status:"failed",data:"Network Error"};
    }
    catch(error){
        console.log(error);
        return {status:"failed",data:"internal server error"}
    }
}