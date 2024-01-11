import { addNewProduct } from '@/app/lib/action';
import style from '../../../ui/dashboard/products/addproduct.module.css';

const addproduct =()=>{
    return(
        <div className="bg-[var(--bgSoft)] p-4 rounded-lg mt-4">
            <form action={addNewProduct} className={`${style.form} flex flex-wrap justify-between`}>
                <input type="text" placeholder="title" name='title' required/>
                <select name="cat" id="cat">
                    <option className={`${style.option}`} value="none">Choose a Category</option>
                    <option className={`${style.option}`} value="kitchen">Kitchen</option>
                    <option className={`${style.option}`} value="phone">Phone</option>
                    <option className={`${style.option}`} value="computer">Computer</option>
                </select>
                <input type="text" name='price' placeholder="price" required/>
                <input type="text" name='stock' placeholder="stock" />
                <input type="text" name='color' placeholder="color" />
                <input type="text" name='size' placeholder="size" />
                <textarea name="desc" id="desc" cols="30" rows="10" placeholder="desc"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default addproduct;