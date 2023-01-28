const ShoeController = require('../controllers/shoe.controller');

module.exports = (app) => {
    app.post('/api/shoe', ShoeController.createShoe );
    app.get('/api/shoes', ShoeController.getAllShoes );
    app.get('/api/shoe/:id', ShoeController.getShoe);
    app.put('/api/shoe/edit/:id', ShoeController.updateShoe);
    app.delete('/api/shoe/delete/:id', ShoeController.deleteShoe);
}