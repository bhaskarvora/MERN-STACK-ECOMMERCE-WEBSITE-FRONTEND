import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";


type ProductsProps = {

  productId: string;
  photo:string;
  name:string;
  price:number;
  stock:number;
  handler:(cartItem:CartItem) => string | undefined;
};



const ProductCard = ({productId,price,name,photo,stock,handler}:ProductsProps) => {
  return (

    //uploads\0efc7979-46ec-4b4a-8111-74ce29f7572e.jpeg
    <div className="product-card">


      <img src ={`${server}/${photo}`}  alt={name}/>
      <p>{name}</p>
      <span>${price}</span>

      <div>

        <button onClick={()=>handler({productId,price,name,photo,stock,quantity:1})}><FaPlus/></button>
      </div>
      
    </div>
  )
};

export default ProductCard