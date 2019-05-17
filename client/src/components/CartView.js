import React, { Component } from 'react'



class CartView extends Component {

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

                            {/* {<img src={scrubs.image} width="200" height="200"></img>} */}
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
                <div><input name="name" type="text" placeholder="Name" onChange={this.handleNewProductChange} /></div>
                
                
                <div><input name="size" type="text" placeholder="Size" onChange={this.handleNewProductChange} /></div>
                
                <div><input type="submit" value="Order New Product" /></div>
            </form>
        </div>
            </div>
        )
    }
}

export default CartView