import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";
import products from "../data/products";
import useStore from "../store/useStore";

function ProductDetails() {
  const { productId } = useParams();
  const addToCart = useStore((state) => state.addToCart);

  const product = products.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return (
      <section className="page-section">
        <div className="page-heading">
          <h2>Product Not Found</h2>
          <p>The requested product could not be located.</p>

          <Link to="/catalog" className="product-button">
            <FaArrowLeft />
            Return to Catalog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="product-details">
        <div className="product-details-icon">
          {product.icon}
        </div>

        <div className="product-details-content">
          <p className="eyebrow">Adventure equipment</p>

          <h2>{product.name}</h2>

          <p>{product.details}</p>

          <strong className="product-details-price">
            ${product.price.toFixed(2)}
          </strong>

          <div className="product-details-actions">
            <Link to="/catalog" className="product-button view-button">
              <FaArrowLeft />
              Back to Catalog
            </Link>

            <button
              type="button"
              className="product-button cart-button"
              onClick={() => addToCart(product)}
            >
              <FaCartPlus />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;