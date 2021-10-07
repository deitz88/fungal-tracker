const User = require('../models/user');
const Fungus = require('../models/fungus')



module.exports = {
    addFungus
};

async function addFungus(req, res) {
    const fungus = new Fungus({ created: req.body.created, type: req.body.type, name: req.body.name, user: req.user._id });
    try {
        await fungus.save();
        res.json({ fungus });
    } catch (err) {
        console.log('catch error', err)
        res.status(400).json(err);
    }

}