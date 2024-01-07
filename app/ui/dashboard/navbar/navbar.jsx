'use client'
import { usePathname } from "next/navigation";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";



const Navbar = () => {
    const pathName = usePathname();
    return (
        <div className="flex justify-between items-center p-4 rounded-lg bg-[var(--bgSoft)] ">
            <div className="text-[var(--textSoft)] font-bold ">
                <span>{pathName.split('/').pop().toUpperCase()}</span>
            </div>
            <div className="flex items-center">
                <div className="flex items-center justify-center bg-[#2e374a] rounded-lg p-2">
                    <MdSearch size={20} className=""/>
                    <input type="text" placeholder="Search..." className="outline-none text-[var(--text)] pl-2 border-none bg-transparent"/>
                </div>
                <div className="flex">
                    <MdNotifications size={25} className="mx-2"/>
                    <MdOutlineChat size={25} className="mr-2"/>
                    <MdPublic size={25} className="mr-2"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;