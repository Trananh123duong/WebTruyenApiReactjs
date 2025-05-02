import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './Components/DetailPage';
import Home from './Components/Home';
import Genre from './Components/Genre';
import Trending from './Components/Trending';
import Search from './Components/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/comics/:slug" element={<DetailPage></DetailPage>}></Route>
        <Route path="/genre/:slug" element={<Genre></Genre>}></Route>
        <Route path="/trending/:slug" element={<Trending></Trending>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
