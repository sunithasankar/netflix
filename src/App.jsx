import "./App.css";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import RecentlyAdded from "./navbar/RecentlyAdded";
import TvShows from "./navbar/TvShows";
import Movies from "./navbar/Movies";
import Home from "./Home";
import MyList from './navbar/MyList'

function App() {
  return (
    <>     
        <Navbar/> 
        <Routes> 
          <Route path="/" element={<Home/>} />
           <Route path="/tvshows" element={<TvShows/>} /> 
          <Route path="/recentlyadded" element={<RecentlyAdded/>} /> 
          <Route path="/movies" element={<Movies/>} />
          <Route path="/mylist" element={<MyList/>} />   
             </Routes>  
     </>
  );
}

export default App;
