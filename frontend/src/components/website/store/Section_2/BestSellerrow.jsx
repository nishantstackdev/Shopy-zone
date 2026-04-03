import ProductCard from "../../global/ProductCard";

const BestSellerRow = () => {
    const products = [
  {
    id: 1,
    category: "Electronics",
    title: "Smartphone",
    price: 979,
    oldPrice: 1259
  },
  {
    id: 2,
    category: "Accessories",
    title: "Wireless Headphones",
    price: 1499,
    oldPrice: 1999
  },
  {
    id: 3,
    category: "Wearables",
    title: "Smart Watch",
    price: 1999,
    oldPrice: 2499
  },
  {
    id: 4,
    category: "Audio",
    title: "Bluetooth Speaker",
    price: 899,
    oldPrice: 1199
  }
];

    return (
        <div>
            <h3 className="font-bold mb-4 px-2 lg:px-0">
                BEST SELLER IN THIS CATEGORY
            </h3>

            <div className="grid grid-cols-1 mx-2 lg:mx-0 gap-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} category={product.category} title={product.title} price={product.price} oldPrice={product.oldPrice} image={product.image} />
                ))}
            </div>
        </div>
    );
};

export default BestSellerRow;
