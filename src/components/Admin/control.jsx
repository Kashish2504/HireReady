export default function ControlAdmin(){
    return (
        <>
        <div className="h-screen my-2">
            <h1 className="text-2xl flex justify-center m-2 p-2 font-bold">Admin Controls</h1>
            <div className="flex justify-around">
                <button className="bg-blue-500 text-white p-2 m-2 rounded-full">Add MCQ</button>
                <button className="bg-blue-500 text-white p-2 m-2 rounded-full">Add jobs</button>
                <button className="bg-blue-500 text-white p-2 m-2 rounded-full">Add Catageory</button>
                <button className="bg-blue-500 text-white p-2 m-2 rounded-full">Add Practice Question</button>
                <button className="bg-blue-500 text-white p-2 m-2 rounded-full">Add Practice Categeory</button>
            </div>
            <div className="flex justify-around">
                <div className="mx-5 my-2 bg-pink-200">
                    1
                </div>
                <div className="">
                    2
                </div>
            </div>
        </div>
        </>
    );
}