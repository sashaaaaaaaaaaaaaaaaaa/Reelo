import React from "react";
import NavbarItem from "@/components/NavbarItem";
interface MobileMenuProps {
    visible? : boolean;
}
const MobileMenu: React.FC<MobileMenuProps> = ({visible}) =>{
    if (!visible){
        return null;
    }
    return (
        <div className={"bg-white bg-opacity-30 w-56 absolute top-10 right-0 py-5 rounded-xl flex-col  flex"}>
            <div className={"flex flex-col gap-4"}>
                <div className={"px-3 text-center text-white hover:underline "}>
                    <NavbarItem to="/" label="Entdecken" />
                </div>
                <div className={"px-3 text-center text-white hover:underline "}>
                    <NavbarItem to="/Vintage" label="Vintage" />
                </div>
                <div className={"px-3 text-center text-white hover:underline "}>
                    <NavbarItem to="/favlist" label="Muss-Watchliste" />
                </div>
                <div className={"px-3 text-center text-white hover:underline "}>
                    <NavbarItem to="/news" label="Lesestoff" />
                </div>
            </div>

        </div>
    )
};
export default MobileMenu;