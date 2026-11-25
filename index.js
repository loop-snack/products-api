const express = require('express');
const app = express();

const products = [];
for (let i = 1; i <= 100; i++) {
  products.push({
    id: i,
    name: `Product ${i}`,
    price: i * 10,
    category: i % 2 === 0 ? 'Electronics' : 'Books'
  });
}

app.get('/', (req, res) => {
  res.send('Products API. Go to /api/products');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.listen(3000, () => console.log('Server running on port 3000'));