const Shoe = require ('../models/shoe.model.js');

module.exports = {

    createShoe: (req, res) => {
        Shoe.create(req.body)
            .then((newShoe) => {
                console.log(newShoe);
                res.json({newShoe})
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ err })
            });
    },

    getAllShoes: (req, res) => {
        Shoe.find()
            .then(allShoes => {
                console.log(allShoes);
                res.json(allShoes)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ err })
            });
    },

    getShoe: (req, res) => {
        Shoe.findOne({_id: req.params.id})
            .then(oneShoe => {
                console.log(oneShoe);
                res.json(oneShoe)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ err })
            });
    },

    updateShoe: (req, res) => {
        Shoe.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then((updatedShoe) => {
            console.log(updatedShoe);
            res.json({updatedShoe});
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ err })
        });
    },

    deleteShoe: (req, res) => {
        Shoe.deleteOne({_id: req.params.id})
            .then((deleteShoe) => {
                console.log(deleteShoe);
                res.json({deleteShoe});
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ err })
            });
    },
};