// ! variables

let cartContainer = document.getElementById("cartContainer");
let cartItems = [];
let cartItemsData;

// ! functions

const fetchLocalStorage = async () => {
    cartItemsData = [];
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
    for (const item of cartItems) {
        try {
            let response = await fetch(`https://fakestoreapi.com/products/${item.id}`);
            let data = await response.json();
            console.log(data);
            cartItemsData.push(data);
        } catch (err) {
            console.log(err);
        }
    }
};

const updateLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const updateCart = () => {
    console.log("updateCart");
    let cartString = "";
    let index = 1;

    for (let i in cartItemsData) {
        let itemData = cartItemsData[i];
        cartString += `
                <div class="cart-card border border-1 border-dark-subtle shadow rounded p-1 py-md-3 px-md-4 row">
                    <div class="cart-number col-1">${index++}</div>
                    <img src="${itemData.image}" class="cart-image col-2" width="40" height="40" alt="">
                    <div class="cart-title col-4">${itemData.title}</div>
                    <div class="cart-price col-1">Rs ${itemData.price}</div>
                    <div class="cart-title col-2">
                        <span class="btn btn-primary cart-subtract" onclick="decreaseQuantity(${itemData.id})">-</span>
                        <span class="cart-quantity"> ${cartItems[i].quantity} </span>
                        <span class="btn btn-primary cart-add" onclick="increaseQuantity(${itemData.id})">+</span>
                    </div>
                    <div class="col-2">
                        <div class="cart-delete btn btn-danger" onclick="deleteItem(${itemData.id})">Delete</div>
                    </div>
                </div>
            `;
    }
    cartContainer.innerHTML = cartString;
};

const deleteItem = id => {
    let itemToDelete = cartItems.filter(item => item.id === id);
    if (!confirm(`Are you sure you want to delete ${itemToDelete.title}`)) return;
    cartItems = cartItems.filter(item => item.id !== id);
    updateLocalStorage();
    fetchLocalStorage();
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

fetchLocalStorage().then(() => {
    updateCart();
});
