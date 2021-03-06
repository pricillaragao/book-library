const express = require("express");
const booksService = require("./books-service");

const router = express.Router();

router.get("/rent", async (req, res, next) => {
  try {
    const books = await booksService.listBooks();
    res.render("books.njk", {
      lang: "en",
      title: "Pricilla's Readings <3",
      books,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
