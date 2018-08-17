import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader.js';
import Table from '../ResponsiveTable/Table.js';
import Cell from '../ResponsiveTable/Cell.js';
import Row from '../ResponsiveTable/Row.js';
import OrderRow from './OrderRow.js';

const DisplayOrderHistory = ({
  isFetching,
  orders,
  cancelOrder,
  updateOrder
}) => (
  <div>
    <Table>
      <Row header>
        <Cell>Date</Cell>
        <Cell>Meal</Cell>
        <Cell>Qty</Cell>
        <Cell>Price</Cell>
        <Cell>Delivery address</Cell>
        <Cell>Status</Cell>
        <Cell>Actions</Cell>
      </Row>
      {
        !isFetching &&
        orders.map(order => (
          <OrderRow
            key={order.id}
            order={order}
            handleCancelOrder={cancelOrder}
            handleUpdateOrder={updateOrder}
          />
        ))
      }
    </Table>
    {isFetching && <Loader />}
  </div>
);

DisplayOrderHistory.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  cancelOrder: PropTypes.func.isRequired,
  updateOrder: PropTypes.func.isRequired
};

export default DisplayOrderHistory;
