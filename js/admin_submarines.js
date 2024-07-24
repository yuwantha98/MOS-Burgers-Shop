const products = [
  {
    id: "B1016",
    name: "Crispy Chicken Submarine",
    price: 2000.0,
    discount: 0,
    category: "Submarines",
    portion: "Large",
    image: "images/products/item_images/submarine/1.webp",
  },
  {
    id: "B1017",
    name: "Crispy Chicken Submarine",
    price: 1500.0,
    discount: 0,
    category: "Submarines",
    portion: "Regular",
    image: "images/products/item_images/submarine/1.webp",
  },
  {
    id: "B1018",
    name: "Chicken Submarine",
    price: 1800.0,
    discount: 3,
    category: "Submarines",
    portion: "Large",
    image: "images/products/item_images/submarine/3.webp",
  },
  {
    id: "B1019",
    name: "Chicken Submarine",
    price: 1400.0,
    discount: 0,
    category: "Submarines",
    portion: "Regular",
    image: "images/products/item_images/submarine/3.webp",
  },
  {
    id: "B1020",
    name: "Grinder Submarine",
    price: 2300.0,
    discount: 0,
    category: "Submarines",
    portion: "Regular",
    image: "images/products/item_images/submarine/5.webp",
  },
  {
    id: "B1021",
    name: "Cheese Submarine",
    price: 2200.0,
    discount: 0,
    category: "Submarines",
    portion: "Regular",
    image: "images/products/item_images/submarine/4.webp",
  },
  {
    id: "B1022",
    name: "Double Cheese n Chicken Submarine",
    price: 1900.0,
    discount: 16,
    category: "Submarines",
    portion: "Regular",
    image: "images/products/item_images/submarine/2.webp",
  },
  {
    id: "B1023",
    name: "Special Horgie Submarine",
    price: 2800.0,
    discount: 0,
    category: "Submarines",
    portion: "Regular",
    image: "images/products/item_images/submarine/6.webp",
  },
  {
    id: "B1024",
    name: "MOS Special Submarine",
    price: 3000.0,
    discount: 0,
    category: "Submarines",
    portion: "Regular",
    image: "images/products/item_images/submarine/7.webp",
  },
];

function addItemToList() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseFloat(document.getElementById("discount").value);
  const portion = document.getElementById("portion").value;
  const image = "images/products/item_images/submarine/2.webp";

  if (id && name && !isNaN(price) && !isNaN(discount) && portion) {
    const newProduct = {
      id: id,
      name: name,
      price: price,
      discount: discount,
      category: "Submarines",
      portion: portion,
      image: image,
    };

    let storedSubmarines =
      JSON.parse(localStorage.getItem("storedSubmarines")) || [];
    storedSubmarines.push(newProduct);

    localStorage.setItem("storedSubmarines", JSON.stringify(storedSubmarines));

    displayProducts();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

function deleteProduct(productId) {
  let storedSubmarines =
    JSON.parse(localStorage.getItem("storedSubmarines")) || [];
  storedSubmarines = storedSubmarines.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("storedSubmarines", JSON.stringify(storedSubmarines));

  displayProducts();
}

function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear existing content

  const storedSubmarines =
    JSON.parse(localStorage.getItem("storedSubmarines")) || [];

  [...products, ...storedSubmarines].forEach((product) => {
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
  window.open("item_add_submarine.html", "_blank");
}

displayProducts();

//=======================================

function redirectToEditPage(productId) {
  window.open(`item_edit_submarine.html?id=${productId}`, "_blank");
}

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}
