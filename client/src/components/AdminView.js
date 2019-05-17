import React, { Component } from 'react'
import ProductList from './ProductList.js'
import { getOrderList } from '../util.js'
import ProductForm from './ProductForm.js';

class AdminView extends Component {

    state = {
        orderList: []
    };

    //when component loads display list components


    componentDidMount() {
        console.log('order list')

        getOrderList().then(orderList => {
            this.setState({ orderList: orderList.data }

            );
        });
    }

    deleteProduct = () => {
        this.props.deleteProductFromListByIndex(this.props.index)
    };

    showOptions = () => {
        const adminOptions = (
            <div>
                <button onClick={this.deleteProduct}>Delete</button>
            </div>
        )
        //if (adminOptions)
    }

    render() {

        const totalSales = this.state.orderList.reduce((totalSales, orders) => {
            return totalSales + orders.totalPrice
        }, 0.00)

        const qtySold = this.state.orderList.reduce((qtySold, orders) => {
            return qtySold + orders.quantity
        }, 0)

        return (
            <div>
                <h1>SweetGirl SugarScrubs by Analise</h1>

                {this.state.orderList.map((orders, index) => {
                    // orders
                    return (
                        <div key={index}>
                            <h3>  {orders.product}   </h3>
                            <h3>{orders.quantity} </h3>
                            <h3> {orders.size}</h3>
                            <h3>{orders.status} </h3>
                            <h3> {orders.shipDate}</h3>
                            <h3> ${orders.totalPrice}.00</h3>

                        </div>

                    )
                })

                }
                <div>
                    <h3> Total Sales: ${totalSales}.00</h3>
                    <h3> Total Ordered Quantity: {qtySold}</h3>

                </div>
                <ProductForm/>

            </div>


        )
    }


}

export default AdminView

