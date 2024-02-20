
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Shop/Navbar';
import Header from './Shop/Header';
import Card from './Shop/Card';
import Footer from './Shop/Footer';
import { useState } from 'react';



function App() {
  let cardlist = [{
    id: "01",
    head: "Samsung S24 Ultra",
    capacitiy: "1.5 kg",
    price: "129,999.00",
    picture: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCjyekLTGxFsl4qRLxSG1Z-mqNJWIzPgRkGKmbrbqdmOmpH6D2Rh8z-rRBfO2o1wfXa-uRmj_LDp0YsbFNCB6kCLfvZ3ts",
    text: "Add",
    isclicked: false,
    dis:"12GB RAM, 256GB ROM,	Qualcomm Snapdragon 8 Gen 3, Octa-Core, 3.2GHz,5000 mAh with USB Type-C Charging,"
  },
  {
    id: "02",
    head: "Apple iPhone 13 (128GB) - Pink",
    price: "52,999",
    picture: "https://m.media-amazon.com/images/I/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.jpg",
    text: "Add",
    isclicked: false,
    dis:"15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
  },
  {
    id: "03",
    head: "Apple iPhone 13 Mini (256 GB) - Green",
    price: "38,361",
    picture: "https://m.media-amazon.com/images/I/61cMQeVEGKL._SX679_.jpg",
    text: "Add",
    isclicked: false,
    dis:"Loop handle paper bags, designed for convenient and stylish carrying, perfect for your shopping and gift-giving needs."
  },
  {
    id: "04",
    head: "Apple iPhone 14",
    capacitiy: "3 kg",
    price: "88,999",
    picture: "https://m.media-amazon.com/images/I/31wacBawB3L._SY445_SX342_QL70_FMwebp_.jpg",
    text: "Add",
    isclicked: false,
    dis:"15.40 cm (6.1-inch) Super Retina XDR display Advanced camera system for better photos in any light"
  },
  {
    id: "05",
    head: "Iphone 14 Plus",
    price: "90,999",
    picture: "https://m.media-amazon.com/images/I/31laW9Ex46L._SY445_SX342_QL70_FMwebp_.jpg",
    text: "Add",
    isclicked: false,
    dis:"16.95 cm (6.7-inch) Super Retina XDR display Advanced camera system for better photos in any light"
  },
  {
    id: "06",
    head: "Apple iPhone 14 Pro",
    price: "1,20,000",
    picture: "https://m.media-amazon.com/images/I/61HHS0HrjpL._SX679_.jpg",
    text: "Add",
    isclicked: false,
    dis:"15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion"
  },
  {
    id: "07",
    head: "Apple iPhone 14 Pro Max",
    price: "1,89,900",
    picture: "https://m.media-amazon.com/images/I/71T5NVOgbpL._SX679_.jpg",
    text: "Add",
    isclicked: false,
    dis:"17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion"
  },
  {
    id: "08",
    head: "Apple iPhone 15",
    price: "80,490",
    picture: "https://m.media-amazon.com/images/I/71REplb5oZL._SX679_.jpg",
    text: "Add",
    isclicked: false,
    dis:"DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else."
  },
  ]
  let [cart, setcart] = useState(0);
  let [card, setCard] = useState(cardlist);
  let clicked = (id) => {
    let buttonindex = card.findIndex((btn) => btn.id === id);
    card[buttonindex].isclicked = !card[buttonindex].isclicked;

    if (card[buttonindex].isclicked) {
      setcart(cart + 1);
    } else {
      setcart(cart - 1);
    }
    setCard([...card]);
  }


  return (
    <div>
      <Navbar cart={cart}></Navbar>
      <div className="container text-center ">
        <Header></Header>
      </div>
       <div className="container text-center">
        <div className="row">
          {
            card.map((card) => {
              return <Card data={card} clicked={clicked} />;
            })
          }
        </div>
      </div>
      <div  className='p-5 mt-5'>
        <div className="container text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
