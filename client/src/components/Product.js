import React, { Component } from 'react'

class Product extends Component {

    addToCart = () => {
        this.props.addProductToCart(this.props.index)
    };

    removeFromCart = () => {
        this.props.removeProductFromCart(this.props.index)
    };

    showOptions = () => {
        const viewMode = this.props.viewMode
        
        const shopOptions = ( 
            <div>
                <button onClick={this.addToCart}>Add to Cart</button>
            </div>
        )

        const cartOptions = (
            <div>
                <button onClick={this.removeFromCart}>Remove From Cart</button>
            </div>
        )

        // switch (viewMode) {
        //     case 'SHOP':
        //     return shopOptions
        //     case 'CART':
        //     return cartOptions
        //     default:
        //     return null 
        // }
    };

    render () {
        const scrubName = this.props.scrubName;
        const description = this.props.description;
        const image = this.props.scrubImage;
        const size = this.props.size;
        const price = this.props.price;

        return (
            <div>
                <h3>{scrubName}</h3>
                <div>{description}</div>
                  {<img src={image} width="200" height="200"></img>}
                <div>{/* <img src={scrubs.image} ></img> */}</div>
                <div>{size}</div>
                <div>{price}</div>
<button onClick={this.addToCart}>ADD ME TO CART!</button>
            </div>
        )
    }
}

export default Product