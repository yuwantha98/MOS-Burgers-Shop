const products = [
  {
    id: "B1001",
    name: "Classic Burger",
    price: 750,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/1.png",
  },
  {
    id: "B1002",
    name: "Classic Burger",
    price: 1500,
    discount: 15,
    category: "Burgers",
    portion: "Large",
    image: "images/products/item_images/burger/1.png",
  },
  {
    id: "B1003",
    name: "Turkey Burger",
    price: 1600,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/2.png",
  },
  {
    id: "B1004",
    name: "Chicken Burger",
    price: 1400,
    discount: 0,
    category: "Burgers",
    portion: "Large",
    image: "images/products/item_images/burger/3.png",
  },
  {
    id: "B1005",
    name: "Chicken Burger",
    price: 800,
    discount: 20,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/3.png",
  },
  {
    id: "B1006",
    name: "Cheese Burger",
    price: 1000,
    discount: 0,
    category: "Burgers",
    portion: "Large",
    image: "images/products/item_images/burger/4.png",
  },
  {
    id: "B1007",
    name: "Cheese Burger",
    price: 600,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/4.png",
  },
  {
    id: "B1008",
    name: "Bacon Burger",
    price: 650,
    discount: 15,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/5.png",
  },
  {
    id: "B1009",
    name: "Shawarma Burger",
    price: 800,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/6.png",
  },
  {
    id: "B1010",
    name: "Olive Burger",
    price: 1800,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/7.png",
  },
  {
    id: "B1012",
    name: "Double-Cheese Burger",
    price: 1250,
    discount: 20,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/8.png",
  },
  {
    id: "B1013",
    name: "Crispy Chicken Burger",
    price: 1200,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/9.png",
  },
  {
    id: "B1014",
    name: "Crispy Chicken Burger",
    price: 1600,
    discount: 10,
    category: "Burgers",
    portion: "Large",
    image: "images/products/item_images/burger/9.png",
  },
  {
    id: "B1015",
    name: "Paneer Burger",
    price: 900,
    discount: 0,
    category: "Burgers",
    portion: "Regular",
    image: "images/products/item_images/burger/10.png",
  },
];

function addItemToList() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseFloat(document.getElementById("discount").value);
  const portion = document.getElementById("portion").value;
  const image = "images/products/item_images/burger/9.png";

  if (id && name && !isNaN(price) && !isNaN(discount) && portion) {
    const newProduct = {
      id: id,
      name: name,
      price: price,
      discount: discount,
      category: "Burgers",
      portion: portion,
      image: image,
    };

    let storedBurgers = JSON.parse(localStorage.getItem("newBurger")) || [];
    storedBurgers.push(newProduct);

    localStorage.setItem("newBurger", JSON.stringify(storedBurgers));

    displayProducts();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

function deleteProduct(productId) {
  let storedBurgers = JSON.parse(localStorage.getItem("newBurger")) || [];
  storedBurgers = storedBurgers.filter((product) => product.id !== productId);
  localStorage.setItem("newBurger", JSON.stringify(storedBurgers));

  displayProducts();
}

function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear existing content

  const storedBurgers = JSON.parse(localStorage.getItem("newBurger")) || [];

  [...products, ...storedBurgers].forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("item");
    productCard.dataset.id = product.id;

    productCard.innerHTML = `
                    <img src="${product.image}" alt="${
      product.name
    }" class="img-fluid">
                    <h2>${product.name}</h2>
                    <div class="discount">${
                      product.discount > 0
                        ? `${product.discount}%`
                        : "No discount"
                    }</div>
                    <div class="portion">${product.portion}</div>
                    <div class="price">Rs.${product.price}</div>
                    <div>
                        <button class="btn btn-primary addCart" onclick="redirectToEditPage('${
                          product.id
                        }')"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-danger delete-btn" onclick="deleteProduct('${
                          product.id
                        }')"><i class="bi bi-trash3"></i></button>
                    </div>`;

    container.appendChild(productCard);
  });

  const addItemCard2 = document.createElement("div");
  addItemCard2.classList.add("item");
  addItemCard2.dataset.id = "add-item";
  addItemCard2.innerHTML = `
                <img src="images/add.png" class="add-image" alt="Add Item">
                <h2>Product Name</h2>
                <div class="discount">Product discount</div>
                <div class="portion">Large</div>
                <div class="price">Price</div>
                <button class="btn btn-success add-item" onclick="redirectToAddItemPage()">Add Item</button>`;

  container.appendChild(addItemCard2);
}

function redirectToAddItemPage() {
  window.open("item_add_burger.html", "_blank");
}

displayProducts();

//=======================================

function redirectToEditPage(productId) {
  window.open(`item_edit_burger.html?id=${productId}`, "_blank");
}

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}

//============================================================================================

// function displayProducts1() {
//   const container = document.getElementById("product-container1");
//   container.innerHTML = ""; // Clear existing content

//   const storedBurgers = JSON.parse(localStorage.getItem("newBurger")) || [];
//   console.log("Stored Burgers:", storedBurgers); // Check if data is loaded correctly

//   [...products, ...storedBurgers].forEach((product) => {
//     const productCard = document.createElement("div");
//     productCard.classList.add("item");
//     productCard.dataset.id = product.id;

//     productCard.innerHTML = `
//       <img src="${product.image}" alt="${product.name}" class="img-fluid">
//       <h2>${product.name}</h2>
//       <div class="discount">${
//         product.discount > 0 ? `${product.discount}%` : "No discount"
//       }</div>
//       <div class="portion">${product.portion}</div>
//       <div class="price">Rs.${product.price}</div>
//       <div>
//         <button class="btn btn-primary addCart" onclick="redirectToEditPage('${
//           product.id
//         }')"><i class="bi bi-pencil"></i></button>
//         <button class="btn btn-danger delete-btn" onclick="deleteProduct('${
//           product.id
//         }')"><i class="bi bi-trash3"></i></button>
//       </div>`;

//     container.appendChild(productCard);
//   });
// }

// displayProducts1();
