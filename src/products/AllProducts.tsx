interface iProduct {
  title: string;
  price: number;
  seller: string;
}

interface iList {
  products: iProduct[];
}

export default function AllProducts({ products }: iList) {
  return (
    <>
      {products.length === 0 && <h5>No products available!</h5>}

      <div className="d-flex flex-wrap">
        {products.map((product, i) => (
          <div key={i} className="border rounded p-4 shrink">
            <h5>{product.title}</h5>
            <p className="text-warning mb-0">BDT {product.price}/=</p>
            <small className="text-light">By: {product.seller}</small>
          </div>
        ))}
      </div>
    </>
  );
}
