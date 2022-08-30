import { Routes, Route } from "react-router-dom";
import { Shop } from './components/pages/Shop/Shop';
import { useState } from "react";
import { ShoppingCart } from './components/pages/ShopingCart/ShopingCart';
import { NonFoundPage } from './components/pages/NonFoundPage/NonFoundPage';
import { Layout } from './components/Layout/Layout';
import './index.css';

const App = function() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDishes, setTotalDishes] = useState([]);

  const addCardToBasket = (item) => {
    setTotalDishes([...totalDishes, item]);
    setTotalPrice(totalPrice + item.price);
    console.log(item);
    console.log(totalPrice);
  }

  const plusPrice = (price) => {
    setTotalPrice(totalPrice + price);
  }
  const minusPrice = (price) => {
    setTotalPrice(totalPrice - price);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Shop addCardToBasket = {addCardToBasket} />} />
          <Route
            path='shopping_cart'
            element={<ShoppingCart
              totalPrice = {totalPrice}
              cardItems = {totalDishes}
              plusPrice = {plusPrice}
              minusPrice = {minusPrice}
            />}
          />
          <Route path='*' element={<NonFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export {App};