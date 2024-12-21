export default function AboutHimtiSemwork() {
    return (
        <div className="bg-[#15114A] text-white py-16 px-8" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="/Logo/logoHIMTI.png"
                        alt="HIMTI BINUS University Logo"
                        className="w-28 md:w-36 h-auto object-contain mb-4"
                    />
                    <p className="text-center md:text-left text-sm md:text-base text-[#B9B8D0]">
                        Himpunan Mahasiswa <br /> HIMTI (Teknik Informatika)
                    </p>
                    <p className="text-center md:text-left text-lg font-semibold mt-4">
                        BINUS <br /> UNIVERSITY
                    </p>
                </div>

                <div className="flex flex-col justify-start">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                        ABOUT HIMTI SEMWORK
                    </h1>
                    <p className="text-lg leading-relaxed text-[#B9B8D0]">
                        <strong className="font-semibold">HIMTI SemWork</strong> is an exciting series of seminars and workshops
                        hosted by <strong>HIMTI BINUS University</strong>, focusing on the latest trends and advancements in technology and computer science. These events bring together industry experts, thought leaders, and enthusiastic learners to explore various topics, from software development and UI/UX design to artificial intelligence and cybersecurity. Participants will gain valuable knowledge, hands-on experience, and the opportunity to network with professionals and peers in the tech community.
                    </p>
                </div>
            </div>
        </div>
    );
}
