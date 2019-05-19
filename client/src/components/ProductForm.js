import React, { Component } from 'react'
import { getNewProduct } from '../util.js'
import {getUpdatedProduct, getProductList, getDeletedProduct} from '../util.js'


class ProductForm extends Component {
    state = {
        newProduct: {},
        productUpdate: {},
        productList: []
        
    }


    //when component loads display list components


    componentDidMount() {
        console.log('product updated')

        getProductList().then(productList => {
            this.setState( {productList:productList.data })
        }); 
    };

    handleProductUpdate = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const productUpdate = { ...this.state.productUpdate }
        productUpdate[attributeName] = attributeValue
        console.log(productUpdate)
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

    handleDeleteProduct = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const delProduct = {...this.state.delProduct}
        delProduct[attributeName] = attributeValue
        this.setState({delProduct:delProduct})
    }

    deleteProduct = (event) => {
        event.preventDefault()
        getDeletedProduct(this.state.delProduct._id)
    }

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.state.productList)} */}
                <form onSubmit={this.addNewProduct}>
                    
                    <div><input name="name" type="text" size="50" placeholder="Name" onChange={this.handleNewProductChange} /></div>
                    <div><input name="description" type="text" size="50" placeholder="Description" onChange={this.handleNewProductChange} /></div>
                    <div><input name="image" type="text" size="50" placeholder="Image" onChange={this.handleNewProductChange} /></div>
                    <div><input name="size" type="text" size="50" placeholder="Size" onChange={this.handleNewProductChange} /></div>
                    <div><input name="price" size="70" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
                    <div><br/><input type="submit" value="Create New Product" /></div><br/><br/>
                </form>

                <form onSubmit={this.updateProduct}>
                        <select name="_id" onChange={this.handleProductUpdate}>{this.state.productList.map(product =>(<option value={product._id}>{product.name}</option>))}</select>
                        <div><input name="name" type="text" size="50" placeholder="Name" onChange={this.handleProductUpdate} /></div>
                        <div><input name="description" type="text" size="50" placeholder="Description" onChange={this.handleProductUpdate} /></div>
                        <div><input name="image" type="text" size="50" placeholder="Image" onChange={this.handleProductUpdate} /></div>
                        <div><input name="size" type="text" size="50" placeholder="Size" onChange={this.handleProductUpdate} /></div>
                        <div><input name="price" type="number" min="0.00" step="0.01" size="50" placeholder="Price" onChange={this.handleProductUpdate} /></div>
                        <div><br/><input type="submit" value="Update Product Information" /></div>
                    </form><br/><br/>

                    <form onSubmit={this.deleteProduct}>
                        <select name="_id" onChange={this.handleDeleteProduct}>{this.state.productList.map(product =>(<option value={product._id}>{product.name}</option>))}</select>                        
                        <div><br/><input type="submit" value="Delete This Product" /></div>
                    </form><br/><br/>

            </div>
        )


    }


}


export default ProductForm
