# Ecommerce API

### Description

`Created Api for Ecommerce where we can create, delete, update, and get product and quantity`

### How to Use API

`To get all the product from the data base`

### https://ecommerce-api178.herokuapp.com/api/v1/products

`To Create New Product use`

### https://ecommerce-api178.herokuapp.com/api/v1/products/create

with body as
`name:mango`,
`quantity:20`

`To delete product use`

### https://ecommerce-api178.herokuapp.com/api/v1/products/`productid`

example --
producrid = 62d13791bcb991cd2fc8f812

`To update product use`

### http://localhost:8000/api/v1/products/productid/update_quantity/?number=500

## Folder Structure

```
ecommerce api
├─ config
│  ├─ environment.js
│  └─ mongoose.js
├─ controllers
│  └─ api
│     └─ apiCreate_controller.js
├─ index.js
├─ logs
│  └─ access.log
├─ models
│  └─ products.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ routes
   ├─ api
   │  ├─ index.js
   │  └─ v1
   │     ├─ index.js
   │     └─ products.js
   └─ index.js

```
