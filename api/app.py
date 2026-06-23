from flask import Flask, jsonify
from flask_cors import CORS
 
app = Flask(__name__)
CORS(app)  # autorise le front à appeler l'API
 
# Données mockées (en dur, pas de base de données)
PRODUCTS = [
    {"id": 1, "name": "Clavier mécanique", "price": 79.90, "stock": 12},
    {"id": 2, "name": "Souris ergonomique", "price": 45.00, "stock": 30},
    {"id": 3, "name": "Écran 27\" 4K",      "price": 329.00, "stock": 5},
    {"id": 4, "name": "Casque audio",       "price": 119.50, "stock": 18},
    {"id": 5, "name": "Webcam Full HD",     "price": 59.99, "stock": 10},
    {"id": 6, "name": "Micro fifine M28",   "price": 75.90, "stock": 20},
]
 
@app.route("/api/products")
def get_products():
    return jsonify(PRODUCTS)
 
@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})
 
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
