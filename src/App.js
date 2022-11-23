import logo from './logo.svg';
import './App.css';
import Dashboard  from './components/Dashboard.jsx';
import Signin from './components/Signin.jsx';
import { Route, Switch ,Routes} from 'react-router';
import { BrowserRouter } from 'react-router-dom'
// import Signintwo from "./components/Signintwo.jsx";



function App() {
  return (
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<Dashboard></Dashboard>} />
  <Route path="/signin" element={<Signin ></Signin >} />
  </Routes>

</BrowserRouter>

    
  );
}

export default App;
