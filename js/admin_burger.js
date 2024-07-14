function activateButton(button) {
  // Your existing activateButton function code
}

function activateButton(value) {
  console.log("Clicked value:", value);
}

//==========================================

function loadData(fileName) {
  fetch(fileName)
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;
      addDataToHTML();
    })
    .catch((error) => console.error("Error loading JSON:", error));
}

//=========================62573637837878978389839

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}

//=========================62573637837878978389839

// Button changer
// function activateButton(clickedButton) {
//   var buttons = document.querySelectorAll(".header-button .btn");
//   buttons.forEach(function (button) {
//     button.classList.remove("btn-danger");
//     button.classList.add("btn-outline-danger");
//   });

//   clickedButton.classList.remove("btn-outline-danger");
//   clickedButton.classList.add("btn-danger");

// var buttonValue = clickedButton.value;
// loadData("json/" + buttonValue + ".json");
//}

// New part
// document.addEventListener("DOMContentLoaded", function () {
//   var beveragesLink = document.getElementById("beveragesLink");
//   var productValue = beveragesLink.getAttribute("value");

//   if (beveragesLink) {
//     beveragesLink.addEventListener("click", function (event) {
//       event.preventDefault();
//       loadData("json/" + productValue + ".json");
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var beveragesLink = document.querySelector(".nav-item2 a");

//   beveragesLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     var allNavLinks = document.querySelectorAll(".nav-link");
//     allNavLinks.forEach(function (link) {
//       link.classList.remove("active");
//     });

//     beveragesLink.classList.add("active");
//     var navItem1 = document.querySelector(".nav-item1 .nav-link");
//     navItem1.style.setProperty("--bs-nav-link-color", "rgb(171, 171, 171)");
//   });
// });

// Control product display
let listProductHTML = document.querySelector(".listProduct");
let listCartHTML = document.querySelector(".listCart");
let iconCartSpan = document.querySelector(".bi-cart");
let listProducts1 = [
  {
    id: "B1001",
    name: "Classic Burger",
    price: 750.0,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/1.png",
  },
  {
    id: "B1002",
    name: "Classic Burger",
    price: 1500.0,
    discount: 15,
    category: "Burgers",
    portion: "Large",
    image: "images/products/item_images/burger/1.png",
  },
  {
    id: "B1003",
    name: "Turkey Burger",
    price: 1600.0,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/2.png",
  },
  {
    id: "B1004",
    name: "Chicken Burger",
    price: 1400.0,
    discount: 0,
    category: "Burgers",
    portion: "Large",
    image: "images/products/item_images/burger/3.png",
  },
  {
    id: "B1005",
    name: "Chicken Burger",
    price: 800.0,
    discount: 20,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/3.png",
  },
  {
    id: "B1006",
    name: "Cheese Burger",
    price: 1000.0,
    discount: 0,
    category: "Burgers",
    portion: "Large",
    image: "images/products/item_images/burger/4.png",
  },
  {
    id: "B1007",
    name: "Cheese Burger",
    price: 600.0,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/4.png",
  },
  {
    id: "B1008",
    name: "Bacon Burger",
    price: 650.0,
    discount: 15,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/5.png",
  },
  {
    id: "B1009",
    name: "Shawarma Burger",
    price: 800.0,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/6.png",
  },
  {
    id: "B1010",
    name: "Olive Burger",
    price: 1800.0,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/7.png",
  },
  {
    id: "B1012",
    name: "Double-Cheese Burger",
    price: 1250.0,
    discount: 20,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/8.png",
  },
  {
    id: "B1013",
    name: "Crispy Chicken Burger",
    price: 1200.0,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/9.png",
  },
  {
    id: "B1014",
    name: "Crispy Chicken Burger",
    price: 1600.0,
    discount: 10,
    category: "Burgers",
    portion: "Large",
    image: "images/products/item_images/burger/9.png",
  },
  {
    id: "B1015",
    name: "Paneer Burger",
    price: 900.0,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/10.png",
  },
];
let carts = [];

const addDataToHTML = () => {
  listProductHTML.innerHTML = ""; // Clear existing content
  for (let i = 0; i < listProducts1.length; i++) {
    // Use listProducts1 instead of listProducts
    let product = listProducts1[i]; // Access each product object
    let newProduct = document.createElement("div");
    newProduct.classList.add("item");
    newProduct.dataset.id = product.id; // Use product.id instead of product.id
    newProduct.innerHTML = `
        <img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="discount">${product.discount}%</div>
        <div class="portion">${product.portion}</div>
        <div class="price">Rs.${product.price}</div>
        <div>
        <button class="addCart"><i class="bi bi-pencil"></i></button>
        <button class="addCart"><i class="bi bi-trash3"></i></button>
        </div>`;
    listProductHTML.appendChild(newProduct);
  }

  for (let i = 0; i < 1; i++) {
    let product = {
      id: 1,
      name: "Product Name",
      discount: "product discount",
      portion: "Large",
      price: "Price",
      image: "images/add.png",
    };

    let newProduct = document.createElement("div");
    newProduct.classList.add("item");
    newProduct.dataset.id = product.id;
    newProduct.innerHTML = `
    <img src="${product.image}" class="add-image" alt="">
    <h2>${product.name}</h2>
    <div class="discount">${product.discount}%</div>
    <div class="portion">${product.portion}</div>
    <div class="price">Rs ${product.price}</div>
    <button class="add-item">Add Item</button>`;

    listProductHTML.appendChild(newProduct);
  }
};

const initApp = () => {
  addDataToHTML();
};

initApp();

//============================================

// Add event listener for add-item button
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".listProduct")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("add-item")) {
        redirectToPage("item_add.html"); // Change 'newPage.html' to your desired URL
      }
    });
});

// Redirect function
function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}

//============================================

listProductHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id);
    showToast(successMsg);
  }
});

const addToCart = (product_id) => {
  let positionThisProductInCart = carts.findIndex(
    (value) => value.product_id == product_id
  );
  if (carts.length <= 0) {
    carts = [{ product_id: product_id, quantity: 1 }];
  } else if (positionThisProductInCart < 0) {
    carts.push({ product_id: product_id, quantity: 1 });
  } else {
    carts[positionThisProductInCart].quantity += 1;
  }
  addCartToHTML();
  addCartToMemory();
};

const addCartToHTML = () => {
  listCartHTML.innerHTML = "";
  let totalQuantity = 0;
  if (carts.length > 0) {
    carts.forEach((list) => {
      totalQuantity += list.quantity;
      let newCart = document.createElement("div");
      newCart.classList.add("item");
      newCart.dataset.id = list.product_id;

      let positionProduct = listProducts.findIndex(
        (value) => value.id == list.product_id
      );
      let info = listProducts[positionProduct];
      let total = info.price * list.quantity;

      newCart.innerHTML = `
        <div class="cart-row">
          <div class="name">${info.name + " (" + info.portion + ") "}</div>

          <div class="totalPrice">Rs.${total}</div>
        </div>`;

      listCartHTML.appendChild(newCart);
    });
    updateView();
  }
  cartCount.innerHTML = totalQuantity;
  //attachQuantityHandlers();
};

// const attachQuantityHandlers = () => {
//   document.querySelectorAll(".minus").forEach((element) => {
//     element.addEventListener("click", (event) => {
//       let product_id = event.target.parentElement.parentElement.dataset.id;
//       changeQuantity(product_id, "minus");
//     });
//   });

//   document.querySelectorAll(".plus").forEach((element) => {
//     element.addEventListener("click", (event) => {
//       let product_id = event.target.parentElement.parentElement.dataset.id;
//       changeQuantity(product_id, "plus");
//     });
//   });
// };

const addCartToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(carts));
};

const changeQuantity = (product_id, type) => {
  let positionItemInCart = carts.findIndex(
    (value) => value.product_id == product_id
  );
  if (positionItemInCart >= 0) {
    switch (type) {
      case "plus":
        carts[positionItemInCart].quantity += 1;
        break;
      default:
        let valueChange = carts[positionItemInCart].quantity - 1;
        if (valueChange > 0) {
          carts[positionItemInCart].quantity = valueChange;
        } else {
          carts.splice(positionItemInCart, 1);
          updateView();
          if (carts.length == 0) {
            document.querySelector(".cartTab").classList.toggle("showCart");
          }
        }
        break;
    }
  }
  addCartToHTML();
  addCartToMemory();
};

const updateView = () => {
  let grossAmount = document.getElementById("val_1");
  let discVal = document.getElementById("val_2");
  let total = document.getElementById("val_3");

  let totalAmount = 0;
  let totalDiscount = 0;
  if (carts.length > 0) {
    carts.forEach((cart) => {
      let positionProduct = listProducts.findIndex(
        (value) => value.id == cart.product_id
      );
      let info = listProducts[positionProduct];
      totalAmount += cart.quantity * info.price;
      totalDiscount += cart.quantity * info.price * (info.discount / 100);
    });
  } else {
    grossAmount.innerHTML = 0;
    discVal.innerHTML = 0;
  }
  grossAmount.innerHTML = "Rs. " + totalAmount;
  discVal.innerHTML = "Rs. " + totalDiscount;
  Payment.innerHTML =
    "Payment&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
    (totalAmount - totalDiscount);
};

let toastBox = document.getElementById("toastBox");
let successMsg =
  '<span class="material-symbols-outlined">check_circle</span> Added to cart';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
