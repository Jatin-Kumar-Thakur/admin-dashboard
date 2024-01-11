import Image from "next/image";
import style from '@/app/ui/dashboard/user/singleuser.module.css'
import { fetchSingleUser, updateUser } from "@/app/lib/action";

export default async function singleUser ({ params }) {
    // console.log(params.id);
    const user=await fetchSingleUser(params.id);
    // console.log(userData);
    return (
        <div className="bg-[var(--bgSoft)] p-4 pr-10 rounded-lg mt-4 flex gap-6">
            <div className="basis-1/4 w-full">
                <div className=" relative rounded-lg overflow-hidden">
                    <Image
                        src={user.img || "/noavatar.png"}
                        alt=""
                        // fill
                        width={150}
                        height={200}
                        className="rounded-lg"
                    /></div>
                <p className="font-bold text-[var(--textSoft)] py-3">{user.username}</p>
            </div>
            <div className={`basis-3/4 h-full`}>
                <form action={updateUser} className={style.form}>
                    <input type="hidden" name="id" value={user.id} readOnly/>
                    <label>UserName</label>
                    <input type="text" name='username' placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" name='email' placeholder={user.email}/>
                    <label>Phone</label>
                    <input type="phone" name='phone' placeholder={user.phone}/>
                    <label>Password</label>
                    <input type="password" name='password' placeholder="**************"/>
                    <label>Address</label>
                    <input type="text" name='address' placeholder={user.address}/>
                    <label>IsAdmin?</label>
                    <select name="isadmin" id="isadmin" > 
                        <option value={true} selected={user.isAdmin}>Yes</option>
                        <option value={false} selected={!user.isAdmin}>No</option>
                    </select>
                    <label>IsActive?</label>
                    <select name="isactive" id="isactive" >
                        <option value={true} selected={user.isActive}>Yes</option>
                        <option value={false} selected={!user.isActive}>No</option>
                    </select>
                    <button>Updates Details</button>
                </form>
            </div>
        </div>
    )
}