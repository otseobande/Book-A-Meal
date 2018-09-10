import React, { PureComponent, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import OrderModal from '../Orders/OrderModal/OrderModal.js';
import localizeNum from '../../utils/localizeNum.js';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal/ConfirmDeleteModal.js';
import EditMealModal from './EditMealModal/EditMealModal.js';
import cancelIcon from '../../../assets/img/cancel-icon.svg';
import pencilIcon from '../../../assets/img/pencil-icon.svg';
import styles from './meal-card.scss';

/**
 * @class MealCard
 */
class MealCard extends PureComponent {
  static propTypes = {
    meal: PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired,
    action: PropTypes.string,
    className: PropTypes.string,
    deleteMeal: PropTypes.func
  };

  static defaultProps = {
    action: '',
    className: '',
    deleteMeal: () => {}
  };

  state = {
    orderModalOpen: false,
    deleteModalOpen: false,
    editModalOpen: false
  }

  openOrderModal = () => {
    this.setState({ orderModalOpen: true });
  }

  closeOrderModal = () => {
    this.setState({ orderModalOpen: false });
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

  handleDelete = () => {
    const { meal } = this.props;

    this.props.deleteMeal(meal);
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const {
      meal,
      action,
      className: addedClassName
    } = this.props;

    return (
      <div className={classnames(styles.card, addedClassName)}>
        <div className={styles.image}>
          <img src={meal.img} alt="meal" />
        </div>
        <div className={styles.body}>
          <div className={styles.title}>
            {meal.title}
          </div>
          <div className={styles.description}>
            {meal.description}
          </div>
        </div>
        <div className={styles.footer}>
          <span>
            <b>Price</b>: &#8358;{localizeNum(meal.price)}
          </span>
          <div className={styles.actions}>
            {
              action === 'order' &&
              <button
                className={styles.orderBtn}
                onClick={this.openOrderModal}
              >
                  Order
              </button>
            }
            {
              action === 'edit' &&
              <Fragment>
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
                <ConfirmDeleteModal
                  isOpen={this.state.deleteModalOpen}
                  confirmText="Are you sure you want to delete meal?"
                  handleClose={this.closeDeleteModal}
                  handleDelete={this.handleDelete}
                />
                <EditMealModal
                  isOpen={this.state.editModalOpen}
                  handleClose={this.closeEditModal}
                  meal={meal}
                />
              </Fragment>
            }
          </div>
        </div>
        {
          action === 'order' &&
          <OrderModal
            isOpen={this.state.orderModalOpen}
            handleClose={this.closeOrderModal}
            meal={meal}
          />
        }

      </div>
    );
  }
}


export default MealCard;
