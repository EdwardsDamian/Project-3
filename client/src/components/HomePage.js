import React, { Component } from 'react'
import { getProductList } from '../util.js'
//import AdminView from './AdminView.js'
import CartView from './CartView.js'
import Product from './Product'
class HomePage extends Component {
    state = {
        productList: [],
        cartList:[]
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
        const product = {...this.state.productList[index]}

        const cartList = [...this.state.cartList]

        cartList.push(product)

        this.setState({cartList})
    };

    removeProductFromCart = (index) => {
        const cartList = [...this.state.cartList]

        cartList.splice(index, 1)

        this.setState({cartList})
    };

    


    render() {
        return (
            <div>
                <h1>SweetGirl SugarScrubs by Analise</h1>
                <h2>Place your order now!</h2>
                <div><p>Welcome to SweetGirl Sugar Scrubs by Analise, everyone’s favorite Online Bath Product Shop. We’ve got great deals available. Browse through our online product selection and select the perfect scrub for you or as a gift. We’re always looking to improve the shopping experience for our customers, so please don’t hesitate to let us know if there’s anything more we can do to help.</p>
                </div>
                {this.state.productList.map((scrubs, index)=>{
                    // scrubs
                    return( 
                        <div key={index}>
                        {/* <h3>  {scrubs.name}   </h3> */}
                       
                        {/* {<img src={scrubs.image} width="200" height="200"></img>} */}
                        {/* <h3>${scrubs.price}.00 </h3> */}
                        {/* <h3> {scrubs.size}</h3> */}
                        <Product 
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