import React, { Component } from 'react'
import { getOrderList,getProductList,getUpdatedOrder, getDeletedOrder } from '../util.js'

class OrderForm extends Component {

    state = {
        orderList: [],
        productList: [],
        entireOrder:[],
        totalPrice: ''
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
        const totalPrice = this.state.orderList.reduce((totalPrice, scrubs) => {
            return totalPrice + (scrubs.totalPrice)
        }, 0.00)
        this.setState({totalPrice: totalPrice})
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

    handleDeleteOrder = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const delOrder = { ...this.state.delOrder }
        delOrder[attributeName] = attributeValue
        this.setState({ delOrder: delOrder })
    }

    deleteOrder = (event) => {
        event.preventDefault()
        getDeletedOrder(this.state.delOrder._id)
    }

    render() {
        // const totalPrice = this.props.cartList.reduce((totalPrice, scrubs) => {
        //     return totalPrice + (scrubs.price)
        // }, 0.00)
        
        return (
            <div>




                <form onSubmit={this.updateOrder}>
                <select name="_id" onChange={this.handleOrderUpdate}>{this.state.orderList.map(order => (<option key={order._id} value={order._id}>{order._id}</option>))}</select>
                    <div><input name="name" type="text" size="50" placeholder="Name" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="address" type="text" size="50" placeholder="Shipping Address" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="city" type="text" size="50" placeholder="City" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="state" type="text" size="50" placeholder="State" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="zip" type="text" size="50" placeholder="Zip Code" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="product" type="text" size="50" placeholder="Product Name" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="quantity" type="text" size="50" placeholder="Quantity" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="size" type="text" size="50" placeholder="size" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="totalPrice" size="50" type="number" value={this.state.totalPrice} hidden="hidden" onChange={this.handleOrderUpdate} /> </div>
                    <div><input name="status" type="text" size="50" placeholder="Status" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="shipDate" type="text" size="50" placeholder="Ship Date" onChange={this.handleOrderUpdate} /></div>
                    <div><input name="comments" type="text" size="50" placeholder="Comments" onChange={this.handleOrderUpdate} /></div>
                    <div><input type="submit" value="Update This Order" /><br /></div>
                </form><br /><br />

                <form onSubmit={this.deleteOrder}>
                    <select name="_id" onChange={this.handleDeleteOrder}>{this.state.orderList.map(order => (<option key={order._id} value={order._id}>{order._id}</option>))}</select>
                    <div><br /><input type="submit" value="Delete This Order" /></div>
                </form><br /><br />
            </div>
        )
    }
}

export default OrderForm