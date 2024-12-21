import { useState, useRef, useEffect } from "react";
import { List, X } from "phosphor-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false);
    };

    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            className="bg-color-navbar w-full shadow-md fixed top-0 left-0 z-50"
        >
            <div className="p-6 flex items-center justify-between md:justify-start gap-8">
                <div className="text-white text-2xl font-bold">
                    <img src="/Logo/logo.png" alt="Logo" className="w-10 h-10" />
                </div>

                <button
                    className="text-white md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={32} /> : <List size={32} />}
                </button>

                <ul className="hidden md:flex gap-8 text-white text-lg">
                    <li>
                        <a
                            href="#dashboard"
                            className="hover:text-gray-300 cursor-pointer transition"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#event"
                            className="hover:text-gray-300 cursor-pointer transition"
                        >
                            Events
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-gray-300 cursor-pointer transition"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-gray-300 cursor-pointer transition"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div
                className={`absolute top-16 left-0 w-full bg-color-navbar text-white transition-all duration-300 ${isMenuOpen ? "max-h-screen p-4" : "max-h-0 overflow-hidden"
                    }`}
            >
                <ul>
                    <li className="py-2 hover:text-gray-300 cursor-pointer">
                        <a href="#dashboard">Home</a>
                    </li>
                    <li className="py-2 hover:text-gray-300 cursor-pointer">
                        <a href="#event">Events</a>
                    </li>
                    <li className="py-2 hover:text-gray-300 cursor-pointer">
                        <a href="#about">About</a>
                    </li>
                    <li className="py-2 hover:text-gray-300 cursor-pointer">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
