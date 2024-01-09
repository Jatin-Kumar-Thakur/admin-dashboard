import style from '@/app/ui/login/login.module.css';

export default function page(){
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="w-[400px] bg-[var(--bgSoft)] p-7">
                <div className="text-2xl text-center p-4 font-bold">
                    <h1>Login</h1>
                </div>
                <div className="w-full">
                    <form action="" className={style.form}>
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>Login</button>
                    </form>
                </div>
                <div className="mt-4 text-sm text-center text-[var(--textSoft)]">
                    <p>Invalid Credentials</p>
                </div>
            </div>
        </div>
    )
}