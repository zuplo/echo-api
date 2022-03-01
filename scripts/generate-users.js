const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");
const users = [];

for (let i = 0; i < 500; i++) {
  const fake = faker.helpers.createCard();
  const user = {
    id: 1000 + i,
    name: fake.name,
    email: fake.email,
    address: fake.address,
    phone: fake.phone,
    website: fake.website,
    company: fake.company,
  };
  users.push(user);
}

const json = JSON.stringify(users, null, 2);
const outputPath = path.resolve(__dirname, "../modules/users.json");
fs.writeFileSync(outputPath, json, "utf-8");
