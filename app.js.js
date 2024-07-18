const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/add-item", (req, res) => {
  const newItem = req.body;

  const filePath = path.join(__dirname, "json/products1.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return res.status(500).send("Internal Server Error");
    }

    let products = JSON.parse(data);
    products.push(newItem);

    const updatedData = JSON.stringify(products, null, 2);

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
