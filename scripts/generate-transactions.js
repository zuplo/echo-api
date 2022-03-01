const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");

const users = JSON.parse(
  fs.readFileSync(`${process.cwd()}/modules/users.json`)
);
const products = JSON.parse(
  fs.readFileSync(`${process.cwd()}/modules/products.json`)
);

const randomUser = Math.floor(Math.random() * users.length);
const randomProduct = Math.floor(Math.random() * products.length);

const user = users[randomUser];
const product = products[randomProduct];

const items = [];
for (let i = 0; i < 5000; i++) {
  const tax = (product.price * Math.floor(Math.random() * 10)) / 100;
  const item = {
    id: 100000 + i,
    user_id: user.id,
    product_id: product.id,
    purchase_date: faker.date.past(9),
    purchase_price: product.price,
    sales_tax: tax.toFixed(2),
    total_price: (parseFloat(product.price) + tax).toFixed(2),
  };
  items.push(item);
}

const json = JSON.stringify(items, null, 2);
const outputPath = path.resolve(__dirname, "../modules/transactions.json");
fs.writeFileSync(outputPath, json, "utf-8");
