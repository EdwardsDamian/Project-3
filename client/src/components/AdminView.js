import React, { Component } from 'react'
import { getOrderList } from '../util.js'

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

    render() {
        return (
            <div>
                <h1>SweetGirl SugarScrubs by Analise</h1>

                {this.state.orderList.map((orders, index)=>{
                    // scrubs
                    return( 
                        <div key={index}>
                        <h3>  {orders.product}   </h3>                    
                        <h3>{orders.quantity} </h3>
                        <h3> {orders.size}</h3>
                        <h3>{orders.status} </h3>
                        <h3> {orders.shipDate }</h3>
                        <h3> ${orders.totalPrice}.00</h3>

                        

                        </div>
                    )
                })
                
                }

            </div>

            
        )
    }


}

export default AdminView

//     product: String,
//     quantity: Number,
//     size: String,
//     totalPrice: Number,
//     status: String,
//     shipDate: Date,