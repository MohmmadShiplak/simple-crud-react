// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductContext } from './contexts/productsContext';
import { useState } from 'react';
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit'; // Add this import
import { v4 as uuidv4 } from 'uuid';
import MySnackbar from './contexts/MySnackbar';
const productsData = [
  { Id: uuidv4(), name: "Tommato", price: 12 },
  { Id: uuidv4(), name: "Potato", price: 12.30 },
  { Id: uuidv4(), name: "Potato", price: 12.30 },
  { Id: uuidv4(), name: "Potato", price: 12.30 }
];

function App() {
  const [productData, setProductData] = useState(productsData);
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");



  function showHideToast(message)
  {
    setOpen(true)
  
  setTimeout(()=>{
    setOpen(false);
    setMessage(message);
  },2000)
  
  }





  return (
  
    <BrowserRouter>



      <div className="App">
        <ProductContext.Provider value={{productData , setProductData }}>
        
          <Routes>
      
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/Edit/:Id" element={<Edit />} /> {/* Add this route */}
          </Routes>
          <MySnackbar open={open} message={message}/>
        </ProductContext.Provider>
    
      </div>
    
    </BrowserRouter>

  )
}

export default App;