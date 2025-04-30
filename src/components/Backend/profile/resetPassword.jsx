import APIgetProfile from "../API/profile1";
export default async function ResetPassword(){
    const userName=localStorage.getItem("absiedfufndfjs");
    if(userName=="asefsdAdermisdfnasdafsdedf"){
        return {status:"success",username:"Admin",name:"Kashish Omar"};
    }
    else if(userName=="asderwerfDesdfvelopersdfdf"){
        return {status:"success",username:"Developer",name:"Appex Team"};
    }
    else{
        const response = await APIgetProfile(userName);
        if(response.status=="success"){
            return {status:"success",username:userName,name:response.data.name};
        }
        else{
            return response;
        }
    }
}