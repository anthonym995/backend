const { faker } = require("@faker-js/faker");

// Generate an array of fake blogs
function generateFakeBlogs(count = 10) {
  return Array.from({ length: count }).map(() => {
    // Random categories and tags
    const categories = faker.helpers.arrayElements(
      ["Technology", "Health", "Lifestyle", "Finance", "Education"],
      faker.number.int({ min: 1, max: 3 })
    );
    const tags = faker.helpers.arrayElements(
      ["coding", "fitness", "budgeting", "learning", "innovation"],
      faker.number.int({ min: 1, max: 5 })
    );

    return {
      title: faker.lorem.sentence(), // Random blog title
      content: faker.lorem.paragraphs(faker.number.int({ min: 2, max: 5 })), // Random content with 2-5 paragraphs
      author: faker.person.fullName(), // Random full name as author
      categories,
      tags,
      status: faker.helpers.arrayElement(["draft", "published"]), // Random blog status
      createdAt: faker.date.past().toISOString(), // Random past date
      updatedAt: faker.date.recent().toISOString(), // Recent date
    };
  });
}

module.exports = { generateFakeBlogs };
