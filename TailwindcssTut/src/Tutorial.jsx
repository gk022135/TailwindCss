function Tutorial() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-orange-500"> hi guys you going to lesrn Tailwind css</h1>
            <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>



            <h1 className="p-6 max-w-sm h-100 mx-auto rounded-xl bg-red-500 grid place-content-center text-3xl font-extrabold">make it center</h1>

            <button className="bg-orange-500 w-40 h-15 rounded-2xl m-4 p-2 hover:bg-blue-500">buy now</button>

            <div className="border-2 border-blue-500 p-2 overflow-hidden rounded-xl md:flex">
                <div className="">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src="image.jpg" alt="sunset"></img>
                </div>
                <div className="border-2 border-red-900">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ipsa. Corporis, numquam cum,
                </div>
            </div>
        </div>
    )
};

export default Tutorial;