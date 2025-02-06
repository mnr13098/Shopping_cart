import Image from "next/image";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/router";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const router = useRouter();

  const handleCheckout = () => {
    alert("Checkout feature coming soon!");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg mb-2">
              <div className="flex items-center">
                <Image src={item.thumbnail} alt={item.title} width={60} height={60} className="rounded-lg" />
                <div className="ml-4">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, "decrease")}
                  className="bg-gray-300 px-2 py-1 rounded-l-lg"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, "increase")}
                  className="bg-gray-300 px-2 py-1 rounded-r-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button onClick={handleCheckout} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      <button onClick={() => router.push("/products")} className="mt-4 text-blue-500">
        ← Continue Shopping
      </button>
    </div>
  );
};

export default Cart;
