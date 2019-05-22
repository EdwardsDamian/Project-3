import React, { Component } from 'react'
import { getProductList } from '../util.js'
//import AdminView from './AdminView.js'
import CartView from './CartView.js'
import Product from './Product'
class HomePage extends Component {
    state = {
        productList: [],
        cartList: []
    }



    //when component loads display list components


    componentDidMount() {
        console.log('product list')

        getProductList().then(productList => {
            this.setState({ productList: productList.data }

            );
        });

    };

    addProductToCart = (index) => {
        const product = { ...this.state.productList[index] }

        const cartList = [...this.state.cartList]

        cartList.push(product)

        this.setState({ cartList })
    };

    removeProductFromCart = (index) => {
        const cartList = [...this.state.cartList]

        cartList.splice(index, 1)

        this.setState({ cartList })
    };




    render() {
        return (
            <div>
                <div className="splash-image">
                    <h1>SweetGirl <br />SugarScrubs <br />by <br />Analise</h1>
                </div>
                <h2>Place your order now!</h2>
                <div>
                    <p>Welcome to SweetGirl SugarScrubs by Analise, everyone’s favorite Online Bath Product Shop.  We’ve got great deals available! Browse through our online product offerings and select the perfect scrub for you or as a special gift.</p>
                    <br/>
                    <p>SweetGirl SugarScrubs by Analise always seeks to provide  the highest level shopping experience. Please don’t hesitate to let us know if there’s anything we can do to make it better.</p> 
                </div>
                {this.state.productList.map((scrubs, index) => {
                    // scrubs
                    return (

                        <div key={index}>

                            <Product className="scrub-description"
                                scrubName={scrubs.name}
                                scrubImage={scrubs.image}
                                description={scrubs.description}
                                size={scrubs.size}
                                price={scrubs.price}
                                key={scrubs._id}
                                index={index}
                                addProductToCart={this.addProductToCart}
                                removeProductFromCart={this.removeProductFromCart}
                            />


                        </div>

                    )
                })

                }
                <CartView
                    cartList={this.state.cartList}
                    removeProductFromCart={this.removeProductFromCart}
                />


            </div>
        );
    }
}


export default HomePage