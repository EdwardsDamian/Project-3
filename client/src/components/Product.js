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

        
    };

    render() {
        const scrubName = this.props.scrubName;
        const description = this.props.description;
        const image = this.props.scrubImage;
        const size = this.props.size;
        const price = this.props.price;

        return (
            <div>
                <h3><a href="/product/:id">{scrubName}</a></h3>
                <div>{description}</div>
                {<img src={image} hspace="10" vspace="10" width="300" height="200" alt="scrub"></img>}
                <div>{/* <img src={scrubs.image} ></img> */}</div>
                <div>{size}   <span>${price}.00 </span></div>
                <div><br/></div>
                <button hspace="10" onClick={this.addToCart}>ADD ME TO CART!</button>
            </div>
        )
    }
}

export default Product