import Navbar from "../UI/Navbar";
import Footer from "../UI/footer";
import Center from "../UI/Center";
import ControlAdmin from "./control";
export default function AdminDashboard(){
    return (
        <>
        <Navbar />
        <Center />
        <ControlAdmin />
        <Footer />
        </>
    );
}