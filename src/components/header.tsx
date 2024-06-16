import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";





interface PropsType{
  user:User | null;
}


const Header = ({user}:PropsType) => {
  const [isOpen,setIsOpen] = useState<boolean>(false);

const logoutHandler = async() => {
try{

  await signOut(auth);
  toast.success("Sign Out Successfully");

  setIsOpen(false);

}

catch (error) {
  toast.error("Sign Out Fail");
}


};





return <nav className="header">

  <Link onClick={()=>setIsOpen(false)} to = {"/"}>Home</Link>
  <Link onClick={()=>setIsOpen(false)} to = {"/search"}> <FaSearch/></Link>
  <Link onClick={()=>setIsOpen(false)} to = {"/cart"}> <FaShoppingBag/></Link>



{/*// if it exists user is logged in and we can show profile button*/}
{
  user?._id?(
    <>
    

    {/*Here below it will toggle so it will go from open to close and close to open */}
    <button  onClick={()=>setIsOpen((prev)=>!prev)}>
      <FaUser></FaUser>
    </button>

    <dialog open ={isOpen}>
<div>
  {
    user.role ==="admin" && (<Link  onClick={()=>setIsOpen(false)} to ="/admin/dashboard">Admin</Link>)
  }

  <Link onClick={()=>setIsOpen((prev)=>!prev)} to ="/orders">Orders</Link>

  <button onClick={logoutHandler}>

<FaSignOutAlt/>

  </button>
</div>

    </dialog>

    </>
  ): <Link to={"/login"}>

<FaSignInAlt></FaSignInAlt>

  </Link>
}


</nav>;
}

export default Header
