'use client'
import style from '@/app/ui/login/login.module.css';
import { authenticate } from '@/app/lib/action';
import { useFormState } from 'react-dom';
export default function LoginForm() {
    const [state, formAction] = useFormState(authenticate, undefined);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[400px] bg-[var(--bgSoft)] p-7">
                <div className="text-2xl text-center p-4 font-bold">
                    <h1>Login</h1>
                </div>
                <div className="w-full">
                    <form action={formAction} className={style.form}>
                        <input type="text" placeholder="username" name='username' />
                        <input type="password" placeholder="password" name='password' />
                        <button>Login</button>
                        <div className="mt-4 text-sm text-center text-[var(--textSoft)]">
                            <p>{state && state}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}