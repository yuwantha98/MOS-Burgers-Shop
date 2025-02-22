const products = [
  {
    id: "B1031",
    name: "Chicken n Cheese Pasta",
    price: 1600.0,
    discount: 15,
    category: "Pasta",
    portion: "Regular",
    image: "images/products/item_images/pasta/1.png",
  },
  {
    id: "B1032",
    name: "Chicken Penne Pasta",
    price: 1700.0,
    discount: 0,
    category: "Pasta",
    portion: "Regular",
    image: "images/products/item_images/pasta/2.png",
  },
  {
    id: "B1033",
    name: "Ground Turkey Pasta Bake",
    price: 2900.0,
    discount: 10,
    category: "Pasta",
    portion: "Regular",
    image: "images/products/item_images/pasta/3.png",
  },
  {
    id: "B1034",
    name: "Creamy Shrimp Pasta",
    price: 2000.0,
    discount: 0,
    category: "Pasta",
    portion: "Regular",
    image: "images/products/item_images/pasta/4.png",
  },
  {
    id: "B1035",
    name: "Lemon Butter Pasta",
    price: 1950.0,
    discount: 0,
    category: "Pasta",
    portion: "Regular",
    image: "images/products/item_images/pasta/5.png",
  },
  {
    id: "B1036",
    name: "Tagliatelle Pasta",
    price: 2400.0,
    discount: 1,
    category: "Pasta",
    portion: "Regular",
    image: "images/products/item_images/pasta/6.png",
  },
  {
    id: "B1037",
    name: "Baked Ravioli",
    price: 2000.0,
    discount: 1,
    category: "Pasta",
    portion: "Regular",
    image: "images/products/item_images/pasta/1.png",
  },
];

function addItemToList() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseFloat(document.getElementById("discount").value);
  const portion = document.getElementById("portion").value;
  const image = "images/products/item_images/pasta/5.png";

  if (id && name && !isNaN(price) && !isNaN(discount) && portion) {
    const newProduct = {
      id: id,
      name: name,
      price: price,
      discount: discount,
      category: "Pasta",
      portion: portion,
      image: image,
    };

    let storedPasta = JSON.parse(localStorage.getItem("storedPasta")) || [];
    storedPasta.push(newProduct);

    localStorage.setItem("storedPasta", JSON.stringify(storedPasta));

    displayProducts();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

function deleteProduct(productId) {
  let storedPasta = JSON.parse(localStorage.getItem("storedPasta")) || [];
  storedPasta = storedPasta.filter((product) => product.id !== productId);
  localStorage.setItem("storedPasta", JSON.stringify(storedPasta));

  displayProducts();
}

function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear existing content

  const storedPasta = JSON.parse(localStorage.getItem("storedPasta")) || [];

  [...products, ...storedPasta].forEach((product) => {
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
  window.open("item_add_pasta.html", "_blank");
}

displayProducts();

//=======================================

function redirectToEditPage(productId) {
  window.open(`item_edit_pasta.html?id=${productId}`, "_blank");
}

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}
