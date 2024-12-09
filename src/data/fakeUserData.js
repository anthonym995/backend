const { faker } = require("@faker-js/faker");

// Generate an array of fake users
function generateFakeUsers(count = 10) {
  return Array.from({ length: count }).map(() => {
    // Generate a random gender: 'male' or 'female'
    const gender = faker.helpers.arrayElement(["male", "female"]);
    const name = gender === "male" ? faker.person.fullName({ sex: "male" }) : faker.person.fullName({ sex: "female" });

    // Random number for the profile picture (1 to 99)
    const pictureNumber = faker.number.int({ min: 1, max: 99 });

    // Profile picture URL based on gender
    const profilePicture = `https://randomuser.me/api/portraits/${
      gender === "male" ? "men" : "women"
    }/${pictureNumber}.jpg`;

    return {
      uuid: faker.string.uuid(),
      name,
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.location.streetAddress(),
      role: faker.helpers.arrayElement(["admin", "user"]),
      bio: faker.person.bio(),
      profilePicture,
    };
  });
}

module.exports = { generateFakeUsers };
