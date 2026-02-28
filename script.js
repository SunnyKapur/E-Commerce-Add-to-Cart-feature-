let productsData = [{
        "productname": "Wireless Headphones",
        "category": "Electronics",
        "price": 2999,
        "imageurls": [
            "https://picsum.photos/seed/wireless-headphones/400/400"
        ]
    },
    {
        "productname": "Smart Watch",
        "category": "Electronics",
        "price": 4999,
        "imageurls": [
            "https://picsum.photos/seed/smart-watch/400/400"
        ]
    },
    {
        "productname": "Gaming Mouse",
        "category": "Electronics",
        "price": 1499,
        "imageurls": [
            "https://picsum.photos/seed/gaming-mouse/400/400"
        ]
    },
    {
        "productname": "Mechanical Keyboard",
        "category": "Electronics",
        "price": 3499,
        "imageurls": [
            "https://picsum.photos/seed/mechanical-keyboard/400/400"
        ]
    },
    {
        "productname": "Bluetooth Speaker",
        "category": "Electronics",
        "price": 2599,
        "imageurls": [
            "https://picsum.photos/seed/bluetooth-speaker/400/400"
        ]
    },
    {
        "productname": "Running Shoes",
        "category": "Fashion",
        "price": 3999,
        "imageurls": [
            "https://picsum.photos/seed/running-shoes/400/400"
        ]
    },
    {
        "productname": "Leather Wallet",
        "category": "Fashion",
        "price": 999,
        "imageurls": [
            "https://picsum.photos/seed/leather-wallet/400/400"
        ]
    },
    {
        "productname": "Men's Sunglasses",
        "category": "Fashion",
        "price": 1799,
        "imageurls": [
            "https://picsum.photos/seed/mens-sunglasses/400/400"
        ]
    },
    {
        "productname": "Casual Backpack",
        "category": "Fashion",
        "price": 2299,
        "imageurls": [
            "https://picsum.photos/seed/casual-backpack/400/400"
        ]
    },
    {
        "productname": "Cotton T-Shirt",
        "category": "Fashion",
        "price": 799,
        "imageurls": [
            "https://picsum.photos/seed/cotton-tshirt/400/400"
        ]
    },
    {
        "productname": "Office Chair",
        "category": "Furniture",
        "price": 6999,
        "imageurls": [
            "https://picsum.photos/seed/office-chair/400/400"
        ]
    },
    {
        "productname": "Wooden Study Table",
        "category": "Furniture",
        "price": 8999,
        "imageurls": [
            "https://picsum.photos/seed/wooden-study-table/400/400"
        ]
    },
    {
        "productname": "Table Lamp",
        "category": "Furniture",
        "price": 1599,
        "imageurls": [
            "https://picsum.photos/seed/table-lamp/400/400"
        ]
    },
    {
        "productname": "Wall Clock",
        "category": "Furniture",
        "price": 1299,
        "imageurls": [
            "https://picsum.photos/seed/wall-clock/400/400"
        ]
    },
    {
        "productname": "Bookshelf",
        "category": "Furniture",
        "price": 5499,
        "imageurls": [
            "https://picsum.photos/seed/bookshelf/400/400"
        ]
    },
    {
        "productname": "Coffee Mug",
        "category": "Home & Kitchen",
        "price": 399,
        "imageurls": [
            "https://picsum.photos/seed/coffee-mug/400/400"
        ]
    },
    {
        "productname": "Non-Stick Frying Pan",
        "category": "Home & Kitchen",
        "price": 1899,
        "imageurls": [
            "https://picsum.photos/seed/non-stick-frying-pan/400/400"
        ]
    },
    {
        "productname": "Electric Kettle",
        "category": "Home & Kitchen",
        "price": 2199,
        "imageurls": [
            "https://picsum.photos/seed/electric-kettle/400/400"
        ]
    },
    {
        "productname": "Bed Pillow",
        "category": "Home & Kitchen",
        "price": 899,
        "imageurls": [
            "https://picsum.photos/seed/bed-pillow/400/400"
        ]
    },
    {
        "productname": "Water Bottle",
        "category": "Home & Kitchen",
        "price": 599,
        "imageurls": [
            "https://picsum.photos/seed/water-bottle/400/400"
        ]
    }
];

let sum = '';
productsData.forEach(function (elem, idx) {
    sum = sum + `<div class="card">
                    <div class="img">
                        <img src="${elem.imageurls}" alt="">
                    </div>
                    <div class="details">
                        <h2>Name: <span>${elem.productname}</span></h2>
                        <h4>Category: ${elem.category}</h4>
                        <h3>Price: ₹${elem.price}</h3>
                    </div>
                    <div class="btns">
                    <button>Remove</button>
                        <button id="${idx}">Add To Cart</button>
                    </div>
                </div>`
})

let section = document.querySelector('section')

section.innerHTML = sum

let cartScreen = document.querySelector('.cart_screen')
let cartBtn = document.querySelector('.cart')
let homeBtn = document.querySelector('.home')


cartBtn.addEventListener('click', function () {
    cartScreen.style.display = 'flex'
    document.body.style.overflow = "hidden";
})
homeBtn.addEventListener('click', function () {
    cartScreen.style.display = 'none';
    document.body.style.overflow = "auto";
})


let cartData = []


function renderCartScreen() {
    let cartUi = ""
    cartData.forEach(function (elem, idx) {
        cartUi = cartUi + `<div class="card">
                    <div class="img">
                        <img src="${elem.imageurls}" alt="">
                    </div>
                    <div class="details">
                        <h2>Name: <span>${elem.productname}</span></h2>
                        <h4>Category: ${elem.category}</h4>
                        <h3>Price: ₹${elem.price}</h3>
                    </div>
                    <div class="btns">
                        <button onClick="removeToCart(${idx})">Remove</button>
                    </div>
                </div>`
    })

    cartScreen.innerHTML = cartUi;
}


section.addEventListener('click', function (dets) {
    if (!dets.target.id) {
        return;
    }

    let clickCart = productsData.find(function (elem, index) {
        return index == dets.target.id;
    })

    cartData.push(clickCart);
    renderCartScreen();
    // alert('add to cart');
})


function removeToCart(id){
   let itemRemove =  cartData.filter(function(elem, index){
    return index !== id
    })
    
    cartData = itemRemove

    renderCartScreen()
}