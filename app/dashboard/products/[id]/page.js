import Image from "next/image";
import style from '@/app/ui/dashboard/user/singleuser.module.css'
import { fetchSingleProduct, updateProduct } from "@/app/lib/action";
export default async function singleProduct({params}) {
    const id=params.id;
    const product=await fetchSingleProduct(id);
    // console.log(product);
    return (
        <div className="bg-[var(--bgSoft)] p-4 pr-10 rounded-lg mt-4 flex gap-6">
            <div className="basis-1/4 w-full">
                <div className=" relative rounded-lg overflow-hidden">
                    <Image
                        src={product.img || "/noavatar.png"}
                        alt=""
                        // fill
                        width={150}
                        height={200}
                        className="rounded-lg"
                    /></div>
                <p className="font-bold text-[var(--textSoft)] py-3">{product.title}</p>
            </div>
            <div className={`basis-3/4 h-full`}>
                <form action={updateProduct} className={style.form}>
                    <input type="hidden" name="id" value={product.id} />
                    <label>Title</label>
                    <input type="text" name='title' placeholder={product.title} />
                    <label>Price</label>
                    <input type="number" name='number' placeholder={product.price} />
                    <label>Stock</label>
                    <input type="number" name='stock' placeholder={product.stock} />
                    <label>Color</label>
                    <input type="text" name='color' placeholder={product.color} />
                    <label>Size</label>
                    <input type="text" name='size' placeholder={product.size} />
                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option className={`${style.option}`} value="kitchen" selected={product.cat==="kitchen"} >Kitechen</option>
                        <option className={`${style.option}`} value="phone" selected={product.cat==="phone"}>Phone</option>
                        <option className={`${style.option}`} value="computer" selected={product.cat==="computer"}>Computer</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" cols="30" rows="10" placeholder={product.desc}></textarea>
                    <button type="submit">Updates Details</button>
                </form>
            </div>
        </div>
    )
}