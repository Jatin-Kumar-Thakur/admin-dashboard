import { MdSupervisedUserCircle } from "react-icons/md";


const card=()=>{
    return(
        <div className="flex gap-1 bg-[var(--bgSoft)] p-4 rounded-lg cursor-pointer w-full hover:bg-[#2e374a]">
            <MdSupervisedUserCircle size={24}/>
            <div className="flex flex-col gap-2">
                <span className="">Total Users </span>
                <span className="flex text-2xl font-bold-500">10.275</span>
                <span className="text-xs font-bold-300">
                    <span className="text-lime-300">20%</span> more than previous week
                </span>
            </div>
        </div>
    )
}

export default card;