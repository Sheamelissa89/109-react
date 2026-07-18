import { useState } from "react";

function Admin() {
  const [couponForm, setCouponForm] = useState({
    code: "",
    discount: "",
  });

  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const [coupons, setCoupons] = useState([]);
  const [products, setProducts] = useState([]);

  function handleCouponChange(event) {
    const { name, value } = event.target;

    setCouponForm({
      ...couponForm,
      [name]: value,
    });
  }

  function handleProductChange(event) {
    const { name, value } = event.target;

    setProductForm({
      ...productForm,
      [name]: value,
    });
  }

  function addCoupon(event) {
    event.preventDefault();

    if (!couponForm.code.trim() || !couponForm.discount) {
      return;
    }

    const newCoupon = {
      id: crypto.randomUUID(),
      code: couponForm.code.trim().toUpperCase(),
      discount: Number(couponForm.discount),
    };

    setCoupons([...coupons, newCoupon]);

    setCouponForm({
      code: "",
      discount: "",
    });
  }

  function addProduct(event) {
    event.preventDefault();

    if (
      !productForm.name.trim() ||
      !productForm.price ||
      !productForm.category.trim()
    ) {
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(),
      name: productForm.name.trim(),
      price: Number(productForm.price),
      category: productForm.category.trim(),
      image: productForm.image.trim(),
    };

    setProducts([...products, newProduct]);

    setProductForm({
      name: "",
      price: "",
      category: "",
      image: "",
    });
  }

  function deleteCoupon(couponId) {
    const updatedCoupons = coupons.filter(
      (coupon) => coupon.id !== couponId
    );

    setCoupons(updatedCoupons);
  }

  function deleteProduct(productId) {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );

    setProducts(updatedProducts);
  }

  return (
    <main className="admin-page container py-5">
        
      <section className="admin-hero text-center mb-5">
        <p className="text-uppercase fw-semibold mb-2">
          Atlas Adventure Shop
        </p>

        <h1 className="display-5 fw-bold">Admin Dashboard</h1>

        <p className="lead mb-0">
          Create promotional coupons and manage products from one place.
        </p>
      </section>

      <div className="row g-4">
        {/* Coupon Section */}
        <section className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h2 className="h3 mb-1">Coupon Manager</h2>
                  <p className="text-body-secondary mb-0">
                    Create discounts for your customers.
                  </p>
                </div>

                <span className="badge text-bg-primary rounded-pill">
                  {coupons.length}
                </span>
              </div>

              <form onSubmit={addCoupon}>
                <div className="mb-3">
                  <label htmlFor="couponCode" className="form-label">
                    Coupon code
                  </label>

                  <input
                    id="couponCode"
                    className="form-control"
                    type="text"
                    name="code"
                    value={couponForm.code}
                    onChange={handleCouponChange}
                    placeholder="Example: HERO20"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="discount" className="form-label">
                    Discount percentage
                  </label>

                  <div className="input-group">
                    <input
                      id="discount"
                      className="form-control"
                      type="number"
                      name="discount"
                      value={couponForm.discount}
                      onChange={handleCouponChange}
                      placeholder="20"
                      min="1"
                      max="100"
                      required
                    />

                    <span className="input-group-text">%</span>
                  </div>
                </div>

                <button className="btn btn-primary w-100" type="submit">
                  Create Coupon
                </button>
              </form>

              <hr className="my-4" />

              <h3 className="h5">Available Coupons</h3>

              {coupons.length === 0 ? (
                <p className="text-body-secondary">
                  No coupons have been created yet.
                </p>
              ) : (
                <div className="list-group">
                  {coupons.map((coupon) => (
                    <div
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={coupon.id}
                    >
                      <div>
                        <strong>{coupon.code}</strong>
                        <div className="small text-body-secondary">
                          {coupon.discount}% discount
                        </div>
                      </div>

                      <button
                        className="btn btn-outline-danger btn-sm"
                        type="button"
                        onClick={() => deleteCoupon(coupon.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h2 className="h3 mb-1">Product Manager</h2>
                  <p className="text-body-secondary mb-0">
                    Add new items to the adventure shop.
                  </p>
                </div>

                <span className="badge text-bg-success rounded-pill">
                  {products.length}
                </span>
              </div>

              <form onSubmit={addProduct}>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product name
                  </label>

                  <input
                    id="productName"
                    className="form-control"
                    type="text"
                    name="name"
                    value={productForm.name}
                    onChange={handleProductChange}
                    placeholder="Example: Enchanted Compass"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productPrice" className="form-label">
                      Price
                    </label>

                    <div className="input-group">
                      <span className="input-group-text">$</span>

                      <input
                        id="productPrice"
                        className="form-control"
                        type="number"
                        name="price"
                        value={productForm.price}
                        onChange={handleProductChange}
                        placeholder="24.99"
                        min="0"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="productCategory" className="form-label">
                      Category
                    </label>

                    <input
                      id="productCategory"
                      className="form-control"
                      type="text"
                      name="category"
                      value={productForm.category}
                      onChange={handleProductChange}
                      placeholder="Adventure Gear"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="productImage" className="form-label">
                    Image URL
                  </label>

                  <input
                    id="productImage"
                    className="form-control"
                    type="url"
                    name="image"
                    value={productForm.image}
                    onChange={handleProductChange}
                    placeholder="https://example.com/product.jpg"
                  />
                </div>

                <button className="btn btn-success w-100" type="submit">
                  Add Product
                </button>
              </form>

              <hr className="my-4" />

              <h3 className="h5">Current Products</h3>

              {products.length === 0 ? (
                <p className="text-body-secondary">
                  No products have been created yet.
                </p>
              ) : (
                <div className="row g-3">
                  {products.map((product) => (
                    <div className="col-12" key={product.id}>
                      <article className="card product-admin-card">
                        <div className="row g-0 align-items-center">
                          {product.image && (
                            <div className="col-4">
                              <img
                                className="img-fluid rounded-start product-admin-image"
                                src={product.image}
                                alt={product.name}
                              />
                            </div>
                          )}

                          <div className={product.image ? "col-8" : "col-12"}>
                            <div className="card-body">
                              <div className="d-flex justify-content-between gap-3">
                                <div>
                                  <h4 className="h6 card-title mb-1">
                                    {product.name}
                                  </h4>

                                  <p className="small text-body-secondary mb-1">
                                    {product.category}
                                  </p>

                                  <strong>
                                    ${product.price.toFixed(2)}
                                  </strong>
                                </div>

                                <button
                                  className="btn btn-outline-danger btn-sm align-self-start"
                                  type="button"
                                  onClick={() => deleteProduct(product.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Admin;