function collectData() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const discount = document.getElementById("discount").value;
  const portion = document.getElementById("portion").value;

  const image = "images/products/item_images/burger/9.png";

  const newItem = {
    id: id,
    name: name,
    price: parseFloat(price),
    discount: parseFloat(discount),
    portion: portion,
    image: image,
  };

  return newItem;
}

function addItemToList() {
  const newItem = collectData();

  fetch("http://localhost:3000/add-item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to add item");
    });
}
