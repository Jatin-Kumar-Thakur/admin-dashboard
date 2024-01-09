import Image from "next/image";
import style from '@/app/ui/dashboard/user/singleuser.module.css'

export default function singleUser({ params }) {
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
                <p className="font-bold text-[var(--textSoft)] py-3">Jatin Kumar</p>
            </div>
            <div className={`basis-3/4 h-full`}>
                <form action='' className={style.form}>
                    <label>UserName</label>
                    <input type="text" name='username' placeholder="Jatin Kumar" />
                    <label>Email</label>
                    <input type="email" name='email' placeholder="abc@gmail.com" />
                    <label>Phone</label>
                    <input type="phone" name='phone' placeholder="8297387989" />
                    <label>Password</label>
                    <input type="password" name='password' placeholder="..........."/>
                    <label>Address</label>
                    <input type="text" name='address' placeholder="Indore" />
                    <label>IsAdmin?</label>
                    <select name="isadmin" id="isadmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>IsActive?</label>
                    <select name="isactive" id="isactive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Updates Details</button>
                </form>
            </div>
        </div>
    )
}