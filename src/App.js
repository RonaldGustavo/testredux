import './App.css';
import { ListKontak } from './components';
import NameForm from './components/form';
// import Hp from './components/hp';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import ListKontak from './components/ListKontak';

function App() {
  // const [name, setName] = useState("afif")
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ListKontak />} />
      <Route path="/form" element={<NameForm />} />
 

      {/* redirect if random path to last page*/}
    </Routes>
  </Router>



  );
}

export default App;
