const express = require("express");
const BookController = require("../Controller/BookController");

const router = express.Router();

//MiddleWare
router.get("/", BookController.readAll);
router.get("/:title", BookController.read);
router.post("/", BookController.create);
router.put("/:isbn", BookController.updateByISBN);
router.delete("/:publishedDate", BookController.deleteByPublishedDate);

module.exports = router;