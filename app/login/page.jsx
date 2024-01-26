// import style from '@/app/ui/login/login.module.css';
// import { authenticate } from '../lib/action';

import LoginForm from "../ui/login/loginform/page";

export default function page(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>These are the details for simplicity purpose</h1>
            <h1>Bcz this is just a admin dashboard application project</h1>
            <h1>Use Username = jatin kumar thakur</h1>
            <h1>Use password = 1234567890 </h1>
            <LoginForm />
            {/* <div className="w-[400px] bg-[var(--bgSoft)] p-7">
                <div className="text-2xl text-center p-4 font-bold">
                    <h1>Login</h1>
                </div>
                <div className="w-full">
                    <form action={authenticate} className={style.form}>
                        <input type="text" placeholder="username" name='username'/>
                        <input type="password" placeholder="password" name='password'/>
                        <button>Login</button>
                    </form>
                </div>
                <div className="mt-4 text-sm text-center text-[var(--textSoft)]">
                    <p>Invalid Credentials</p>
                </div>
            </div> */}
        </div>
    )
}