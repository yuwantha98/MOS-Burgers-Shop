const products = [
  {
    id: "B1044",
    name: "Pepsi",
    price: 990.0,
    discount: 5,
    category: "Beverages",
    portion: "330 ml",
    image: "images/products/item_images/drink/1.png",
  },
  {
    id: "B1045",
    name: "Coca-Cola",
    price: 1230.0,
    discount: 0,
    category: "Beverages",
    portion: "330 ml",
    image: "images/products/item_images/drink/2.webp",
  },
  {
    id: "B1046",
    name: "Sprite",
    price: 1500.0,
    discount: 3,
    category: "Beverages",
    portion: "330 ml",
    image: "images/products/item_images/drink/3.png",
  },
  {
    id: "B1047",
    name: "Mirinda",
    price: 850.0,
    discount: 7,
    category: "Beverages",
    portion: "330 ml",
    image: "images/products/item_images/drink/4.png",
  },
];

function addItemToList() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseFloat(document.getElementById("discount").value);
  const portion = document.getElementById("portion").value;
  const image = "images/products/item_images/drink/3.png";

  if (id && name && !isNaN(price) && !isNaN(discount) && portion) {
    const newProduct = {
      id: id,
      name: name,
      price: price,
      discount: discount,
      category: "Beverages",
      portion: portion,
      image: image,
    };

    let storedBeverages =
      JSON.parse(localStorage.getItem("storedBeverages")) || [];
    storedBeverages.push(newProduct);

    localStorage.setItem("storedBeverages", JSON.stringify(storedBeverages));

    displayProducts();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

function deleteProduct(productId) {
  let storedBeverages =
    JSON.parse(localStorage.getItem("storedBeverages")) || [];
  storedBeverages = storedBeverages.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("storedBeverages", JSON.stringify(storedBeverages));

  displayProducts();
}

function displayProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear existing content

  const storedBeverages =
    JSON.parse(localStorage.getItem("storedBeverages")) || [];

  [...products, ...storedBeverages].forEach((product) => {
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
  window.open("item_add_beverages.html", "_blank");
}

displayProducts();

//=======================================

function redirectToEditPage(productId) {
  window.open(`item_edit_beverages.html?id=${productId}`, "_blank");
}

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}
