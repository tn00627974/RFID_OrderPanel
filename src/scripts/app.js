const menuItems = [
    { id: 1, name: "Big Mac", price: 3.99 },
    { id: 2, name: "French Fries", price: 1.99 },
    { id: 3, name: "McChicken", price: 4.29 },
    { id: 4, name: "McFlurry", price: 2.49 },
];

let order = [];

function renderMenu() {
    const menuContainer = document.getElementById("menu");
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="addToOrder(${item.id})">Add to Order</button>
        `;
        menuContainer.appendChild(menuItem);
    });
}

function addToOrder(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (item) {
        order.push(item);
        updateOrderDisplay();
    }
}

function updateOrderDisplay() {
    const orderContainer = document.getElementById("order");
    orderContainer.innerHTML = "";
    order.forEach(item => {
        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
        `;
        orderContainer.appendChild(orderItem);
    });
    const total = order.reduce((sum, item) => sum + item.price, 0);
    const totalDisplay = document.createElement("div");
    totalDisplay.classList.add("order-total");
    totalDisplay.innerHTML = `<h4>Total: $${total.toFixed(2)}</h4>`;
    orderContainer.appendChild(totalDisplay);
}

function submitOrder() {
    if (order.length === 0) {
        alert("Please add items to your order before submitting.");
        return;
    }
    alert("Order submitted! Thank you for your purchase.");
    order = [];
    updateOrderDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    document.getElementById("submit-button").addEventListener("click", submitOrder);
});