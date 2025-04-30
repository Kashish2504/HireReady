import APIResetPass from "../API/profile2";
export default async function GetProfile(oldPassword,newPassword) {
  const userName = localStorage.getItem("absiedfufndfjs");
  if (userName == "asefsdAdermisdfnasdafsdedf") {
    return { status: "failed",data:"Contact Kashish Omar"};
  } else if (userName == "asderwerfDesdfvelopersdfdf") {
    return { status: "success",data:"Contact Kashish Omar"};
  } else {
    const response = await APIResetPass(userName,oldPassword,newPassword);
    if (response.status == "success") {
      return {status: "success"};
    } else {
      return response;
    }
  }
}
