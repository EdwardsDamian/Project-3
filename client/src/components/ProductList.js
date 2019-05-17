import React, { Component } from 'react'
import Product from './Product';

class ProductList extends Component {
    render () {
        const productList = this.props.productList
        const productComponents = productList.map((scrubs, index) => {
            return <Product 
                scrubName={scrubs.scrubName}
                description={scrubs.description}
                size={scrubs.size}
                price={scrubs.price}
                key={index}/>;
        });

        return (
            <div>
                { productComponents }
            </div>
        );
    }
}

export default ProductList;