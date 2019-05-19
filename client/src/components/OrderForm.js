import React, { Component } from 'react'
import { getOrderList,getProductList,getUpdatedOrder } from '../util.js'

class OrderForm extends Component {

    state = {
        orderList: [],
        productList: [],
        entireOrder:[]
    };



    componentDidMount() {
        console.log('order list')

        getOrderList().then(orderList => {
            this.setState({ orderList: orderList.data }
            );
        });

        getProductList().then(productList => {
            this.setState({ productList: productList.data })
        });
    }

    handleOrderUpdate = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const orderUpdate = { ...this.state.orderUpdate }
        orderUpdate[attributeName] = attributeValue
        console.log(orderUpdate)
        this.setState({ orderUpdate: orderUpdate })
    }

    updateOrder = (event) => {
        event.preventDefault()
        console.log(this.state.orderUpdate)
        getUpdatedOrder(this.state.orderUpdate)
    };

    render() {
        return (
            <div>




                <form onSubmit={this.updateOrder}>
                <select name="_id" onChange={this.handleOrderUpdate}>{this.state.orderList.map(order => (<option value={order._id}>{order._id}</option>))}</select>
                    <div><input name="name" type="text" size="50" placeholder="Name" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="address" type="text" size="50" placeholder="Shipping Address" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="city" type="text" size="50" placeholder="City" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="state" type="text" size="50" placeholder="State" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="zip" type="text" size="50" placeholder="Zip Code" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="product" type="text" size="50" placeholder="Product Name" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="quantity" type="text" size="50" placeholder="Quantity" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="size" type="text" size="50" placeholder="size" onChange={this.handleOrderUpdate} /></div>
                    {/* <div><input name="totalPrice" size="50" type="number" value={totalPrice} hidden="hidden" /> </div> */}
                    <div><input name="status" type="text" size="50" placeholder="Status" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="shipDate" type="text" size="50" placeholder="Ship Date" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="comments" type="text" size="50" placeholder="Comments" onChange={this.handleOrderUpdate} /></div>
                    <div><input type="submit" value="Update This Order" /><br /></div>
                </form><br /><br />
            </div>
        )
    }
}

export default OrderForm