
import { MdSearch } from "react-icons/md";
export default function Search(props){
    return (
        <div className="flex items-center justify-center bg-[#2e374a] rounded-lg p-2">
            <MdSearch size={20} className="" />
            <input type="text" placeholder={props.placeholder} className="outline-none text-[var(--text)] pl-2 border-none bg-transparent" />
        </div>
    )
}