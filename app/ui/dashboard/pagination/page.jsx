'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({count}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const page=searchParams.get("page") || 1;
    const params = new URLSearchParams(searchParams);
    const item_per_page=2;

    const hasPrev=item_per_page * (parseInt(page)-1)>0;
    const hasNext=item_per_page * (parseInt(page)-1) + item_per_page < count;


    const handleChangePage=(type)=>{
        type==="prev" ? params.set("page",parseInt(page)-1) : params.set("page",parseInt(page)+1) ;
        replace(`${pathname}?${params}`)
    }
    return (
        <div className="flex justify-between text-black">
            <button className="bg-[var(--textSoft)] rounded-lg p-1 " disabled={!hasPrev} onClick={()=>handleChangePage('prev')}>Preview</button>
            <button className="bg-[var(--textSoft)] rounded-lg p-1 px-3" disabled={!hasNext} onClick={()=>handleChangePage('next')}>Next</button>
        </div>
    )
}