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

function addItemToList() {
  // Get input values from form
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let price = parseFloat(document.getElementById("price").value);
  let discount = parseFloat(document.getElementById("discount").value);
  let portion = document.getElementById("portion").value;

  // Create new item object
  let newItem = {
    id: id,
    name: name,
    price: price,
    discount: discount,
    category: "Burgers", // Example category, adjust as needed
    portion: portion,
    image: "images/products/item_images/burger/new_image.png", // Example image path, adjust as needed
  };

  // Add the new item to listProducts1 array
  listProducts1.push(newItem);

  // Optionally, you can clear the form fields here
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("discount").value = "";
  document.getElementById("portion").value = "";

  // Display a success message or perform other actions if needed
}

console.log("Item added successfully:", listProducts1);

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
