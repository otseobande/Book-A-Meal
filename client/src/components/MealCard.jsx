import React, { Component } from 'react';

class MenuPeep extends Component{
  render () {
    return (
      <div className="card">
        <div className="card-img">
          <img src={this.props.image} />
        </div>
        <div className="card-body">
          <div className="card-title">{this.props.title}</div>
          <div className="card-description">
            {this.props.description}
          </div>
        </div>
        <div className="card-footer">
          <span>
            <b>Price</b>: &#8358;{this.props.price}
          </span>
          <div className="card-options">
            <a className="order-btn" href="login.html">Order</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuPeep;