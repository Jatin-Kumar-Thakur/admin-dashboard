import Image from "next/image";
import style from '../users/users.module.css'
import Search from '../../ui/dashboard/search/page';
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/page";
import { fetchProducts } from "@/app/lib/data";
const ProductsPage = async ({ searchParams }) => {

    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, products } = await fetchProducts(q, page);

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
                        {
                            products.map((item) => (
                                <tr key={item.id}>
                                    <td className="flex items-center">
                                        <Image
                                            src={item.img || "/noproduct.jpg"}
                                            alt=''
                                            width={40}
                                            height={40}
                                            className="rounded-full object-fill"
                                        />
                                        <span className="ml-2">{item.title}</span>
                                    </td>
                                    <td><span>{item.desc}</span></td>
                                    <td><span>${item.price}</span></td>
                                    <td><span>{item.createdAt?.toString().slice(4, 16)}</span></td>
                                    <td><span>{item.stock}</span></td>
                                    <td>
                                        <Link href={`/dashboard/products/${item.id}`}><button className="bg-teal-500 p-1 text-xs rounded-lg px-2 mr-1">View</button></Link>
                                        <button className="bg-red-500 p-1 text-xs rounded-lg px-2 mr-1">Delete</button>
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

export default ProductsPage;