import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaShoppingCart,
} from "react-icons/fa";

import useStore from "../store/useStore";

function Cart() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const increaseQuantity = useStore(
    (state) => state.increaseQuantity
  );
  const decreaseQuantity = useStore(
    (state) => state.decreaseQuantity
  );
  const clearCart = useStore((state) => state.clearCart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="page-section">
        <div className="empty-cart">
          <FaShoppingCart className="empty-cart-icon" />
          <h2>Your cart is empty</h2>
          <p>Add an item from the catalog to begin your adventure.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Selected equipment</p>
        <h2>Shopping Cart</h2>
        <p>Review your adventure supplies before checkout.</p>
      </div>

      <div className="cart-container">
        {cart.map((item) => (
          <article className="cart-item" key={item.id}>
            <div className="cart-item-icon">{item.icon}</div>

            <div className="cart-item-info">
              <h3>{item.name}</h3>

              <p>${item.price.toFixed(2)} each</p>
            </div>

            <div className="quantity-controls">
              <button
                type="button"
                onClick={() => decreaseQuantity(item.id)}
                aria-label={`Decrease ${item.name} quantity`}
              >
                <FaMinus />
              </button>

              <span>{item.quantity}</span>

              <button
                type="button"
                onClick={() => increaseQuantity(item.id)}
                aria-label={`Increase ${item.name} quantity`}
              >
                <FaPlus />
              </button>
            </div>

            <strong>
              ${(item.price * item.quantity).toFixed(2)}
            </strong>

            <button
              type="button"
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
              aria-label={`Remove ${item.name}`}
            >
              <FaTrash />
            </button>
          </article>
        ))}

        <div className="cart-summary">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <button
            type="button"
            className="clear-cart-button"
            onClick={clearCart}
          >
            <FaTrash />
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;