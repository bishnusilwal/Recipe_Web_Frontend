
import {Helmet} from "react-helmet";
import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/Header';
import Footer from './mycomponents/Footer';
import {BrowserRouter} from 'react-router-dom';
import Mid from './mycomponents/Mid';
function App() {
  const data = {
  }
  return (
    <div>

      <BrowserRouter>
      
      <Header username ={data.username} address={data.address}></Header>
      <Mid></Mid>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;