function addItemToList() {
  // Retrieve input values
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var price = parseFloat(document.getElementById("price").value);
  var discount = parseFloat(document.getElementById("discount").value);
  var portion = document.getElementById("portion").value;

  // Create new item object
  var newItem = {
    id: id,
    name: name,
    price: price,
    discount: discount,
    category: "Burgers", // Assuming you are adding to the Burgers category
    portion: portion,
    image: "path_to_your_image.png", // Replace with actual image path
  };

  // Read existing JSON file data
  fetch("products1.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Append new item to existing data
      data.push(newItem);

      // Write updated data back to JSON file
      var jsonData = JSON.stringify(data, null, 2);
      fetch("json/products1.json", {
        method: "PUT", // Use 'PUT' method for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update JSON file.");
          }
          alert("Item added successfully!");
          // Optionally, you can redirect or reload the page here
        })
        .catch((error) => {
          console.error("Error updating JSON file:", error);
          alert("Failed to update JSON file. Please try again.");
        });
    })
    .catch((error) => {
      console.error("Error fetching existing data:", error);
      alert("Failed to fetch existing data. Please try again.");
    });
}
