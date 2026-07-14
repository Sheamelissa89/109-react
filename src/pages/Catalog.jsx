const products = [
  {
    id: 1,
    icon: "🧪",
    name: "Healing Potion",
    description: "Restores energy after a difficult journey.",
    price: 12.99,
  },
  {
    id: 2,
    icon: "🧭",
    name: "Enchanted Compass",
    description: "Helps travelers find their intended destination.",
    price: 24.99,
  },
  {
    id: 3,
    icon: "🏮",
    name: "Crystal Lantern",
    description: "Provides light through forests and forgotten ruins.",
    price: 19.99,
  },
  {
    id: 4,
    icon: "📜",
    name: "Ancient Map",
    description: "Reveals landmarks, pathways, and hidden locations.",
    price: 16.5,
  },
  {
    id: 5,
    icon: "🎒",
    name: "Explorer Backpack",
    description: "Stores supplies without slowing down the traveler.",
    price: 34.99,
  },
  {
    id: 6,
    icon: "📖",
    name: "Adventure Journal",
    description: "Records quests, discoveries, and important decisions.",
    price: 14.99,
  },
];

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
          <article className="product-card" key={product.id}>
            <div className="product-icon">{product.icon}</div>

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <strong>${product.price.toFixed(2)}</strong>

            <button type="button">View Item</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Catalog;