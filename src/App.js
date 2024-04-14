
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import ShowCategory from "./component/ShowCategory/Showcategory";
import WishList from "./component/wishlist/Wishlist";
import ProductView from "./component/ProductPage/ProductView";
import Profile from "./component/profile/Profile";
import CheckOut from "./component/checkOut/CheckOut";
import Payment from "./component/payment/Payment";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category-list" element={<ShowCategory />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/product-details" element={<ProductView />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/check-out" element={<CheckOut />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
