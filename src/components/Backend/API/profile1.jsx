export default async function APIgetProfile(userName){
    try{
        return {status:"failed",data:"Incorrect UserName"};
    }
    catch(error){
        console.log(error)
        return {status:"failed",data:"error"}
    }
}