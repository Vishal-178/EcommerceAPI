const express = require("express");
const router = express.Router();
const productController = require("../../../controllers/api/apiCreate_controller");

// GET all Products
router.get("/", productController.allProducts);

// POST - create new Product
router.post("/create", productController.create);

// DELETE - product by id

router.delete("/:id", productController.delete);

//POST - update product by id
router.post("/:id/update_quantity/", productController.update);
module.exports = router;
