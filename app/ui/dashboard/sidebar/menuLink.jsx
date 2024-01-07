'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
const MenuLink = ({ item }) => {

    const pathName = usePathname();
    return (
        <Link className={`flex p-3 
            items-center 
            gap-0 
            my-1 
            rounded-md 
            hover:bg-[#2e374a] 
            w-full ${pathName===item.path &&  "bg-[#2e374a]"}`}
            href={item.path} key={item.title}>
            <p>{item.icon}</p>
            <p className="pl-1">{item.title}</p>
        </Link>
    )
}

export default MenuLink;