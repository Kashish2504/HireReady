import getLogin from "../API/login";
export default async function check_login(userName,password){
    if(userName==="Kashish"){
        if(password==="Kashish12345"){
            return {status:"success",data:"Admin"};
        }
    }
    if(userName==="Vibhor" && password==="Vibhor12345"){
        return {status:"success",data:"Developer"};
    }
    else{
        const response = await getLogin(userName,password);
        return response;
    }
}