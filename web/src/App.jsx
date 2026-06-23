import { useEffect, useState } from "react";
 
const API_URL = import.meta.env.API_URL || "http://localhost:5000";
 
export default function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => setError("Impossible de joindre l'API"));
  }, []);
 
  return (
    <main style={{ fontFamily: "system-ui", maxWidth: 800, margin: "2rem auto" }}>
      <h1>Catalogue produits</h1>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: "1rem" }}>
            <h3>{p.name}</h3>
            <p>{p.price.toFixed(2)} €</p>
            <p style={{ color: p.stock > 0 ? "green" : "crimson" }}>
              {p.stock > 0 ? `En stock (${p.stock})` : "Rupture"}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}