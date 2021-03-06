import axios from 'axios'


export function getProductList() {
    return axios.get('/scrubs');

}

export function getOrderList() {
    return axios.get('/orders');
}

export function getNewProduct(newProductInfo) {
    return axios.post('/scrubs', newProductInfo);
}

export function getProductOrder(newOrder) {
    return axios.post('/orders', newOrder )
}

export function getUpdatedProduct(updatedInfo) {
    return axios.put(`/scrubs/${updatedInfo._id}`, updatedInfo)
}

export function getDeletedProduct(productId) {
    return axios.delete(`/scrubs/${productId}`)
}

export function getUpdatedOrder(orderInfo) {
    return axios.put(`/orders/${orderInfo._id}`, orderInfo)

}

export function getDeletedOrder(orderId) {
    return axios.delete(`/orders/${orderId}`)
}