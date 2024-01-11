
import Image from "next/image";
import style from './users.module.css'
import Search from '../../ui/dashboard/search/page';
import Link from "next/link";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/page";
import { deleteUser } from "@/app/lib/action";


const UsersPage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, users } = await fetchUsers(q, page);

    // try {
    //     users = await fetchUsers(q,page);
    // } catch (error) {
    //     console.log(error);
    // }


    return (
        <div className="bg-[var(--bgSoft)] p-4 rounded-lg mt-4">
            <div className="flex justify-between  ">
                <Search placeholder='Search User ....' />
                <div className="">
                    <Link href="/dashboard/users/addUser">
                        <button className="bg-[#5b57c9] p-1 rounded-lg">Add New</button>
                    </Link>
                </div>
            </div>
            <div className="my-4">
                <table className={`w-full ${style.table}`}>
                    <thead className="my-2">
                        <tr className="">
                            <td>Name</td>
                            <td>Email</td>
                            <td>Created at</td>
                            <td>Role</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item) => (
                                <tr key={item.id}>
                                    <td className="flex items-center">
                                        <Image
                                            src={item.img || "/noavatar.png"}
                                            alt="userImage"
                                            width={40}
                                            height={40}
                                            className="rounded-full object-fill"
                                        />
                                        <span className="ml-2">{item.username}</span>
                                    </td>
                                    <td><span>{item.email}</span></td>
                                    <td><span>{item.createdAt?.toString().slice(4, 16)}</span></td>
                                    <td><span>{item.isAdmin ? "Admin" : "Client"}</span></td>
                                    <td><span>{item.isActive ? "active" : "passive"}</span></td>
                                    <td className="flex">
                                        <Link href={`/dashboard/users/${item.id}`}><button className="bg-teal-500 p-1 text-xs rounded-lg px-2 mr-1">View</button></Link>
                                        <form action={deleteUser}>
                                            <input type="hidden" name="id" value={item.id} />
                                            <button className="bg-red-500 p-1 text-xs rounded-lg px-2 mr-1">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            <Pagination count={count} />
        </div>
    )
}

export default UsersPage;