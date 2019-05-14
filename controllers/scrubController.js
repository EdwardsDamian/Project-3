const Scrub = require('../models/Scrub.js')

const scrubController = {
    index: async (req, res) => {
        try {
            const scrubs = await Scrub.find({})
            res.json(scrubs)
        }  catch(err) {
            console.log(err)
        }
    },

    show: async (req, res) => {
        try {
            const scrubId = req.params.id
            const scrub = await Scrub.findById(scrubId)
            res.json(scrub)
        }   catch (err) {
            console.log(err)
            res.json(err)
        }
    },

    create: async (req,res) => {
        try {
            const newScrub = req.body
            const savedScrub = await Scrub.create(newScrub)
            res.json(savedScrub)
        }   catch (err) {
            console.log(err) 
                res.status(500).json(err)
            }
    },

    update: async (req,res) => {
        try {
            const scrubId = req.params.id
            const updatedScrub = req.body
            const savedScrub = await Scrub.findByIdAndUpdate(scrubId, updatedScrub, {new: true})
            res.json(savedScrub)
        }   catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    delete: async (req, res) => {
        

        try {
            const scrubId = req.params.id
            
            await Scrub.findByIdAndRemove(scrubId);
            res.json({msg:"deleted"});
        }   catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
    
}

module.exports = scrubController