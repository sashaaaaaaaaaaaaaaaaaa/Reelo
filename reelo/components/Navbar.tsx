import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { FaChevronDown } from 'react-icons/fa';
import NavbarItem from '@/components/NavbarItem';
import MobileMenu from '@/components/MobileMenu';
import AccountMenu from '@/components/AccountMenu';
import MovieSearch from "@/components/MovieSerarch";


const TOP_OFFSET = 66;

const Navbar: React.FC = () => {
    const router = useRouter();

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    const navigateToHome = () => {
        router.push('/');
    };

    return (
        <nav className="w-full fixed z-40 m-0 p-0">
            <div
                className={`px-4 md:px-16 py-6 flex items-center justify-between transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-80' : ''}`}
            >
                <div className="flex items-center cursor-pointer" onClick={navigateToHome}>
                    {/*<img className="h-11 ml-4  mr-12lg:h-11 text-white" src="/images/logo.png" alt="Logo" />*/}
                </div>

                <div className="text-gray-200 hover:text-blue-200 cursor-pointer -ml-96 mt-5 mr-96 transition w-10">
                    <MovieSearch />
                </div>
                <div className="flex items-center gap-7">
                    <div onClick={toggleMobileMenu} className="lg:hidden flex items-center gap-2 cursor-pointer relative">
                        <p className="text-white text-sm">Browse</p>
                        <FaChevronDown className={`text-white w-4 transition ${showMobileMenu ? 'rotate-90' : 'rotate-0'}`} />
                        <MobileMenu visible={showMobileMenu} />
                    </div>

                    <div className="flex items-center ml-4 gap-7 hidden lg:flex">
                        <NavbarItem to="/" label="Discover" />
                        <NavbarItem to="/Vintage" label="Vintage" />
                        <NavbarItem to="/favlist" label="Must-Watchlist" />
                        <NavbarItem to="/news" label="News" />
                    </div>

                    <div onClick={toggleAccountMenu} className="flex items-center gap-2 ml-4 cursor-pointer relative hover:opacity-80 transition">
                        <div className="rounded-full w-6 h-6 lg:w-10 lg:h-10 overflow-hidden mr-6">
                            <img src="/images/default-black.png" alt="profile" />
                        </div>
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
