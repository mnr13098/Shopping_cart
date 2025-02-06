import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => setProducts(res.data.products));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Products</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
