let cart = JSON.parse(localStorage.getItem("cart")) || [];

const updateCartStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const renderCart = () => {
  const grouped = cart.reduce((acc, item) => {
    const key = item.name;
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 };
    } else {
      acc[key].quantity++;
    }
    return acc;
  }, {});

  const container = document.getElementById("cartContainer");
  const summary = document.getElementById("cartSummary");
  container.innerHTML = "";

  const groupedItems = Object.values(grouped);
  if (groupedItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty. Go add something yummy! 🍓</p>";
    summary.innerHTML = "";
    return;
  }

  groupedItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
      <div class="item-quantity">
        <button onclick="changeQty('${item.name}', -1)">−</button>
        <span id="qty-${item.name}">${item.quantity}</span>
        <button onclick="changeQty('${item.name}', 1)">+</button>
      </div>
    `;
    container.appendChild(itemDiv);
  });

  const total = groupedItems.reduce((sum, item) => {
    return sum + (parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity);
  }, 0).toFixed(2);

  summary.innerHTML = `
    <div class="total"><strong>Total: Rs.${total}</strong></div>
    <button class="checkout-btn">Proceed to Checkout</button>
  `;
};

window.changeQty = (name, delta) => {
  const index = cart.findIndex(item => item.name === name);
  if (delta === 1 && index !== -1) {
    const item = cart[index];
    cart.push({ ...item });
  } else if (delta === -1) {
    const removeIndex = cart.findIndex(item => item.name === name);
    if (removeIndex !== -1) cart.splice(removeIndex, 1);
  }
  updateCartStorage();
  renderCart();
};

renderCart();
