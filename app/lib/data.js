import { User ,Product} from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i")
    const item_per_page = 2;
    try {
        connectToDb();
        const count = await User.find({ username: { $regex: regex }}).count();
        const users = await User.find({ username: { $regex: regex } }).limit(item_per_page).skip(item_per_page * (page - 1));
        return {count,users};
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Fetch Users")
    }
}
export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i")
    const item_per_page = 2;
    try {
        connectToDb();
        const count = await Product.find({ title: { $regex: regex }}).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(item_per_page).skip(item_per_page * (page - 1));
        return {count,products};
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Fetch Users")
    }
}