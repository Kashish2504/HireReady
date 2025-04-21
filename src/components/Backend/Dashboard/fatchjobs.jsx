import Fetch_Job_DB from "../API/dashboard";
export default function backend_Dashboard(){
    const response=Fetch_Job_DB();
    return response;
}