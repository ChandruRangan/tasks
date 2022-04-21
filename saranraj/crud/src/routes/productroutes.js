const router = require('express-promise-router')();
const productController = require('../controller/productcontroller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);
// ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts);
router.get('/categoryname',productController.category_name);
router.put('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;