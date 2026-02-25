import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [bringOrder, setBringOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/orders") // make sure port is correct
      .then((res) => {
        console.log(res.data);
        setBringOrder(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders">

      {bringOrder.length === 0 ? (

        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>

      ) : (

        <div className="order-table">
          <h3>Your Orders</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {bringOrder.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      )}

    </div>
  );
};

export default Orders;
