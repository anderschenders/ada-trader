import Backbone from 'backbone';

const Order = Backbone.Model.extend({

  initialize(attributes) {
    this.targetPrice = parseFloat(attributes.targetPrice);
    this.buy = attributes.buy;
    this.symbol = attributes.symbol;
  },

  validate(attributes) {
    const errors = {};

    //TODO: validate for specific symbols?
    if (!attributes.symbol) { //all orders require a symbol
      errors['symbol'] = ['A symbol is required'];
    }

    if (!attributes.targetPrice || attributes.targetPrice === '0') {
      errors['price'] = ['A price is required']
    }

    if (attributes.buy !== true && attributes.buy !== false) {
      errors['order type'] = ['You must indicate either buy or sell']
    }

    if ( Object.keys(errors).length > 0 ) {
      return errors;
    } else {
      return false;
    }
  },
});

export default Order;
