import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import MenuCardContainer from './MenuCard/MenuCardContainer';
import NoMenu from './NoMenu';
import styles from './manage-menus.scss';
import Loader from '../../Loader';

/**
 * @class DisplayMenus
 */
class DisplayMenus extends Component {
  handleLoadMore = () => {
    const { pagination } = this.props;

    this.props.getMenus({
      limit: 10,
      page: pagination.currentPage + 1
    });
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { menus, pagination } = this.props;

    return (

      <InfiniteScroll
        pageStart={1}
        dataLength={menus.length}
        next={this.handleLoadMore}
        initialLoad={false}
        hasMore={pagination.currentPage < pagination.pageCount}
        loader={<Loader />}
        hasChildren={Boolean(menus.length)}
      >
        <div className={styles.menus}>
          {
            menus.length ?
              menus.map(menu => <MenuCardContainer key={menu.id} menu={menu} />) :
              <NoMenu />
          }
        </div>
      </InfiniteScroll>

    );
  }
}

DisplayMenus.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMenus: PropTypes.func.isRequired,
  pagination: PropTypes.objectOf(PropTypes.number).isRequired
};

export default DisplayMenus;
