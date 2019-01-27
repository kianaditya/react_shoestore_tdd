import React, { Component } from "react";
import PropTypes from "prop-types";

export class ProductList extends Component {
  render() {
    return (
      <ul>
        {this.props.products.map(product => (
          <li key={product.id} onClick={() => this.props.onProductSelect(product)}>
            {product.name} {product.brand}
          </li>
        ))}
      </ul>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onProductSelect: PropTypes.func.isRequired

};

export default ProductList;
