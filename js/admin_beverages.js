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

// Control product display
let listProductHTML = document.querySelector(".listProduct");
let listCartHTML = document.querySelector(".listCart");
let iconCartSpan = document.querySelector(".bi-cart");
let listProducts = [];
let carts = [];

const initApp = () => {
  loadData("json/products6.json");
};

initApp();

const addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.dataset.id = product.id;
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
    });
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

  //============================================

  //============================================
};

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
