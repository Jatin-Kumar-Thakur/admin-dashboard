'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
export default function Search(props) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (e) => {
        const params = new URLSearchParams(searchParams);
        if (e.target.value) {
            e.target.value.length>2 && params.set('q', e.target.value);
        }
        else {
            params.delete("q");
        }
        replace(`${pathname}?${params}`);
    }

    return (
        <div className="flex items-center justify-center bg-[#2e374a] rounded-lg p-2">
            <MdSearch size={20} className="" />
            <input type="text" onChange={handleSearch} placeholder={props.placeholder} className="outline-none text-[var(--text)] pl-2 border-none bg-transparent" />
        </div>
    )
}