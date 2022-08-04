const { findById } = require("../../models/products");
const Products = require("../../models/products");

// Link for reference
// http://localhost:7000/api/v1/products
// use to get all products from the data base and send all the products in json as response
module.exports.allProducts = async function (req, res) {
  try {
    // getting all the products from the data base
    const product = await Products.find({});
    // sending the response in json
    return res.json(200, {
      data: product,
    });
  } catch (error) {
    // if error then send the error message
    return res.json(404, {
      message: "error while finding all product, Please contact Developer :)",
    });
  }
};
// Link for reference
// http://localhost:7000/api/v1/products/create
// create new product and save in data base
module.exports.create = async function (req, res) {
  try {
    // creating new product in the data base
    const product = await Products.create(req.body);
    // sending response to db
    return res.json(200, {
      data: product,
    });
  } catch (error) {
    // if error then send the error message
    return res.json(404, {
      message: "invalid product or quantity",
    });
  }
};
// Link for reference
// http://localhost:7000/api/v1/products/62d13790bcb991cd2fc8f810
// delete the product from the db using the params as id
module.exports.delete = async function (req, res) {
  // trying to find the product using the id
  try {
    // finding the product using the id
    const product = await Products.findById(req.params.id);
    // if product is found then delete the product
    product.remove();
    // sending the response
    return res.json(200, {
      message: "successfully deleted",
    });
  } catch (error) {
    // if error then send the error message
    return res.json(404, {
      message: "error while deleting product, please check your product id",
    });
  }
};

// Link for reference
// http://localhost:7000/api/v1/products/62d13790bcb991cd2fc8f80e/update_quantity/?number=220
// use to update the db based on id as params and quantity as number in query
module.exports.update = async function (req, res) {
  // trying to update the product using the params as id
  try {
    // updating the product using the params as id
    const product = await Products.updateOne(
      { _id: req.params.id },
      { quantity: req.query.number }
    );
    // sending the response
    try {
      // finding the product using the id
      const findProduct = await Products.findById({ _id: req.params.id });
      // sending the response
      return res.json(200, {
        data: findProduct,
        message: "successfully updated the product quantity",
      });
    } catch (error) {
      // if error then send the error message
      return res.json(404, {
        data: findById,
        message:
          "product updated but error while finding and sending updated product",
      });
    }
  } catch (error) {
    // if error then send the error message
    return res.json(404, {
      data: findById,
      message: "error while updating product",
    });
  }
};
