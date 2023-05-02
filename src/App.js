import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MenuList from './components/MenuList';
import CartItems from './components/CartItems';
import Dosa from "./images/Dosa.jpg"
import Chowmin from "./images/Chowmin.jpg"
import Biriyani from "./images/Biriyani.jpg"
import vada from "./images/Vada.jpg"
import Paneer from "./images/Paneer.jpg"
import PunjabiThali from "./images/PunjabiThali.jpg"
import Chole from "./images/Chole.jpg"
import RajasthaniThali from "./images/RajasthaniThali.jpg"

function App() {

  const [data, setData] = useState([
    {
      id: "1",
      name: "Dosa",
      price: 60,
      image: Dosa,
    },
    {
      id: "2",
      name: "Chowmin",
      price: 160,
      image: Chowmin,
    },
    {
      id: "3",
      name: "Paneer",
      price: 160,
      image: Paneer,
    },
    {
      id: "4",
      name: "Chicken Biriyani",
      price: 200,
      image: Biriyani,
    },
    
    {
      id: "5",
      name: "Vada",
      price: 200,
      image: vada
    },
   {
      id: "6",
      name: "Punjabi Thali",
      price: 200,
      image: PunjabiThali,
    },
    {
      id: "7",
      name: "Chole Bhatore",
      price: 60,
      image: Chole,
    },
   
    {
      id: "8",
      name: "Rajasthani Thali",
      price: 200,
      image: RajasthaniThali,
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  // console.log(cart)
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }
  return (
    <div>
      <Header count={cart.length} setShowCart={(value)=>setShowCart(value)} />
{
  showCart ?
  <CartItems cart={cart} /> : 
  <MenuList data={data} addToCart={addToCart} />
}
      
     
    </div>
  )
}

export default App
