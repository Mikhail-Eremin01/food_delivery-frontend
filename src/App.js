import { Routes, Route } from "react-router-dom";
import { Shop } from './components/pages/Shop/Shop';
import { ShoppingCart } from './components/pages/ShopingCart/ShopingCart';
import { NonFoundPage } from './components/pages/NonFoundPage/NonFoundPage';
import { Layout } from './components/Layout/Layout';
import './index.css';

const App = function() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Shop />} />
          <Route
            path='shopping_cart'
            element={<ShoppingCart
            />}
          />
          <Route path='*' element={<NonFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export {App};