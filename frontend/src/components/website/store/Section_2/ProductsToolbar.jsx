import { FaFilter } from "react-icons/fa";
const ProductsToolbar = ({setOpenFilter}) => {
    return (
        <div className="flex flex-wrap px-2 justify-between items-center my-3 text-sm text-gray-600">
            <button
            className="lg:hidden flex items-center gap-2 border px-3 py-2 rounded"
            onClick={()=>setOpenFilter(true)}
            >
                <FaFilter className="cursor-pointer" />
            </button>
            <p>1–40 of 120 results</p>

            <div className="flex gap-4">
                <select className="border rounded px-2 py-1">
                    <option>24</option>
                    <option>48</option>
                    <option>72</option>
                </select>

                <select className="border rounded px-2 py-1 w-30 lg:w-full">
                    <option>Default</option>
                    <option>Price Low → High</option>
                    <option>Price High → Low</option>
                </select>
            </div>
        </div>
    );
};

export default ProductsToolbar;
