import Image from "next/image";
import style from '@/app/ui/dashboard/user/singleuser.module.css'
export default function singleProduct() {
    return (
        <div className="bg-[var(--bgSoft)] p-4 pr-10 rounded-lg mt-4 flex gap-6">
            <div className="basis-1/4 w-full">
                <div className=" relative rounded-lg overflow-hidden">
                    <Image
                        src="/noavatar.png"
                        alt=""
                        // fill
                        width={150}
                        height={200}
                        className="rounded-lg"
                    /></div>
                <p className="font-bold text-[var(--textSoft)] py-3">Iphone</p>
            </div>
            <div className={`basis-3/4 h-full`}>
                <form action='' className={style.form}>
                    <label>Title</label>
                    <input type="text" name='title' placeholder="Iphone" />
                    <label>Price</label>
                    <input type="number" name='number' placeholder="76" />
                    <label>Stock</label>
                    <input type="number" name='stock' placeholder="89" />
                    <label>Color</label>
                    <input type="text" name='color' placeholder="red" />
                    <label>Size</label>
                    <input type="text" name='size' placeholder="abc" />
                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option className={`${style.option}`} value="kitchen">Kitechen</option>
                        <option className={`${style.option}`} value="phone">Phone</option>
                        <option className={`${style.option}`} value="computer">Computer</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" cols="30" rows="10" placeholder="desc"></textarea>
                    <button>Updates Details</button>
                </form>
            </div>
        </div>
    )
}