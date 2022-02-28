import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CollectionPreview from "./components/collection-preview/collection-preview.component.jsx"

const HatsPage = (props) => (
  <div>
    console.log(props)
    <h1> HATS PAGE</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1> JACKETS PAGE</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1> SNEAKERS PAGE</h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1> WOMENS PAGE</h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1> MENS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/jackets" element={<JacketsPage />} />
        <Route path="/sneakers" element={<SneakersPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/shoppage" element={<ShopPage />} />
        <Route path="/collection" element={<CollectionPreview />} />
      </Routes>
    </div>
  );
}

export default App;
