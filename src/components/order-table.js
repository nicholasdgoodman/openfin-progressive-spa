import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

import { OrderTicketModal as OrderTicketBrowser } from './order-ticket';
import { OrderTicketModal as OrderTicketOF } from './order-ticket-of';

export const OrderTable = (props) => {
    // Ignore this line, it's just for the demo:
    const OrderTicketModal = props.dialog ? OrderTicketOF : OrderTicketBrowser;

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            let res = await fetch('/api/orders.json');
            let orders = await res.json();

            setOrders(orders);
        }

        fetchOrders();
    },[]);

    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
      <Table hover>
        <thead>
          <tr>
            <th>Security</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
            {
                orders.map(order => (
                <tr key={order.ticker} onClick={() => setSelectedOrder(order)}>
                    <th scope="row">{order.ticker}</th>
                    <td>{order.price}</td>
                    <td>{order.quantity}</td>
                </tr>
                ))
            }
        </tbody>
        <OrderTicketModal {...{selectedOrder, setSelectedOrder}} />
      </Table>
    );
  }