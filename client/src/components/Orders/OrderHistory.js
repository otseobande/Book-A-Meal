import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styles from './order.scss';
import NoOrder from './NoOrder.js';
import DisplayOrderHistory from './DisplayOrderHistoryTable.js';

/**
 * @class OrderHistory
 */
class OrderHistory extends Component {
  static propTypes = {
    fetchOrderHistory: PropTypes.func.isRequired,
    orders: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool.isRequired,
    cancelOrder: PropTypes.func.isRequired,
    updateOrder: PropTypes.func.isRequired,
    paginationDetails: PropTypes.objectOf(PropTypes.number).isRequired
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

  colorStatus = (status) => {
    let color;
    switch (status) {
      case 'pending':
        color = '#f16800';
        break;
      case 'delivered':
        color = 'green';
        break;
      case 'cancelled':
        color = 'red';
        break;
      default:
        color = 'yellow';
    }

    return (<span style={{ color }}>{status}</span>);
  }
  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { orders, paginationDetails } = this.props;
    return (
      <div className={styles.container}>
        <h2>Order History</h2>
        {
          orders.length ?
            <Fragment>
              <DisplayOrderHistory
                isFetching={this.props.isFetching}
                orders={orders}
                cancelOrder={this.props.cancelOrder}
                updateOrder={this.props.updateOrder}
              />
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
            </Fragment> :
            <NoOrder />
        }
      </div>
    );
  }
}

export default OrderHistory;
