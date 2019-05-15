const Scrub = require('../models/Scrub.js')
const Order = require('../models/Order.js')

Scrub.deleteMany().then(() => {
    const pinkP = new Scrub({ name: 'Pink Peppermint', description: 'Contains sugar, food coloring and other natural ingredient', image: 'https://i.imgur.com/2Eqi93u.jpg', size: '8 0z.', price: 8.00 })
    return pinkP.save()
}).then(() => {
    const blueV = new Scrub({ name: 'Blue Vanilla', description: 'Contains sugar, food coloring and other natural ingredient', image: 'https://i.imgur.com/SMCiqph.jpg', size: '8 0z.', price: 8.00 })
    return blueV.save();
}).then(() => {
    const purpleL = new Scrub({ name: 'Purple Lavender', description: 'Contains sugar, food coloring and other natural ingredient', image: 'https://i.imgur.com/2jlo81p.jpg', size: '8 0z.', price: 8.00 })
    return purpleL.save();
}).then(() => {
    const unscent = new Scrub({ name: 'Unscented', description: 'Contains sugar, food coloring and other natural ingredient', image: 'https://i.imgur.com/bDS3BAR.jpg', size: '8 0z.', price: 8.00 })
    return unscent.save();
}).then(() => {
    const order1 = new Order({ product: 'Unscented', quantity: 1, size: '8 oz.', totalPrice: 8.00, status: "Shipped", shipDate: "05/01/2019", comments: "abcd"})
    return order1.save();
}).then(() => {
    const order2 = new Order({ product: 'Pink Peppermint', quantity: 1, size: '16 oz.', totalPrice: 16.00, status: "Completed", shipDate: "05/05/2019", comments: "abcd"})
    return order2.save();
}).then(() => {
    const order3 = new Order({ product: 'Blue Vanilla', quantity: 1, size: '8 oz.', totalPrice: 8.00, status: "Making", shipDate: "05/10/2019", comments: "abcd"})
    return order3.save();
}).then(() => {
    const order4 = new Order({ product: 'Purple Lavender', quantity: 1, size: '16 oz.', totalPrice: 16.00, status: "Ordered", shipDate: "05/15/2019", comments: "abcd"})
    return order4.save();
}).then(() => {
    const order5 = new Order({ product: 'Unscented', quantity: 1, size: '16 oz.', totalPrice: 16.00, status: "In-Cart", shipDate: "05/15/2019", comments: "abcd"})
    return order5.save();
})


