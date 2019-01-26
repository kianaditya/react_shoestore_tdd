import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class ProductList extends Component {
  render() {
    return (
      <div>
        ProductList
      </div>
    )
  }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductList
