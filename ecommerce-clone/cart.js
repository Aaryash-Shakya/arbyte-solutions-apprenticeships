let cartContainer = document.getElementById("cartContainer");
let cartItems;

let index = 1;
let cartString = "";

const fetchLocalStorage = () => {
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cartItems);
};

const updateCart = () => {
    cartItems.forEach(async item => {
        let data = fetch(`https://fakestoreapi.com/products/${item.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                cartString += `
                <div class="cart-card border border-1 border-dark-subtle shadow-sm p-1 py-md-3 px-md-4 row">
                    <p class="cart-number col-1">${index++}</p>
                    <img src="${data.image}" class="cart-image col-2" width="40" height="40" alt="">
                    <p class="cart-title col-4">${data.title}</p>
                    <div class="cart-title col-3">
                    <span class="btn btn-primary cart-subtract">-</span>
                    <span class="cart-quantity">${item.quantity}</span>
                    <span class="btn btn-primary cart-add">+</span>
                    </div>
                    <p class="cart-delete col-1 btn btn-danger">Delete</p>
                </div>
                `;
                console.log(cartString);
                cartContainer.innerHTML = cartString;
            })
            .catch(err => {
                console.log(err);
            });
    });
};

fetchLocalStorage();
updateCart();
