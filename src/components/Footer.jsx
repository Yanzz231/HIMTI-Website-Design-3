export default function Footer() {
    return (
        <footer className="bg-[#0A0E17] text-white py-8 px-8">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 sm:justify-between items-center">
                {/* Logo Section */}
                <div className="flex flex-col sm:flex-row gap-12 items-center">
                    <img
                        src="/Logo/Binus.png"
                        alt="BINUS University Logo"
                        className="w-40 sm:w-56 h-auto object-contain"
                    />
                    <img
                        src="/Logo/logoHIMTI.png"
                        alt="HIMTI BINUS University Logo"
                        className="w-36 sm:w-36 h-auto object-contain mb-2 mx-auto sm:mx-0"
                    />
                </div>

                {/* Social Links Section */}
                <div className="flex flex-col items-center sm:items-end">
                    <div className="flex flex-col gap-4 text-sm text-[#B9B8D0]">
                        <div className="flex items-center gap-2">
                            <img
                                src="/Icon/icon-ig.png"
                                alt="Instagram"
                                className="w-6 h-6"
                            />
                            <a
                                href="https://instagram.com/himti_binus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                @himti_binus
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="/Icon/icon-youtube.png"
                                alt="YouTube"
                                className="w-6 h-6"
                            />
                            <a
                                href="https://youtube.com/himti_binus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                HIMTI BINUS
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src="/Icon/icon-tiktok.png"
                                alt="TikTok"
                                className="w-6 h-6"
                            />
                            <a
                                href="https://tiktok.com/@himtibinus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                @himtibinus
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 text-center text-sm text-[#B9B8D0]">
                © Copyright 2024 HIMTI BINUS University.
            </div>
        </footer>
    );
}
