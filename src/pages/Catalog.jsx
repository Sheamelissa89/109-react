import { getProducts } from "../services/dataService";
import useStore from "../store/useStore";
import { useState } from "react";

function Catalog() {
  const products = getProducts();
  const addToCart = useStore((state) => state.addToCart);
  const [addedId, setAddedId] = useState(null);

  return (
    <main className="page-container">
      <section className="page-heading">
        <span className="eyebrow">Atlas Adventure Shop</span>
        <h1>Explore the Catalog</h1>
        <p>
          Gather magical tools, supplies, and treasures for your next
          adventure.
        </p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-icon" aria-hidden="true">
              {product.icon}
            </div>

            <h2>{product.name}</h2>
            <p>{product.description}</p>

            <div className="product-card-footer">
              <strong>${product.price.toFixed(2)}</strong>

              <button
                className="primary-button"
                onClick={() => {
                  addToCart(product);
                  setAddedId(product.id);

                  setTimeout(() => {
                    setAddedId(null);
                }, 1200);
              }}
            >
  {addedId === product.id ? "👍 Added!" : "Add to Cart"}
</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Catalog;