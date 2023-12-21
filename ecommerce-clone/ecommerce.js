// ! variables

const itemContainer = document.getElementById("itemContainer");
let itemString = "";
let storeItems;
let cartItems = [];

let fullStar = '<i class="fa-solid fa-star"></i>';
let outlineStar = '<i class="fa-regular fa-star"></i>';

let item = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
};

// ! functions

const fetchItem = () => {
    storeItems = fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(items => {
            for (let item of items) {
                // if title too long add ...
                const maxTitleLength = 45;
                let shortTitle = item.title;
                if (shortTitle.length > maxTitleLength) {
                    shortTitle = shortTitle.substring(0, maxTitleLength) + "...";
                }

                // convert numerical rating to star
                let starRating = "";
                for (let i = 1; i <= 5; i++) {
                    if (i < item.rating.rate) {
                        starRating += fullStar;
                    } else {
                        starRating += outlineStar;
                    }
                }

                // append to string
                itemString += `
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="item-card card shadow">
                        <img src="${item.image}" alt="" class="item-image">
                        <h5 class="item-title">${shortTitle}</h5>
                        <p class="item-price">Rs. ${item.price}</p>
                        <p class="item-rating"><span class="star-rating">${starRating}</span> (${item.rating.count})</p>
                        <button class="btn btn-primary cart-button" onclick="addToCart(${item.id});"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
                    </div>
                </div>
                `;
            }
            itemContainer.innerHTML = itemString;
        })
        .catch(err => {
            console.log(err);
        });
};

const addToCart = itemId => {
    cartItems.push({
        id: itemId,
        quantity: 1,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert('Item added to cart');
};

// ! driver code

fetchItem();
