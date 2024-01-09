import Image from "next/image";
import style from '../users/users.module.css'
import Search from '../../ui/dashboard/search/page';
import Link from "next/link";

const ProductsPage = () => {
    return (
        <div className="bg-[var(--bgSoft)] p-4 rounded-lg mt-4">
            <div className="flex justify-between  ">
                <Search placeholder='Search product ....' />
                <div className="">
                    <Link href="/dashboard/products/addProduct">
                    <button className="bg-[#5b57c9] p-1 rounded-lg">Add Product</button>
                    </Link>
                </div>
            </div>
            <div className="my-4">
                <table className={`w-full ${style.table}`}>
                    <thead className="my-2">
                        <tr className="">
                            <td>Title</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Created at</td>
                            <td>Stock</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="flex items-center">
                                <Image
                                    src="/noproduct.jpg"
                                    alt=''
                                    width={40}
                                    height={40}
                                    className="rounded-full object-fill"
                                />
                                <span className="ml-2">IPhone</span>
                            </td>
                            <td><span>It is a mobile device used ti abcdhbsc</span></td>
                            <td><span>$1000</span></td>
                            <td><span>jan 9 2014</span></td>
                            <td><span>34</span></td>
                            <td>
                            <Link href={`/dashboard/products/text`}><button className="bg-teal-500 p-1 text-xs rounded-lg px-2 mr-1">View</button></Link>
                                <button className="bg-red-500 p-1 text-xs rounded-lg px-2 mr-1">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="flex items-center">
                                <Image
                                    src="/noproduct.jpg"
                                    alt=''
                                    width={40}
                                    height={40}
                                    className="rounded-full object-fill"
                                />
                                <span className="ml-2">IPhone</span>
                            </td>
                            <td><span>It is a mobile device used ti abcdhbsc</span></td>
                            <td><span>$1000</span></td>
                            <td><span>jan 9 2014</span></td>
                            <td><span>34</span></td>
                            <td>
                            <Link href={`/dashboard/products/text`}><button className="bg-teal-500 p-1 text-xs rounded-lg px-2 mr-1">View</button></Link>
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

export default ProductsPage;