export default function Banner() {
    return (
        <div className="w-full h-screen relative z-0" id="dashboard">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 to-black">
                <img
                    src="/Design/background.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className={"absolute z-10 top-24 left-96 lg:block hidden"}>
                <img src="/Design/planet.png" alt="Planet"/>
            </div>

            <div className={"absolute z-10 top-80 left-32 lg:block hidden"}>
                <img src="/Design/rocket.png" alt="Rocket"/>
            </div>

            <div className="relative z-40 flex flex-col items-end justify-center h-full px-8 mx-auto container">
                <h1 className="text-white text-5xl md:text-9xl font-bold tracking-wide">
                    HIMTI
                </h1>
                <h2 className="text-white text-2xl md:text-7xl mt-2 tracking-widest">
                    S E M W O R K
                </h2>
                <p className="text-white text-lg md:text-xl mt-6 max-w-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button
                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition">
                    Learn More →
                </button>
            </div>
        </div>
    )
}