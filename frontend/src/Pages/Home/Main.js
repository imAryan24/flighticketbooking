import Home from '../../components/home/home';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Search from '../../components/search/search';
import Info from '../../components/info/info';

import './main.scss';


function Main() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Search/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default Main;