import React from "react";

const NavLinks = ({href, children, className = ''}) => {
    return (
        <a href={href} 
            className={`no-underline text-blue-500 mx-2 hover:text-blue-700 
                        transition-colors active:text-white active:scale-90
                        ${className}`}>
            {children}
        </a>
    );
}

export default NavLinks;