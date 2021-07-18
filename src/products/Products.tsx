import { useState } from "react";
import AddProduct from "./AddProduct";
import AllProducts from "./AllProducts";
import RemoveProduct from "./RemoveProduct";

interface iProduct {
  title: string;
  price: number;
  seller: string;
}

export default function Products() {
  const [tab, setTab] = useState(0);
  const [products, addProduct] = useState<iProduct[]>([]);

  return (
    <section id="holder">
      <div className="buttons mb-4">
        <button
          onClick={() => setTab(0)}
          className={`btn me-3 btn-${
            tab === 0 ? "warning" : "outline-warning"
          }`}
        >
          All Products
        </button>

        <button
          onClick={() => setTab(1)}
          className={`btn me-3 btn-${
            tab === 1 ? "warning" : "outline-warning"
          }`}
        >
          Add Product
        </button>

        <button
          onClick={() => setTab(2)}
          className={`btn me-3 btn-${
            tab === 2 ? "warning" : "outline-warning"
          }`}
        >
          Remove Product
        </button>
      </div>

      {tab === 0 && <AllProducts products={products} />}
      {tab === 1 && <AddProduct products={products} addProduct={addProduct} />}
      {tab === 2 && (
        <RemoveProduct products={products} addProduct={addProduct} />
      )}
    </section>
  );
}
