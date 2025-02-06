import Link from "next/link";
import { useStore } from "@/store/useStore";

const Navbar = () => {
  const cart = useStore((state) => state.cart);

  return (
    <nav className="p-4 bg-gray-100 flex justify-between items-center">
      <Link href="/products">
        <h1 className="text-lg font-bold">Shop</h1>
      </Link>
      <Link href="/cart">
        <div className="relative">
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
