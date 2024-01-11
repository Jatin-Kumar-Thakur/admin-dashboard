'use server'
import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';



// Add NEw user and Product Data ***************************************************************************
export const addNewUser = async (formData) => {

    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        connectToDb();
        const newUser = new User({
            username, email, password: hashedPassword, phone, address, isAdmin, isActive
        });
        await newUser.save();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Add new User");
    }

    revalidatePath('/dashboard/users/');
    redirect("/dashboard/users/")
}
export const addNewProduct = async (formData) => {

    const { title, desc, price, stock, color, size ,cat} = Object.fromEntries(formData);

    try {
        connectToDb();
        const newProduct = new Product({
            title, desc, price, stock, color, size
        });
        await newProduct.save();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Add new product");
    }
    revalidatePath('/dashboard/products/');
    redirect("/dashboard/products/")
}



// DElete User and Product ************************************************************************
export const deleteProduct = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Product.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete");
    }
    revalidatePath('/dashboard/products/');
}
export const deleteUser = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete User");
    }
    revalidatePath('/dashboard/users/');
}

// ***************************************************get single user and product

export const fetchSingleProduct = async (id) => {
    try {
        connectToDb();
        const singleProduct = await Product.findById(id);
        return singleProduct;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch single product");
    }
}
export const fetchSingleUser = async (id) => {
    try {
        connectToDb();
        const singleUser = await User.findById(id);
        return singleUser;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch single User");
    }
}

// **************************************************** update user details and product*************

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        connectToDb();

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}
export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        connectToDb();

        const updateFields = {
            title, desc, price, stock, color, size
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await Product.findByIdAndUpdate(id, updateFields);
        // console.log("updated");
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update product!");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}