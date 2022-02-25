import { Route, Routes , Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
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
        
      <Route exact path='/' element={<HomePage />} />
      <Route path='/hats' element={<HatsPage />} />
      <Route path='/jackets' element={<JacketsPage />} />
      <Route path='/sneakers' element={<SneakersPage />} />
      <Route path='/womens' element={<WomensPage />} />
      <Route path='/mens' element={<MensPage />} />
      
      </Routes>
      
    </div>
  );
}

export default App;
