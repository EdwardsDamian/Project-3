import React, { Component } from 'react'
import { getNewProduct } from '../util.js'
import {getUpdatedProduct} from '../util.js'

class ProductForm extends Component {
    state = {
        newProduct: {},
        productUpdate: {}
    }


    //when component loads display list components


    componentDidMount() {
        console.log('product updated')

        getUpdatedProduct().then(productUpdate => {
            this.setState({ productUpdate: productUpdate.data }

            );
        });

    };

    handleProductUpdate = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const productUpdate = { ...this.state.productUpdate }
        productUpdate[attributeName] = attributeValue
        this.setState({ productUpdate: productUpdate })
    }

    updateProduct = (event) => {
        event.preventDefault()
        getUpdatedProduct(this.state.productUpdate)
    };

    handleNewProductChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newProduct = { ...this.state.newProduct }
        newProduct[attributeName] = attributeValue
        this.setState({ newProduct: newProduct })
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
                    
                    <div><input name="name" type="text" size="50" placeholder="Name" onChange={this.handleNewProductChange} /></div>
                    <div><input name="description" type="text" size="50" placeholder="Description" onChange={this.handleNewProductChange} /></div>
                    <div><input name="image" type="text" size="50" placeholder="Image" onChange={this.handleNewProductChange} /></div>
                    <div><input name="size" type="text" size="50" placeholder="Size" onChange={this.handleNewProductChange} /></div>
                    <div><input name="price" size="70" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
                    <div><br/><input type="submit" value="Create New Product" /></div><br/><br/>

                    <form onSubmit={this.updateProduct}>
                        <div><input name="name" type="text" size="50" placeholder="Name" onChange={this.handleProductUpdate} /></div>
                        <div><input name="description" type="text" size="50" placeholder="Description" onChange={this.handleProductUpdate} /></div>
                        <div><input name="image" type="text" size="50" placeholder="Image" onChange={this.handleProductUpdate} /></div>
                        <div><input name="size" type="text" size="50" placeholder="Size" onChange={this.handleProductUpdate} /></div>
                        <div><input name="price" type="number" min="0.00" step="0.01" size="50" placeholder="Price" onChange={this.handleProductUpdate} /></div>
                        <div><br/><input type="submit" value="Update Product Information" /></div>
                    </form><br/><br/>
                </form>


            </div>
        )


    }


}


export default ProductForm
