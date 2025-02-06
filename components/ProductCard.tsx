import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border p-2 rounded-lg cursor-pointer hover:shadow-lg">
        <Image src={product.thumbnail} alt={product.title} width={150} height={150} className="rounded-lg" />
        <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-500 text-sm">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
