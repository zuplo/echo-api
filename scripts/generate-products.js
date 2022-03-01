const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");
const items = [];

for (let i = 0; i < 2000; i++) {
  const price = faker.commerce
    .price(100, 1000, 2)
    .replace("00", Math.floor(Math.random() * 100).toString());
  const item = {
    id: 10000 + i,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    material: faker.commerce.productMaterial(),
    price,
    date_listed: faker.date.past(10),
  };
  items.push(item);
}

const json = JSON.stringify(items, null, 2);
const outputPath = path.resolve(__dirname, "../modules/products.json");
fs.writeFileSync(outputPath, json, "utf-8");
