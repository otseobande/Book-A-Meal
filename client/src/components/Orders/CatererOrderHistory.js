import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import isEmpty from 'lodash/isEmpty';
import NoOrder from './NoOrder';
import styles from './order.scss';
import Table from '../ResponsiveTable/Table.js';
import Cell from '../ResponsiveTable/Cell.js';
import Row from '../ResponsiveTable/Row.js';
import CatererOrderHistoryRow from './CatererOrderHistoryRow';

/**
 * @class CatererOrderHistory
 */
class CatererOrderHistory extends Component {
  static propTypes = {
    fetchOrderHistory: PropTypes.func.isRequired,
    paginationDetails: PropTypes.objectOf(PropTypes.number).isRequired,
    deliverOrder: PropTypes.func.isRequired,
    orders: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  /**
   * @returns {undefined} undefined
   */
  componentDidMount() {
    this.props.fetchOrderHistory();
  }

  handlePageClick = (data) => {
    this.props.fetchOrderHistory({
      page: data.selected + 1,
      limit: 10
    });
  }

  handleDeliver = (orderId) => {
    this.props.deliverOrder(orderId);
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { orders, deliverOrder, paginationDetails } = this.props;
    return (
      <div className={styles.container}>
        <h2>Order History</h2>
        {
          isEmpty(orders) ?
            <NoOrder /> :
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
                  orders.map(order => (
                    <CatererOrderHistoryRow
                      key={order.id}
                      order={order}
                      handleDeliver={deliverOrder}
                    />
                  ))
                }
              </Table>
              <ReactPaginate
                breakLabel={<a href="">...</a>}
                pageCount={paginationDetails.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                previousClassName="previous"
                nextClassName="next"
                previousLabel="<<"
                nextLabel=">>"
                onPageChange={this.handlePageClick}
                containerClassName="pagination"
                subContainerClassName="pages pagination"
                activeClassName="active"
              />
              <div className={styles.paginationDetails}>
                {`Page ${paginationDetails.currentPage} of ${paginationDetails.pageCount}`}
              </div>
            </div>
          }
      </div>
    );
  }
}

export default CatererOrderHistory;
