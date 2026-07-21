import useStore from "../store/useStore";

function Cart() {
  const cart = useStore((state) => state.cart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="page-container">
        <section className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h1>Your Cart Is Empty</h1>
          <p>Add something magical from the catalog to begin your adventure.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="page-container">
      <section className="page-heading">
        <span className="eyebrow">Your Selections</span>
        <h1>Adventure Cart</h1>
        <p>Review your products, quantities, and total before checkout.</p>
      </section>

      <section className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <div className="cart-item-icon" aria-hidden="true">
                {item.icon}
              </div>

              <div className="cart-item-information">
                <h2>{item.name}</h2>
                <p>Price per item: ${item.price.toFixed(2)}</p>

                <div className="quantity-controls">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <span>Quantity: {item.quantity}</span>

                  <button
                    type="button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-total">
                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>

                <button
                  className="remove-button"
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Products</span>
            <span>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <div className="summary-row total-row">
            <span>Total Amount</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <button className="checkout-button" type="button">
            Proceed to Checkout
          </button>

          <button
            className="clear-cart-button"
            type="button"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </aside>
      </section>
    </main>
  );
}

export default Cart;