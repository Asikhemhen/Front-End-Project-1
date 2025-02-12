import data from "./data.json";

let cart = data.cart || []; // Ensure cart exists

function AddProduct(product) {
  cart = [...cart, product];
  data.cart.push(product);
}
