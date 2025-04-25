let products = [];
let editingProductIndex = -1;
let previousProductsState = [];

// Sample Products Data
// const sampleProducts = [
//   { name: 'Beans', quantity: '1000', price: 80000, stock: 50, description: '' },
//   { name: 'Soy beans', quantity: '3000', price: 30000, stock: 20, description: '' },
//   { name: 'Cow peas', quantity: '2000', price: 200000, stock: 100, description: '' },
//   { name: 'G-nuts', quantity: '1000', price: 45030, stock: 27800, description: '' },
//   { name: 'Maize grain', quantity: '20000', price: 67030, stock: 200, description: '' }
// ];

// Initialize with sample products
function loadProducts() {
  products = [...sampleProducts];
  savePreviousState();
  displayProducts();
}

function displayProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}(kgs)</td>
            <td>UGX${product.price}</td>
            <td>${product.stock}</td>
            <td>
               <button class="button" onclick="editProduct(${index})">Edit</button>
               <button class="button danger" onclick="deleteProduct(${index})">Delete</button>
            </td>
          `;
    productList.appendChild(row);
  });
}

// Save the previous state of products
function savePreviousState() {
  previousProductsState = JSON.parse(JSON.stringify(products)); // Create a deep copy
}

// Undo last changes (restore previous state)
function undoChanges() {
  if (previousProductsState.length > 0) {
    products = JSON.parse(JSON.stringify(previousProductsState)); // Restore previous state
    displayProducts();
  } else {
    alert('No changes to undo');
  }
}

// Search products by name
function searchProducts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
  products = filteredProducts;
  displayProducts();
}

// Show Add Product form
function showAddProductForm() {
  document.getElementById('add-edit-form').style.display = 'block';
  document.getElementById('form-title').textContent = 'Add Product';
  document.getElementById('product-form').reset();
  editingProductIndex = -1;
}

// Edit product
function editProduct(index) {
  savePreviousState();
  editingProductIndex = index;
  const product = products[index];

  document.getElementById('add-edit-form').style.display = 'block';
  document.getElementById('form-title').textContent = 'Edit Product';

  document.getElementById('product-name').value = product.name;
  document.getElementById('product-category').value = product.category;
  document.getElementById('product-price').value = product.price;
  document.getElementById('product-stock').value = product.stock;
  document.getElementById('product-description').value = product.description;
}

// Save product (add/edit)
document.getElementById('product-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('product-name').value;
  const category = document.getElementById('product-category').value;
  const price = parseFloat(document.getElementById('product-price').value);
  const stock = parseInt(document.getElementById('product-stock').value);
  const description = document.getElementById('product-description').value;

  if (editingProductIndex === -1) {
    // Add new product
    products.push({ name, category, price, stock, description });
  } else {
    // Edit existing product
    products[editingProductIndex] = { name, category, price, stock, description };
  }

  document.getElementById('add-edit-form').style.display = 'none';
  savePreviousState(); // Save the state after modification
  displayProducts();
});

// Delete product
function deleteProduct(index) {
  if (confirm('Are you sure you want to delete this product?')) {
    savePreviousState();
    products.splice(index, 1);
    displayProducts();
  }
}

// Cancel Add/Edit Product
function cancelAddEdit() {
  document.getElementById('add-edit-form').style.display = 'none';
}

// Load products on page load
loadProducts();
