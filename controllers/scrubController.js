const Scrub = require('../models/Scrub.js')

const scrubController = {
    index: async (req, res) => {
        try {
            const scrubs = await Scrub.find({})
            res.json(scrubs)
        }  catch(err) {
            console.log(err)
        }
    }
}

module.exports = scrubController