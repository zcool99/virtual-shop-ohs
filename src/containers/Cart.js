import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getCurrency, getSubtotal,getTotalWithTax, removeFromCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
      items: getItems(state, props),
      currency: getCurrency(state, props),
      subTotal: getSubtotal(state, props),
      total: getTotalWithTax(state, props),
    };
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
