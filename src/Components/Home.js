// Home.js
import { Button, Table } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/productsContext';
import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import productReducers from '../Reducers/productReducers';
export default function Home() {
  const {productData, setProductData} = useContext(ProductContext);
  const [state, dispatch] = useReducer(productReducers, productData);
  function handleDelete(Id) {

dispatch({type:"delete",payload:{Id}})



  }

  const ProductsJSX = productData.map((product) => (
    <tr key={product.Id}>
      <td>{product.Id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <Link to={`/edit/${product.Id}`}> {/* Pass the product ID in URL */}
        <Button style={{margin:"5px"}} variant="warning">Update</Button>
        </Link>
      
        <Button variant="danger" onClick={() => handleDelete(product.Id)}>Delete</Button>
      </td>
    </tr>
  ));



useEffect(()=>{


  const storedproducts=JSON.parse(localStorage.getItem("products"))
setProductData(storedproducts)

},[state])







  return (
    <>
      <Link to="/Add">
        <Button variant="primary" style={{ marginTop: "50px" }}>
          Add Product
        </Button>


      </Link>

      <Table striped bordered hover variant="white" style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th style={{ width: "200px" }}>Id</th>
            <th style={{ width: "200px" }}>Name</th>
            <th style={{ width: "200px" }}>Price</th>
            <th style={{ width: "250px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ProductsJSX}
        </tbody>
      </Table>
    </>
  );
}