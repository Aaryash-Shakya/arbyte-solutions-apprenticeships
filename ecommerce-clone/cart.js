// ! variables

let cartContainer = document.getElementById("cartContainer");
let cartItems = [];

// ! functions

const fetchLocalStorage = () => {
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
};

const updateLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const updateCart = () => {
    let cartString = "";
    let index = 1;
    cartItems.forEach(item => {
        fetch(`https://fakestoreapi.com/products/${item.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                cartString += `
                <div class="cart-card border border-1 border-dark-subtle shadow-sm p-1 py-md-3 px-md-4 row">
                    <div class="cart-number col-1">${index++}</div>
                    <img src="${data.image}" class="cart-image col-2" width="40" height="40" alt="">
                    <div class="cart-title col-6">${data.title}</div>
                    <div class="cart-title col-2">
                        <span class="btn btn-primary cart-subtract" onclick="decreaseQuantity(${data.id})">-</span>
                        <span class="cart-quantity">${item.quantity}</span>
                        <span class="btn btn-primary cart-add" onclick="increaseQuantity(${data.id})">+</span>
                    </div>
                    <div class="cart-delete col-1 btn btn-danger" onclick="deleteItem(${data.id})">Delete</div>
                </div>
                `;
                cartContainer.innerHTML = cartString;
            })
            .catch(err => {
                console.log(err);
            });
    });
};

const deleteItem = id => {
    let itemToDelete = cartItems.filter(item => item.id === id);
    if (!confirm(`Are you sure you want to delete ${itemToDelete.title}`)) return;
    cartItems = cartItems.filter(item => item.id !== id);
    updateLocalStorage();
    updateCart();
};

const increaseQuantity = id => {
    cartItems = cartItems.map(item => {
        if (item.id === id) {
            // Create a new object with the updated quantity
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
    });

    updateLocalStorage();
    updateCart();
};

const decreaseQuantity = id => {
    cartItems = cartItems.map(item => {
        if (item.id === id) {
            if (item.quantity <= 1) {
                deleteItem(id);
            } else {
                return { ...item, quantity: item.quantity - 1 };
            }
            // Create a new object with the updated quantity
        }
        return item;
    });

    updateLocalStorage();
    updateCart();
};

// ! driver code

fetchLocalStorage();
updateCart();
