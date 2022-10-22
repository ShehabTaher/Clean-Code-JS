/*  Prefer Composition over inheritance */

// type a relationship : is-a vs has-a


// Not Good
class Market {
  constructor(symbol) {
    this.symbol = symbol;
  }
  /* ...... */
}

class  MarketOrder extends Market {
    constructor(symbol,price,quantity){
        super(symbol)
        this.price = price
        this.quantity = quantity
    }
    /* ...... */
}

// Good
class Market {
    constructor(symbol) {
      this.symbol = symbol;
    }
    /* ...... */
  }
  
  class  Order extends Market {
      constructor(symbol,price,quantity){
          this.price = price
          this.quantity = quantity
      }
      setMarket(symbol){
        this.market = new Market(symbol)
      }
      /* ...... */
  }