import { Route, Routes, Link} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-In-and-sign-up/sign-In-and-sign-up.component";


function App() {
  return (
    <div>
      
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
           <Route path="/shoppage" element={<ShopPage />} />   
           <Route path="/signin" element={<SignInAndSignUpPage />} />   
        </Routes>
      
    </div>
  );
}

export default App;
