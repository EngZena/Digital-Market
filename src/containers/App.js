import { Component } from 'react';
import Producte from '../Producte/Producte';
import './App.css';
import Auxiliary from '../hoc/Auxiliary';
import { Basket } from '../Basket/Basket';
import AuthContext from '../context/auth-context';
import Login from '../login/login'
class App extends Component {

  state = {

    products: [
      {
        name: 'Chips',
        menu: ['Lays', 'Doritos', 'Pringles', 'Chetos', 'Pizza', 'Bugles'],
        price: [10, 20, 30, 40, 50, 60],
      }, {
        name: 'Drinks',
        menu: ['Orange juice', 'Apple juice', 'Manga juice', 'Fanta', 'Sprit', '7up'],
        price: [10, 20, 30, 40, 50, 60],
      }, {
        name: 'Chocolate',
        menu: ['Today', 'Break', 'Snickers', 'Galaxy', 'kitkat', 'Twix'],
        price: [10, 20, 30, 40, 50, 60],
      }, {
        name: 'Biscuit',
        menu: ['Dance', 'Tea Biscuit', 'Wafer', 'Oreo', 'Safari', 'Starts'],
        price: [10, 20, 30, 40, 50, 60],
      }
    ],
    basket: [],
    showBasket: false,
    total: 0,
    showTotal: true,
    showCards: true,
    authenticated: false,
    disableOrder: true

  }

  loginHandler = (phoneNumber, password) => {
    if (phoneNumber === '0791234567' && password === '123456') {
      this.setState({ authenticated: true })
    } else alert('wrong credentials, please try again :)')
  }

  logoutHandler = () => {
    this.setState({ authenticated: false })
  }


  render() {
    const toggleCards = () => {
      const doesShow = this.state.showCards;
      this.setState({ showCards: !doesShow })
    }
    const toggleBasket = () => {
      const doesShow = this.state.showBasket;
      this.setState({ showBasket: !doesShow })
    }
    const addtoTheBasket = (name, price) => {
      let obj = {
        'name': name, 'price': price
      }
      this.state.basket.push(obj);
    }

    const removeFromTheBasket = (name) => {
      let copy = this.state.basket;
      let el = this.state.basket.findIndex(b => b.name === name);
      copy.splice(el, 1);
      this.setState({ basket: copy });
    }

    const calculateTotal = () => {
      let sum = 0;
      this.state.basket.map((prod, index) => sum += prod.price)
      this.setState({ total: sum });
      if (sum > 0) {
        this.setState({ disableOrder: false })
      }
    }
    const btnLabel = this.state.showBasket ? 'Hide Basket' : 'Show Basket';

    const handleOrder = () => {
      alert('The Driver will call you soon, Thank you :)')
    }



    return (
      <Auxiliary>
        { this.state.authenticated ?
          <div>
            <button className="logoutBtn background" onClick={this.logoutHandler}>logout</button>

            <h1 className="header">
              Digital Market
        </h1>
            <div className="header display row">
              <div className="column firstColumn">
                <Producte elements={this.state.products}
                  toggleCards={toggleCards}
                  showCards={this.state.showCards}
                  basket={this.state.basket}
                  addtoTheBasket={addtoTheBasket}
                />
              </div>
              <div className="basket column">
                <div>
                  <button className="background" onClick={calculateTotal}>Calculate total</button>
                  <div className="display row">
                    <h4 className="column">Total </h4>
                    <h4 className="column">{this.state.total}</h4>
                  </div>
                  <br></br>
                  <button className="background" disabled={this.state.disableOrder}
                    onClick={handleOrder}
                  >Order Now</button>
                  <br></br>
                  <br></br>
                </div>
                <button className="background" onClick={toggleBasket}>{btnLabel}</button>
                {this.state.showBasket ?
                  <Basket
                    basket={this.state.basket}
                    removeFromTheBasket={removeFromTheBasket} />
                  : null}
              </div>
            </div>
          </div>
          :
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
            logoutHandler: this.logoutHandler
          }}>
            <Login />
          </AuthContext.Provider>
        }
      </Auxiliary>
    );
  }

}

export default App;
