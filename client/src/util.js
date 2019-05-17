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