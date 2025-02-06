// pages/index.tsx
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Welcome to the Product App</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => router.push('/products')}
      >
        View Products
      </button>
    </div>
  );
}
