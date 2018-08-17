import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import Loader from '../../Loader.js';
import styles from './manage-menus.scss';
import SetMenuModalContainer from './SetMenuModalContainer.js';
import DisplayMenus from './DisplayMenus.js';

/**
 * @class ManageMenus
 */
class ManageMenus extends Component {
  static propTypes = {
    getMenus: PropTypes.func.isRequired,
    getMeals: PropTypes.func.isRequired,
    menus: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool.isRequired
  }

  state = {
    setMenuModalOpen: false
  }

  /**
   * @returns {undefined} undefined
   */
  componentDidMount() {
    this.props.getMenus();
    this.props.getMeals();
  }

  closeMenuModal = () => {
    this.setState({ setMenuModalOpen: false });
  }

  openMenuModal = () => {
    this.setState({ setMenuModalOpen: true });
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { menus, isFetching } = this.props;
    return (
      <DocumentTitle title="Menus - Book-A-Meal">
        <div className={styles.container}>
          <h2>Manage Menus</h2>
          <button
            className={styles.successBtn}
            onClick={this.openMenuModal}
          >
             Set Menu
          </button>
          {
              isFetching ?
                <Loader /> :
                <DisplayMenus
                  menus={menus}
                />
            }
          <SetMenuModalContainer
            isOpen={this.state.setMenuModalOpen}
            handleClose={this.closeMenuModal}
          />
        </div>
      </DocumentTitle>
    );
  }
}

export default ManageMenus;
