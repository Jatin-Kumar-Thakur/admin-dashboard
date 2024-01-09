import style from '../../../ui/dashboard/products/addproduct.module.css';
export default function addUser() {
    return (
        <div className="">
            <div className="bg-[var(--bgSoft)] p-4 rounded-lg mt-4">
                <form action="" className={`${style.form} flex flex-wrap justify-between`}>
                    <input type="text" placeholder="username" name='username' required />
                    <input type="email" name='email' placeholder="email" required />
                    <input type="password" name='password' placeholder="password" />
                    <input type="phone" name='phone' placeholder="phone" />
                    <select name='idadmin' id='idadmin'>
                        <option className={`${style.option}`} value={false} selected>IsAdmin?</option>
                        <option className={`${style.option}`} value={true}>Yes</option>
                        <option className={`${style.option}`} value={false}>No</option>
                        
                    </select>
                    <select name='idactive' id='isactive'>
                        <option className={`${style.option}`} value={true} selected>IsActive?</option>
                        <option className={`${style.option}`} value={true}>Yes</option>
                        <option className={`${style.option}`} value={false}>No</option>
                        
                    </select>
                    
                    <textarea name="address" id="address" rows="7" placeholder="address"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}