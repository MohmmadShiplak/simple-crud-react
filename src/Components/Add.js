import { Form,Button } from 'react-bootstrap';
import { useContext, useState,useReducer } from 'react';
import { ProductContext } from '../contexts/productsContext';
import { useNavigate } from 'react-router-dom';
import productReducers from '../Reducers/productReducers';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Add() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: "", price: "" });
  const {productData, setProductData} = useContext(ProductContext)
  const [state, dispatch] = useReducer(productReducers, productData);
  const handleAddProduct = (e) => {
    e.preventDefault(); // Crucial for form submission
    /*
    const newProduct = {
      Id: uuidv4(),
      name: product.name,
      price: Number(product.price) // Convert to number
    };

const updatedproducts=[...productData, newProduct]

    setProductData(updatedproducts);

    localStorage.setItem("products",JSON.stringify(updatedproducts))
    */

dispatch({type:"Add",payload:product})

    setProduct({ name: "", price: "" });

    navigate("/");
  };

  return (
    

    <div className="container mt-4">
    <h2>Add Product</h2>
    <Form onSubmit={handleAddProduct}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control 
                type="text" 
                value={product.name}
                onChange={(e) => setProduct({...product, name: e.target.value})}
                required
                style={{width:"100%"}}
            />
            
            <Form.Label>Price</Form.Label>
            <Form.Control 
                type="number" 
                step="0.01"
                value={product.price}
                onChange={(e) => setProduct({...product, price: e.target.value})}
                required
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            Add Product
        </Button>
        <Button variant="secondary" onClick={() => navigate("/")} className="ms-2">
            Cancel
        </Button>
    </Form>
</div>








 /*
    <Form onSubmit={handleAddProduct}>
      <Form.Group className="mb-3" controlId="formName" style={{display:"flex",flexDirection:"column",margin:"30px"}} >
        <Form.Label style={{marginLeft:"250px"}}>Product Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter name"
          value={product.name}
          onChange={(e) => setProduct({...product, name: e.target.value})}
          required
style={{width:"100%"}}
        />
        
        <Form.Label style={{marginLeft:"250px"}}>Price</Form.Label>
        <Form.Control 
          type="number" 
          step="0.01"
          placeholder="Enter price" 
          value={product.price}
          onChange={(e) => setProduct({...product, price: e.target.value})}
          required
          style={{width:"50%",marginLeft:"100px",marginBottom:"30px"}}
        />

      </Form.Group>
     
      <Button style={{marginLeft:"40%"}} as="input" type="submit" value="Submit" />
    </Form>
   */
  );
}