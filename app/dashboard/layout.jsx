import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
// import Style from "../ui/dashboard/dashboard/"
const Layout = ({ children }) => {
    return (
        <div className="flex">
            <div className="flex bg-[var(--bgSoft)] w-[20%] p-5" ><Sidebar /></div>
            <div className="flex flex-col w-[80%] p-2.5">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout;