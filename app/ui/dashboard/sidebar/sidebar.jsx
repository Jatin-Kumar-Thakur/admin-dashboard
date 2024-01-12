import Image from "next/image";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink";
import { auth } from "@/app/auth";
import { logout } from "@/app/lib/action";
const Sidebar = async () => {

    const { user } = await auth();
    const menuItems = [
        {
            title: "Pages",
            list: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <MdDashboard />,
                },
                {
                    title: "Users",
                    path: "/dashboard/users",
                    icon: <MdSupervisedUserCircle />,
                },
                {
                    title: "Products",
                    path: "/dashboard/products",
                    icon: <MdShoppingBag />,
                },
                {
                    title: "Transactions",
                    path: "/dashboard/transactions",
                    icon: <MdAttachMoney />,
                },
            ],
        },
        {
            title: "Analytics",
            list: [
                {
                    title: "Revenue",
                    path: "/dashboard/revenue",
                    icon: <MdWork />,
                },
                {
                    title: "Reports",
                    path: "/dashboard/reports",
                    icon: <MdAnalytics />,
                },
                {
                    title: "Teams",
                    path: "/dashboard/teams",
                    icon: <MdPeople />,
                },
            ],
        },
        {
            title: "User",
            list: [
                {
                    title: "Settings",
                    path: "/dashboard/settings",
                    icon: <MdOutlineSettings />,
                },
                {
                    title: "Help",
                    path: "/dashboard/help",
                    icon: <MdHelpCenter />,
                },
            ],
        },
    ];


    return (
        <div className="sticky top-[40px]">
            <div className="flex items-center gap-5 mb-5">
                <Image
                    className="rounded-full object-cover"
                    src={user.img || '/noavatar.png'}
                    alt='user img'
                    width={50}
                    height={50}
                />
                <div className="align-middle flex flex-col text-xs">
                    <span>{user.username} </span>
                    <span className="text-[var(--textSoft)]">Admin</span>
                </div>

            </div>
            <ul className="w-full">
                {
                    menuItems.map((cat) => (
                        <li key={cat.title}>
                            <span className="text-[var(--textSoft)] font-bold text-[13px] my-[10px] mx-0">{cat.title}</span>
                            <ul>
                                {cat.list.map((item) => (
                                    <MenuLink item={item} key={item.title} />
                                ))}
                            </ul>

                        </li>
                    ))
                }
            </ul>
            <form action={logout}>
                <button className="flex items-center  bg-none p-3 rounded-lg gap-1 my-1 cursor-pointer border-none text-white w-full hover:bg-[#2e374a]">
                    <MdLogout />
                    <p className="">Logout</p>
                </button>
            </form>
        </div>
    )
}

export default Sidebar;