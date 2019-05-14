const Scrub = require('../models/Scrub.js')

Scrub.deleteMany().then(() => {
    const pinkP = new Scrub({name: 'Pink Peppermint', description: 'Contains sugar, food coloring and other natural ingredient', image: 'https://i.imgur.com/2Eqi93u.jpg', size: '8 0z.', price: 8.00})
    return pinkP.save()
}).then(() => {
    const blueV = new Scrub({name: 'Blue Vanilla', description: 'Contains sugar, food coloring and other natural ingredient', image: 'https://i.imgur.com/SMCiqph.jpg', size: '8 0z.', price: 8.00})
    return blueV.save();
}).then(() => {
    const purpleL = new Scrub({name: 'Purple Lavender', description: 'Contains sugar, food coloring and other natural ingredient', image: 'https://i.imgur.com/2jlo81p.jpg', size: '8 0z.', price: 8.00})
    return purpleL.save();
}).then(() => {
    const unscent = new Scrub({name: 'Unscented', description: 'Contains sugar, food coloring and other natural ingredient', image: 'https://i.imgur.com/bDS3BAR.jpg', size: '8 0z.', price: 8.00})
    return unscent.save();
})