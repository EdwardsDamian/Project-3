import React, { Component } from 'react'
import { getNewProduct } from '../util.js'

class ProductForm extends Component {
    state = {
        newProduct: {}
    }


//when component loads display list components


componentDidMount() {
    // console.log('new product offering')

    //etNewProduct() g.then(newProduct => {
    //     this.setState({ newProduct: newProduct.data }

    //     );
    // });

};

handleNewProductChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value

    const newProduct = { ...this.state.newProduct }
    newProduct[attributeName] = attributeValue
    this.setState({newProduct: newProduct })
}
addNewProduct = (event) => {
    event.preventDefault()
getNewProduct(this.state.newProduct)
    // this.props.addNewProductToProductList(this.state.newProduct)
};

render() {
    return (
        <div>
            <form onSubmit={this.addNewProduct}>
                <div><input name="name" type="text" placeholder="Name" onChange={this.handleNewProductChange} /></div>
                <div><input name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange} /></div>
                <div><input name="image" type="text" placeholder="Image" onChange={this.handleNewProductChange} /></div>
                <div><input name="size" type="text" placeholder="Size" onChange={this.handleNewProductChange} /></div>
                <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
                <div><input type="submit" value="Create New Product" /></div>
            </form>

                        
        </div>
    )

    
}


}


export default ProductForm
