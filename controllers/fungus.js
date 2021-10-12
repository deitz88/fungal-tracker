const User = require('../models/user');
const Fungus = require('../models/fungus')



module.exports = {
    addFungus,
    getUserFungus,
    deleteFungus

};

async function addFungus(req, res) {
    const fungus = new Fungus({ spawn: req.body.spawn, created: req.body.created, type: req.body.type, name: req.body.name, user: req.user._id });
    try {
        await fungus.save();
        res.json({ fungus });
    } catch (err) {
        console.log('catch error', err)
        res.status(400).json(err);
    }

}

async function getUserFungus(req, res) {
    console.log(req.user)
    const fungus = await Fungus.find({ user: req.user._id });
    return res.json({ fungus });
}

async function deleteFungus(req, res) {

    try {
        await Fungus.findByIdAndDelete(req.params.id)
        res.json('deleted fungus')
    } catch (err) {
        console.log('catch error', err)
        res.status(400).json(err);
    }

}

