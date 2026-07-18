import Product from "../components/Product";
import products from "../data/products";

function Catalog() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Adventure supplies</p>
        <h2>Catalog</h2>
        <p>
          Browse equipment designed to support every type of journey.
        </p>
      </div>

      <div className="catalog-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Catalog;