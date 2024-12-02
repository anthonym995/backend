const { faker } = require("@faker-js/faker");

// Generate an array of fake users
function generateFakeUsers(count = 10) {
  return Array.from({ length: count }).map(() => ({
    uuid: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    role: faker.helpers.arrayElement(["Admin", "User"]),
  }));
}

module.exports = { generateFakeUsers };
