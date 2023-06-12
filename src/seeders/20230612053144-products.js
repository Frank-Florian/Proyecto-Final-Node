"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Iphone 11",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 999.99,
          user_id: 1,
          product_img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood&psig=AOvVaw0QZ4Z2Z2Z2Z2Z2Z2Z2Z2Z2&ust=16230606030236",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iphone 12",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 1099.99,
          user_id: 1,
          product_img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood&psig=AOvVaw0QZ4Z2Z2Z2Z2Z2Z2Z2Z2Z2&ust=16230606030236",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iphone 13",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 1499.99,
          user_id: 1,
          product_img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood&psig=AOvVaw0QZ4Z2Z2Z2Z2Z2Z2Z2Z2Z2&ust=16230606030236",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iphone 14",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 1799.99,
          user_id: 1,
          product_img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood&psig=AOvVaw0QZ4Z2Z2Z2Z2Z2Z2Z2Z2Z2&ust=16230606030236",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "I Mac",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 1999.99,
          user_id: 2,
          product_img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood&psig=AOvVaw0QZ4Z2Z2Z2Z2Z2Z2Z2Z2Z2&ust=16230606030236",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple Station",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 2499.99,
          user_id: 2,
          product_img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood&psig=AOvVaw0QZ4Z2Z2Z2Z2Z2Z2Z2Z2Z2&ust=16230606030236",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple Watch series 7",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam ni",
          price: 1299.99,
          user_id: 2,
          product_img:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood&psig=AOvVaw0QZ4Z2Z2Z2Z2Z2Z2Z2Z2Z2&ust=16230606030236",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
