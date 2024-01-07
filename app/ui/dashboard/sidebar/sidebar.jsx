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
const Sidebar = () => {

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
                    src='/noavatar.png'
                    alt='user img'
                    width={50}
                    height={50}
                />
                <div className="align-middle flex flex-col text-xs">
                    <span>Jatin kumar </span>
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
        </div>
    )
}

export default Sidebar;