import { useEffect, useState } from "react";
import bootstrap from "bootstrap"
import './App.css';
import Cart from "./component/Cart/Cart";
import Header from "./component/Header/Header";
import ProductDetail from "./component/ProducDetail/Producdetail";
import Product from "./component/Product/Product";
import ProductList from "./component/ProductList/Productlist";

const initialProduct = [
  {
    id: 1,
    name: "Samsung Galaxy A10",
    price: "40906000",
    img: "image/samsung-galaxy.jpg",
    info: {
      screen: "AMOLED Full HD 9.0",
      os: "Android 9.0",
      frontCamera: "20MP",
      backCamera: "Chính 48MB, phụ 30MP",
    },
    ram: "4 GB",
    rom: "64 GB",
  },
  {
    id: 2,
    name: "IPhone12",
    price: "20306000",
    img: "image/iphone-12.jpg",
    info: {
      screen: "Full HD 12.0",
      os: "IOS 14",
      frontCamera: "20MP",
      backCamera: "Chính 100MB, phụ 30MP",
    },
    ram: "16 GB",
    rom: "32 GB",
  },
  {
    id: 3,
    name: "Xiaomi Note 10",
    price: "10005000",
    img: "image/xiaomi-redmi-note-10-5g.jpg",
    info: {
      screen: "OLED 10.0",
      os: "Android 8.0",
      frontCamera: "69MP",
      backCamera: "Chính 96MB, phụ 30MP",
    },
    ram: "10 GB",
    rom: "64 GB",
  },
];
function App() {
  const [products, setProducts] = useState ([]);
  const [cart, setCart] = useState ([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect (() => {
    setProducts(initialProduct);
  }, []
  );

  const onViewProductDetal = (id) => {
    console.log("Id:", id);

    const selectedProduct = products.find((product) => product.id === id);
    setSelectedProduct(selectedProduct);
  };

 
  return (
    <div className="App">
      <Header/>
      <Cart/>
      <ProductList
      products = {products}
      onViewProductDetal = {onViewProductDetal}
      />
 
      <ProductDetail/>

    </div>
  )
};

export default App;
