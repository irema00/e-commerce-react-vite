import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/actions/ordersActions";

const PreviousOrders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className=" flex flex-wrap mx-auto my-6 p-4 bg-ltGrey rounded-xljustify-between gap-5">
      <div className="flex flex-col w-full  ">
        <h2 className="text-2xl font-bold mb-4">Previous Orders</h2>
        <ul>
          {orders.map((order) => (
            <div className="flex items-center gap-4 p-4 border border-solid border-blue-300 mb-5 shadow-xl rounded-xl font-bold   ">
              <li key={order.id}>
                <p>Order ID: {order.id}</p>
                <p>
                  Products:
                  {order.products.map((product) => (
                    <li key={product.id}>
                      <div className="flex  p-2 gap-4 border border-solid border-semiGrey rounded-xl font-semibold  mb-3 bg-white flex-wrap">
                        <img
                          src={product.images[0].url}
                          alt={product.name}
                          className="h-16 w-16 rounded-xl object-cover object-top"
                        />
                        <div className=" ">
                          <h4 className="font-bold underline">
                            {product.name}
                          </h4>
                          <p>
                            Detail:{" "}
                            <span className="font-normal">
                              {" "}
                              {product.description}
                            </span>
                          </p>
                          <p>
                            Price:{" "}
                            <span className="font-normal">
                              {product.price} $
                            </span>
                          </p>
                          <p>
                            Count:{" "}
                            <span className="font-normal">{product.count}</span>{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </p>{" "}
                <p>Total: {order.price} $</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreviousOrders;
