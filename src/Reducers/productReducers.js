import { v4 as uuidv4 } from 'uuid';
export default function productReducers(currentsate,action)
{

switch (action.type)
{

case "get":
{


    const storedproducts=JSON.parse(localStorage.getItem("products"))
return storedproducts

}

case "delete":
{

    const updatedProducts = currentsate.filter(product => product.Id !== action.payload.Id);
    localStorage.setItem("products",JSON.stringify(updatedProducts))
   return updatedProducts
}

case "update":
    {

        const updatedProducts = currentsate.map((t) => 
            t.Id === action.payload.Id
               ? { ...t, name: action.payload.name, price: Number(action.payload.price) } 
               : t
           );
      
           localStorage.setItem("products",JSON.stringify(updatedProducts))
return updatedProducts



    }


case "Add":
{
    const newProduct = {
        Id: uuidv4(),
        name: action.payload.name,
        price: action.payload.price // Convert to number
      };
  
  const updatedproducts=[...currentsate, newProduct]
  
  
      localStorage.setItem("products",JSON.stringify(updatedproducts))
      return updatedproducts
   

}


default :{

    throw Error ("Unknow Action "+ action.type);

}


}


}

















