
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

import Home from '../Pages/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path='/' Component={Home}></Route>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
