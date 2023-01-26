import './App.css';
import Header from './components/Header/Header'
import Registration from './components/Registration/Registration'
import Autorization from './components/Autorization/Autorization'
import Catalog  from './components/Catalog/Catalog'
import Cart from './components/Cart/Cart'
import Orders from './components/Orders/Orders'

function App() {
  return (
    <div className="App">
      <Header />
      <Registration />
      <Autorization />
      <Catalog />
      <Cart />
      <Orders />
    </div>
  );
}

export default App;
