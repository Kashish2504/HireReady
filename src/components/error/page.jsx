import { Link } from "react-router-dom";
export default function Pagenotfound(){
    return (
        <>
    <div className="h-screen py-9">
        <h1 className="text-4xl text-black flex justify-center py-5 my-9">HireReady</h1>
        <div className="py-9 my-9">
            <h1 className="text-3xl text-black flex justify-center">404 - Page Not Found</h1>
            <p className="text-xl text-black flex justify-center my-3"><Link to="/">click here {"(Home)"}</Link></p>
        </div>
    </div>
    </>);
}