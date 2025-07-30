import React from "react";
import NavLinks from './NavLinks.jsx';

const Header = () => {
    return (
        <header className="flex justify-around items-center 
                        bg-white shadow-md py-5 px-10">
            <div className="logo cursor-pointer p-4 
                            text-2xl font-bold">
                <h1>DevConnect</h1>
            </div>
            <nav className="flex gap-7">
                <NavLinks href="/">Home</NavLinks>
                <NavLinks href="/features">Features</NavLinks>
                <NavLinks href="/blog">Blog</NavLinks>
                <NavLinks href="/about">About</NavLinks>
            </nav>
        </header>
    );
}

export default Header;