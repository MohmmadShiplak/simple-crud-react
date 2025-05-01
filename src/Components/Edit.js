// Edit.js
import { Form, Button } from 'react-bootstrap';
import { useContext, useState, useEffect,useReducer } from 'react';
import { ProductContext } from '../contexts/productsContext';
import { useNavigate, useParams } from 'react-router-dom';
import productReducers from '../Reducers/productReducers';

export default function Edit() {
    const navigate = useNavigate();
    const { Id } = useParams();
    const {productData, setProductData} = useContext(ProductContext);
    const [product, setProduct] = useState({ name: "", price: "" });
  const [state, dispatch] = useReducer(productReducers, productData);
    useEffect(() => {
        const productToEdit = productData.find(p => p.Id === Id);
        if (productToEdit) {
            setProduct({
                name: productToEdit.name,
                price: productToEdit.price.toString()
            });
        }
    }, [Id, productData]);

    const handleUpdateProduct = (e) => {

        e.preventDefault();
        
       
dispatch({type:"update",payload:{
Id:Id,
name:product.name,
price:product.price

}})


        navigate("/");

    }


  

/*
        setProducts(prevProducts => 
            prevProducts.map(p => 
                p.Id === Id 
                    ? { ...p, name: product.name, price: Number(product.price) } 
                    : p
            )
        );
        */

    return (
        <div className="container mt-4">
            <h2>Edit Product</h2>
            <Form onSubmit={handleUpdateProduct}>
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
                    Update Product
                </Button>
                <Button variant="secondary" onClick={() => navigate("/")} className="ms-2">
                    Cancel
                </Button>
            </Form>
        </div>
    );
}