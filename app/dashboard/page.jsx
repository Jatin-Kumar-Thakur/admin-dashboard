import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart"
import Transactions from "../ui/dashboard/transaction/transaction"
import Rightbar from "../ui/dashboard/rightbar/rightbar"
export default function page() {
    return (
        <div className="flex gap-5 mt-5">
            <div className="basis-3/4">
                <div className="flex gap-5 justify-between">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className="basis-1/4">
                <Rightbar />
            </div>
        </div>
    )
}