import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeProduct, moreProduct} from './../actions';
import { Product } from './Product';

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: deal_id => dispatch(removeProduct(deal_id)),
        addToCart: product => dispatch(addToCart(product)),
        moreProduct: () => dispatch(moreProduct())
    };
};


class ProductList extends React.Component {
    state = {
        showCart: false
    }

    render() {
        if (this.state.showCart) {
            return (
                <div>
                    <h1>
                        Tiki promotions
                    </h1>
                    <button className="button button-toggle" onClick={() => { this.toggleProducts() }} > Show list product</button>
                    <div className="product-list">
                        {this.props.cart.map((product, index) => {
                            return (
                                <Product key={index} product={product} classNameButton="button button-remove-product" textButton="Remove porduct" action={() => {this.props.removeProduct(product.deal_id)}}/>
                            );
                        })}                
                    </div>
                </div>
            )
        }
        else
            return (
                <div>
                    <h1>
                        Tiki promotions
                    </h1>
                    <button className="button button-toggle" onClick={() => { this.toggleCart() }} > Show cart</button>
                    <div className="product-list">
                        {this.props.products.map((product, index) => {
                            return (
                                <Product key={index} product={product} classNameButton="button button-add-to-cart" textButton="Add to cart" action={() => {this.props.addToCart(product)}}/>
                            );
                        })}
                    </div>
                    <button className="button button-more-product" onClick={() => { this.props.moreProduct() }} >More product</button>
                </div>
            )
    }

    toggleCart() {
        this.setState({ showCart: true });
    }
    
    toggleProducts() {
        this.setState({ showCart: false });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);