# Next.js Product App

This is a simple product listing and cart management app built using Next.js, TailwindCSS, and Zustand for state management. The app fetches product data from the DummyJSON API and allows users to add items to a cart directly from the product details page.

## Features
- Display a list of products fetched from DummyJSON API.
- View product details on a separate page.
- Add products to the cart with quantity management.
- Zustand state management for cart persistence.
- Toast notifications for add-to-cart actions.

## Tech Stack
- **Framework:** Next.js
- **Styling:** TailwindCSS
- **State Management:** Zustand
- **Icons:** Lucide Icons
- **API:** [DummyJSON Products API](https://dummyjson.com/docs/products)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextjs-product-app.git
   cd nextjs-product-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure
```
nextjs-product-app/
├── components/        # Reusable components
├── pages/             # Application routes
│   ├── index.tsx      # Home page (product listing)
│   ├── products/      # Product-related pages
│   │   ├── index.tsx  # Product list page
│   │   ├── [id].tsx   # Product details page
│   ├── cart.tsx       # Cart page (not separate in this case)
├── store/             # Zustand state management
├── styles/            # Global styles
├── public/            # Static assets
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Configuration
If using images from external sources, make sure to update `next.config.js`:
```js
module.exports = {
  images: {
    domains: ['cdn.dummyjson.com'],
  },
};
```

## Usage
1. Navigate to `/products` to view available products.
2. Click on a product to see details.
3. Add the product to the cart and adjust the quantity.
4. The cart is visible on the product details page.
5. Clicking "Go to Cart" redirects to the cart overview (same page in this case).

## Deployment
To deploy the app:
```bash
npm run build
npm start
```

## License
This project is licensed under the MIT License.

---

Happy coding! 🚀

