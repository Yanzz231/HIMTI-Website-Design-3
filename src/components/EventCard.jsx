export default function EventCard() {
    return (
        <div className="container mx-auto px-4" id="event">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white md:ml-30 xl:ml-40 font-bold my-10">
                EVENTS
            </h1>
            <div className="max-w-6xl mx-auto bg-white rounded-[24px] shadow-md p-6 flex flex-col md:flex-row items-center md:justify-between mb-16">
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                    <img
                        src="/Design/Design_1.png"
                        alt='"How Do Experts Design Neat Programs?"'
                        className="w-full h-auto object-contain rounded-lg"
                    />
                </div>

                <div className="w-full md:w-2/3 text-center md:text-right">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9D29C0] mb-2">
                        "How Do Experts Design Neat Programs?" <span className="text-[#00171F]">Seminar</span>
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#007EA7] font-bold mt-2">
                        December 3, 2024 | 09:00-12:00 GMT+7
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#007EA7] font-bold mt-2">
                        Onsite at BINUS @Alam Sutera Auditorium
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#00171F] mt-4">
                        Learn from <b>industry professionals</b> as they share their <b>tips, techniques, and best practices for writing scalable, maintainable, and robust software.</b> This seminar is perfect for programmers of all levels looking to enhance their coding skills and adopt expert-level strategies.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#00171F] font-bold mt-4">
                        Code smarter, not harder. 💡💻
                    </p>
                    <button
                        className="mt-4 bg-[#9D29C0] hover:bg-purple-700 font-bold text-sm sm:text-base md:text-xl lg:text-2xl text-white w-full md:w-auto px-6 py-2 rounded-full transition"
                    >
                        Register →
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto bg-white rounded-[24px] shadow-md p-6 flex flex-col md:flex-row items-center md:justify-between">
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                    <img
                        src="/Design/Design_2.png"
                        alt='"Boosting Your UI/UX Fundamentals?"'
                        className="w-full h-auto object-contain rounded-lg"
                    />
                </div>

                <div className="w-full md:w-2/3 text-center md:text-right">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2517BC] mb-2">
                        "Boosting Your UI/UX Fundamentals" <span className="text-[#00171F]">Workshop</span>
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#007EA7] font-bold mt-2">
                        January 15, 2025 | 15:00-17:00 GMT+7
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#007EA7] font-bold mt-2">
                        Online by Zoom meeting
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#00171F] mt-4">
                        Dive into core principles, best practices, and hands-on exercises that will enhance your ability to <b>create user-friendly and visually stunning interfaces.</b> Whether you're a beginner or looking to refine your skills, this workshop provides valuable insights and techniques to take your designs to the next level.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#00171F] font-bold mt-4">
                        Learn, Create, and Innovate. 🎨✨
                    </p>
                    <button
                        className="mt-4 bg-[#2517BC] hover:bg-blue-600 font-bold text-sm sm:text-base md:text-xl lg:text-2xl text-white w-full md:w-auto px-6 py-2 rounded-full transition"
                    >
                        Register →
                    </button>
                </div>
            </div>
        </div>
    );
}
