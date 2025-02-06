import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { ArrowLeft } from 'lucide-react';
import { create } from 'zustand';

// Zustand store for managing cart state
type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
};

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  increase: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decrease: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      ),
    })),
}));

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const { cart, addToCart, increase, decrease } = useCartStore();

  useEffect(() => {
    if (id) {
      axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <Toaster />
      <button onClick={() => router.push('/products')} className="flex items-center text-blue-500 mb-4">
        <ArrowLeft className="mr-2" /> Back
      </button>
      <Image src={product.thumbnail} alt={product.title} width={300} height={300} className="rounded-lg mx-auto" />
      <h1 className="text-xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
      <button
        onClick={() => {
          addToCart(product);
          toast.success('Added to cart!');
        }}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded w-full"
      >
        Add to Cart
      </button>
      <h2 className="text-lg font-bold mt-6">Cart</h2>
      <div className="mt-2">
        {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-2 border rounded mt-2">
            <Image src={item.thumbnail} alt={item.title} width={50} height={50} className="rounded" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p>${item.price}</p>
            </div>
            <div className="flex items-center">
              <button onClick={() => decrease(item.id)} className="bg-gray-300 px-2 py-1 rounded-l">-</button>
              <span className="px-3 py-1 border">{item.quantity}</span>
              <button onClick={() => increase(item.id)} className="bg-gray-300 px-2 py-1 rounded-r">+</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => router.push('/cart')} className="mt-4 bg-green-500 text-white px-6 py-2 rounded w-full">
        Go to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
