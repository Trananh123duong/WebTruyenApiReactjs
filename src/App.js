import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './Components/DetailPage';
import Home from './Components/Home';
import Genre from './Components/Genre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/comics/:slug" element={<DetailPage></DetailPage>}></Route>
        <Route path="/genre/:slug" element={<Genre></Genre>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
