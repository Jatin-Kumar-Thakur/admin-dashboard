import Image from "next/image";
import style from './transaction.module.css';

const transaction = () => {
    return (
        <div className="bg-[var(--bgSoft)] p-5 rounded-lg mt-4">
            <h1 className="mb-5 font-light text-xl text-[var(--textSoft)]">Transaction</h1>
            <div className="w-full">
                <table className={`${style.table} w-full`}>
                    <thead className="my-2">
                        <tr className="">
                            <td>Name</td>
                            <td>Status</td>
                            <td>Date</td>
                            <td>Amount</td>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <td className="flex items-center gap-2">
                                <Image
                                    src="/noavatar.png"
                                    alt=''
                                    width={40}
                                    height={40}
                                    className="rounded-full object-fill"
                                    
                                />
                                Jatin Kumar
                            </td>
                            <td>
                                <span className="rounded-lg p-1 text-xs text-white bg-[#f7cb7375]">Pending</span>
                            </td>
                            <td>12.34.1212</td>
                            <td>$778</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default transaction;