// import React from "react";
// import { Link } from 'react-router-dom';
//
// interface NavbarItemProps{
//     label: string;
// }
// const NavbarItem: React.FC<NavbarItemProps> = ({label}) => {
//     return(
//
//         <div className={"text-white cursor-pointer hover:text-gray-300 transition "}>
//             {label}
//         </div>
//     )
// }
// export default NavbarItem;

import React from 'react';
import { useRouter } from 'next/router';

interface NavbarItemProps {
    to: string;
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ to, label }) => {
    const router = useRouter();

    const handleClick = () => {
        console.log("Clicked");
        router.push(to);
    };


    return (
        <div onClick={handleClick} className="text-white hover:text-blue-300 transition duration-300 cursor-pointer">
            {label}
        </div>
    );
};



export default NavbarItem;


