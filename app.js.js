const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // CORS මොඩියුලය ඇතුළු කිරීම
const app = express();
const port = 3000;

app.use(cors()); // CORS යෙදවීම
app.use(express.json());

app.post("/add-item", (req, res) => {
  const newItem = req.body;

  // Read the existing products1.json file
  const filePath = path.join(__dirname, "json/products1.json"); // correct path to your JSON file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return res.status(500).send("Internal Server Error");
    }

    // Parse the JSON data
    let products = JSON.parse(data);

    // Add the new item to the array
    products.push(newItem);

    // Convert the array back to JSON
    const updatedData = JSON.stringify(products, null, 2);

    // Write the updated JSON back to the file
    fs.writeFile(filePath, updatedData, "utf8", (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
        return res.status(500).send("Internal Server Error");
      }

      res.send("Item added successfully");
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
