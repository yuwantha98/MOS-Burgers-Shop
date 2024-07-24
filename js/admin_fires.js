const products = [
  {
    id: "B1026",
    name: "Steak Fries",
    price: 600.0,
    discount: 0,
    category: "Fries",
    portion: "Medium",
    image: "images/products/item_images/fries/1.webp",
  },
  {
    id: "B1027",
    name: "French Fries",
    price: 800.0,
    discount: 0,
    category: "Fries",
    portion: "Large",
    image: "images/products/item_images/fries/1.webp",
  },
  {
    id: "B1028",
    name: "French Fries",
    price: 650.0,
    discount: 0,
    category: "Fries",
    portion: "Medium",
    image: "images/products/item_images/fries/1.webp",
  },
  {
    id: "B1029",
    name: "French Fries (Small)",
    price: 450.0,
    discount: 0,
    category: "Fries",
    portion: "Small",
    image: "images/products/item_images/fries/1.webp",
  },
  {
    id: "B1030",
    name: "Sweet Potato Fries",
    price: 600.0,
    discount: 0,
    category: "Fries",
    portion: "Large",
    image: "images/products/item_images/fries/1.webp",
  },
];

function addItemToList() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseFloat(document.getElementById("discount").value);
  const portion = document.getElementById("portion").value;
  const image = "images/products/item_images/fries/1.webp";

  if (id && name && !isNaN(price) && !isNaN(discount) && portion) {
    const newProduct = {
      id: id,
      name: name,
      price: price,
      discount: discount,
      category: "Fries",
      portion: portion,
      image: image,
    };

    let storedFires = JSON.parse(localStorage.getItem("storedFires")) || [];
    storedFires.push(newProduct);

    localStorage.setItem("storedFires", JSON.stringify(storedFires));

    displayProducts();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

function deleteProduct(productId) {
  let storedFires = JSON.parse(localStorage.getItem("storedFires")) || [];
  storedFires = storedFires.filter((product) => product.id !== productId);
  localStorage.setItem("storedFires", JSON.stringify(storedFires));

  displayProducts();
}

function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear existing content

  const storedFires = JSON.parse(localStorage.getItem("storedFires")) || [];

  [...products, ...storedFires].forEach((product) => {
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
  window.open("item_add_fries.html", "_blank");
}

displayProducts();

//=======================================

function redirectToEditPage(productId) {
  window.open(`item_edit_fries.html?id=${productId}`, "_blank");
}

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}
