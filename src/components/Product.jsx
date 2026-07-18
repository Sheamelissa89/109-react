import { Link } from "react-router-dom";
import { FaEye, FaCartPlus } from "react-icons/fa";
import useStore from "../store/useStore";

function Product({ product }) {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <article className="product-card">
      <div className="product-icon">{product.icon}</div>

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <strong>${product.price.toFixed(2)}</strong>

      <div className="product-actions">
        <Link
          to={`/product/${product.id}`}
          className="product-button view-button"
        >
          <FaEye />
          View Item
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
    </article>
  );
}

export default Product;