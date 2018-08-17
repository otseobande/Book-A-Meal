import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import ConfirmDeleteModal from '../../../ConfirmDeleteModal/ConfirmDeleteModal.js';
import cancelIcon from '../../../../../assets/img/cancel-icon.svg';
import pencilIcon from '../../../../../assets/img/pencil-icon.svg';
import styles from './menu-card.scss';
import EditMenuModalContainer from './EditMenuModalContainer.js';

/**
 * @class MenuCard
 */
class MenuCard extends Component {
  static propTypes = {
    menu: PropTypes.shape({
      date: PropTypes.string.isRequired,
      categories: PropTypes.array.isRequired
    }).isRequired,
    deleteMenu: PropTypes.func.isRequired
  }

  state = {
    deleteModalOpen: false,
    editModalOpen: false
  }

  openDeleteModal = () => {
    this.setState({ deleteModalOpen: true });
  }

  closeDeleteModal = () => {
    this.setState({ deleteModalOpen: false });
  }

  openEditModal = () => {
    this.setState({ editModalOpen: true });
  }

  closeEditModal = () => {
    this.setState({ editModalOpen: false });
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { menu, deleteMenu } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.body}>
          <h4 className={styles.dateHeader}>
            {format(menu.date, 'Do MMM, YYYY')}.
          </h4>
          {
            menu.categories.map(category => (
              <div key={category.id} className={styles.category}>
                <h4 className={styles.categoryTitle}>
                - {category.title}
                </h4>
                {
                  category.meals.map(meal => (
                    <div
                      key={meal.id}
                      className={styles.menuMeal}
                    >
                      * {meal.title}
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
        <div className={styles.footer}>
          <div className={styles.actions}>
            <button
              className={styles.iconBtn}
              onClick={this.openEditModal}
            >
              <img
                src={pencilIcon}
                width="18"
                alt="edit"
                className={styles.icon}
              />
            </button>
            <button
              className={styles.iconBtn}
              onClick={this.openDeleteModal}
            >
              <img
                src={cancelIcon}
                width="18"
                alt="delete"
                className={styles.icon}
              />
            </button>
          </div>
        </div>
        <ConfirmDeleteModal
          isOpen={this.state.deleteModalOpen}
          handleClose={this.closeDeleteModal}
          handleDelete={() => deleteMenu(menu.date)}
        />
        <EditMenuModalContainer
          isOpen={this.state.editModalOpen}
          handleClose={this.closeEditModal}
          date={menu.date}
          categories={menu.categories}
        />
      </div>
    );
  }
}

export default MenuCard;
