import {signOut} from "next-auth/react";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

import { FaUserAlt } from "react-icons/fa";
import useCurrentUser from "@/hooks/useCurrentUser";
interface AccountMenuProps{
    visible? : boolean;
}
const AccountMenu: React.FC<AccountMenuProps> = ({visible}) =>{
    const { data } = useCurrentUser();
    if (!visible){
        return null;
    }
    return(
        <div className={"bg-white bg-opacity-60 w-44 absolute top-14 right-0 py-5 rounded-xl flex-col  flex"}>
            <div className={"flex flex-col gap-3"}>
                <div className={"px-3 flex flex-row gap-3 items-center w-full"}>
                    {/*<img className={"w-10 rounded-full"} src={"/images/default-black.png"} alt={""}/>*/}
                    <FaUserAlt size={17} className={"text-zinc-800 text-sm hover:underline"}/>
                    <p className={"text-zinc-800 text-sm hover:underline"}>{data?.name}</p>
                </div>
                <hr className={"bg-gray-500 border-0 h-px my-4 "}/>


                <div onClick={() => signOut()} className={"px-3 gap-3 flex flex-row items-center text-center py-1 text-zinc-800 text-sm hover:underline"}> <FaSignOutAlt size={17}/> Sign out
                </div>
            </div>
        </div>
    )
}
export default AccountMenu;



