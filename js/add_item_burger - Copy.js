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

function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}

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

// const addDataToHTML = () => {
//   listProductHTML.innerHTML = ""; // Clear existing content
//   for (let i = 0; i < listProducts1.length; i++) {
//     // Use listProducts1 instead of listProducts
//     let product = listProducts1[i]; // Access each product object
//     let newProduct = document.createElement("div");
//     newProduct.classList.add("item");
//     newProduct.dataset.id = product.id; // Use product.id instead of product.id
//     newProduct.innerHTML = `
//       <img src="${product.image}" alt="">
//       <h2>${product.name}</h2>
//       <div class="discount">${product.discount}%</div>
//       <div class="portion">${product.portion}</div>
//       <div class="price">Rs.${product.price}</div>
//       <div>
//       <button class="addCart"><i class="bi bi-pencil"></i></button>
//       <button class="addCart"><i class="bi bi-trash3"></i></button>
//       </div>`;
//     listProductHTML.appendChild(newProduct);
//   }

//   for (let i = 0; i < 1; i++) {
//     let product = {
//       id: 1,
//       name: "Product Name",
//       discount: "product discount",
//       portion: "Large",
//       price: "Price",
//       image: "images/add.png",
//     };

//     let newProduct = document.createElement("div");
//     newProduct.classList.add("item");
//     newProduct.dataset.id = product.id;
//     newProduct.innerHTML = `
//   <img src="${product.image}" class="add-image" alt="">
//   <h2>${product.name}</h2>
//   <div class="discount">${product.discount}%</div>
//   <div class="portion">${product.portion}</div>
//   <div class="price">Rs ${product.price}</div>
//   <button class="add-item">Add Item</button>`;

//     listProductHTML.appendChild(newProduct);
//   }
// };

// const initApp = () => {
//   addDataToHTML();
// };

// initApp();

function addItemToList() {
  // Get form values
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const discount = parseFloat(document.getElementById("discount").value);
  const portion = document.getElementById("portion").value;
  const image = "images/products/item_images/burger/10.png"; // You may need to update this path or make it dynamic

  // Validate the inputs (optional but recommended)
  if (!id || !name || isNaN(price) || isNaN(discount) || !portion) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Create a new product object
  const newItem = {
    id,
    name,
    price,
    discount,
    category: "Burgers", // This can be dynamic if needed
    portion,
    image,
  };

  // Add the new item to the list
  listProducts1.push(newItem);

  // Optionally, clear the form fields after adding the item
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("discount").value = "";
  document.getElementById("portion").value = "";

  // Optionally, display a success message
  alert("Item added successfully!");
  console.log(listProducts1);
  // Debug: Log the updated list to the console
}
console.log(listProducts1);
// Attach the function to the button's onclick event
//document.querySelector(".custom-red.centered-button").onclick = addItemToList
