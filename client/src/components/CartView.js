import React, { Component } from 'react'
import {getProductOrder} from '../util.js'


class CartView extends Component {

    state={
        newOrder:{
            name: '',
            address: '',
            city: '',
            state: '',
            zip:'',
            totalPrice: '',
            entireOrder: []
        }
    }
    componentDidMount=()=>{
       
    }
    handleProductOrder=(event)=>{
        // event change
        const attributeName = event.target.name
        const attributeValue = event.target.value
    
        const newOrder = { ...this.state.newOrder }
        newOrder[attributeName] = attributeValue
        this.setState({newOrder: newOrder })
    }
    orderProduct=(event)=>{
    // add to database 
    event.preventDefault()
    let now = this.state.newOrder
    now.entireOrder = this.props.cartList
    this.setState({newOrder : now})
    // total price 
    console.log(this.state.newOrder)
    getProductOrder(this.state.newOrder)
    }

    render() {
        const totalPrice = this.props.cartList.reduce((totalPrice, scrubs) => {
            return totalPrice + scrubs.price
        }, 0.00)

        return (
            <div>
                <h1>Cart</h1>
                {this.props.cartList.map((scrubs, index) => {
                    // scrubs
                    return (
                        <div key={index}>
                            <h3>  {scrubs.name}   </h3>

                            <h3>{<img src={scrubs.image} width="40" height="40"></img>}</h3>
                            <h3>${scrubs.price}.00 </h3>
                            {/* <h3> {scrubs.size}</h3> */}}
                        </div>
                    )
                })
                }
                < div >
                    <h3>Total Price: ${totalPrice}.00</h3>
                </div>

                <div>
            <form onSubmit={this.orderProduct}>
                <div><input name="name" type="text" placeholder="Name" onChange={this.handleProductOrder} /></div>
                <div><input name="address" type="text" placeholder="Shipping Address" onChange={this.handleProductOrder} /></div>
                <div><input name="city" type="text" placeholder="City" onChange={this.handleProductOrder} /></div>
                <div><input name="state" type="text" placeholder="State" onChange={this.handleProductOrder} /></div>
                <div><input name="zip" type="text" placeholder="Zip Code" onChange={this.handleProductOrder} /></div>
                <div><input name="totalPrice" type="number" value={totalPrice} hidden="hidden" /> </div>
                <div><input type="submit" value="Order New Product" /></div>
            </form>
        </div>
            </div>
        )
    }
}

export default CartView