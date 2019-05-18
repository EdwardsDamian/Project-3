import React, { Component } from 'react'
import Product from './Product';

class ProductList extends Component {
    render() {
        const productList = this.props.productList
        const productComponents = productList.map((scrubs, index) => {
            return <Product
                scrubName={scrubs.scrubName}
                description={scrubs.description}
                size={scrubs.size}
                price={scrubs.price}
                key={scrubs._id} />;
            //edit this product button => takes you 
            //to single product page wwith forms to edit. pass in _id to get right data
        });

        return (
            <div>
                {productComponents}
            </div>
        );
    }
}

export default ProductList;