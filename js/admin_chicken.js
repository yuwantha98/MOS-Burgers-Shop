const products = [
  {
    id: "B1038",
    name: "Fried Chicken",
    price: 1200.0,
    discount: 0,
    category: "Chicken",
    portion: "Small",
    image: "images/products/item_images/chicken/1.jpg",
  },
  {
    id: "B1039",
    name: "Fried Chicken",
    price: 2300.0,
    discount: 10,
    category: "Chicken",
    portion: "Regular",
    image: "images/products/item_images/chicken/2.jpg",
  },
  {
    id: "B1040",
    name: "Fried Chicken",
    price: 3100.0,
    discount: 5,
    category: "Chicken",
    portion: "Large",
    image: "images/products/item_images/chicken/3.jpg",
  },
  {
    id: "B1041",
    name: "Hot Wings",
    price: 2400.0,
    discount: 0,
    category: "Chicken",
    portion: "Large",
    image: "images/products/item_images/chicken/4.jpg",
  },
  {
    id: "B1042",
    name: "Devilled Chicken",
    price: 900.0,
    discount: 0,
    category: "Chicken",
    portion: "Large",
    image: "images/products/item_images/chicken/5.jpg",
  },
  {
    id: "B1043",
    name: "BBQ Chicken",
    price: 2100.0,
    discount: 0,
    category: "Chicken",
    portion: "Regular",
    image: "images/products/item_images/chicken/6.jpg",
  },
];

function addItemToList() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseFloat(document.getElementById("discount").value);
  const portion = document.getElementById("portion").value;
  const image = "images/products/item_images/chicken/4.jpg";

  if (id && name && !isNaN(price) && !isNaN(discount) && portion) {
    const newProduct = {
      id: id,
      name: name,
      price: price,
      discount: discount,
      category: "Chicken",
      portion: portion,
      image: image,
    };

    let storedChicken = JSON.parse(localStorage.getItem("storedChicken")) || [];
    storedChicken.push(newProduct);

    localStorage.setItem("storedChicken", JSON.stringify(storedChicken));

    displayProducts();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

function deleteProduct(productId) {
  let storedChicken = JSON.parse(localStorage.getItem("storedChicken")) || [];
  storedChicken = storedChicken.filter((product) => product.id !== productId);
  localStorage.setItem("storedChicken", JSON.stringify(storedChicken));

  displayProducts();
}

function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear existing content

  const storedChicken = JSON.parse(localStorage.getItem("storedChicken")) || [];

  [...products, ...storedChicken].forEach((product) => {
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
  window.open("item_add_chicken.html", "_blank");
}

displayProducts();

//=======================================

function redirectToEditPage(productId) {
  window.open(`item_edit_chicken.html?id=${productId}`, "_blank");
}

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}
