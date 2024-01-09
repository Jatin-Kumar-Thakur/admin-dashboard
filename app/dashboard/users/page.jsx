
import Image from "next/image";
import style from './users.module.css'
import Search from '../../ui/dashboard/search/page';
import Link from "next/link";

export default function page({params}) {
    const id=params.id;
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
                        <tr>
                            <td className="flex items-center">
                                <Image
                                    src="/noavatar.png"
                                    alt=''
                                    width={40}
                                    height={40}
                                    className="rounded-full object-fill"
                                />
                                <span className="ml-2">Jatin Kumar</span>
                            </td>
                            <td><span>abc@gamil.com</span></td>
                            <td><span>oct 24 2024</span></td>
                            <td><span>client</span></td>
                            <td><span>passive</span></td>
                            <td>
                                <Link href={`/dashboard/users/text`}><button className="bg-teal-500 p-1 text-xs rounded-lg px-2 mr-1">View</button></Link>
                                <button className="bg-red-500 p-1 text-xs rounded-lg px-2 mr-1">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="flex items-center">
                                <Image
                                    src="/noavatar.png"
                                    alt=''
                                    width={40}
                                    height={40}
                                    className="rounded-full object-fill"
                                />
                                <span className="ml-2">Jatin Kumar</span>
                            </td>
                            <td><span>abc@gamil.com</span></td>
                            <td><span>oct 24 2024</span></td>
                            <td><span>client</span></td>
                            <td><span>passive</span></td>
                            <td>
                                <button className="bg-teal-500 p-1 text-xs rounded-lg px-2 mr-1">View</button>
                                <button className="bg-red-500 p-1 text-xs rounded-lg px-2 mr-1">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between text-black">
                <button className="bg-[var(--textSoft)] rounded-lg p-1">Preview</button>
                <button className="bg-[var(--textSoft)] rounded-lg p-1 px-3">Next</button>
            </div>
        </div>
    )
}