import axios from 'axios'


export function getProductList() {
    return axios.get('/scrubs');

}

export function getOrderList() {
    return axios.get('/orders');
}