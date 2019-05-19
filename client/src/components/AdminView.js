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
                <div className="splash-image">
                    <h1>SweetGirl <br />SugarScrubs <br />by <br />Analise</h1>
                </div>


                {this.state.orderList.map((orders, index) => {
                    // orders
                    return (
                        <table key={index}>

                            
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Size</th>
                                    <th>Order Status</th>
                                    {/* <th>Ship Date</th> */}
                                    <th>Amount Sold</th>
                                    {/* <th>Customer Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th> */}

                                </tr>
                            
                            
                                <tr>
                                    <td>{orders.product}</td>
                                    <td>{orders.quantity} </td>
                                    <td> {orders.size}</td>
                                    <td>{orders.status} </td>
                                    {/* <td> {orders.shipDate}</td> */}
                                    <td> ${orders.totalPrice}.00</td>
                                    
                                    {/* <td>  {orders.name}   </td>
                                <td>{orders.address} </td>
                                <td> {orders.city}</td>
                                <td>{orders.state} </td>
                                <td>  {orders.zip}   </td> */}
                                    {/* add extra keys  */}
                                    {/* add anothe map  */}
                                    {/* order.entireOrder.map() */}

                                </tr>
                            
                        </table>

                    )
                })

                }
                <div>
                    <h3><strong> Total Sales: ${totalSales}.00</strong></h3>
                    <h3> Total Ordered Quantity: {qtySold}</h3>

                </div>
                <ProductForm />

            </div>


        )
    }


}

export default AdminView

