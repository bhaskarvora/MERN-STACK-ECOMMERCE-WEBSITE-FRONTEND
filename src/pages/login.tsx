// import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
// import { useState } from "react"
// import toast from "react-hot-toast";
// import { FcGoogle } from "react-icons/fc";
// import { auth } from "../firebase";
// import { useLoginMutation } from "../redux/api/userAPI";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import { MessageResponse } from "../types/api-types";

// const Login = () => {


//     const [gender,setGender] = useState("");
//     const [date,setDate] = useState("");


// const[login] = useLoginMutation();
//     const loginHandler = async() =>
//       {

//         try{

//           const provider = new GoogleAuthProvider();
//           const { user } = await signInWithPopup(auth,provider);

//         const res =  await login({
//           name: user.displayName || "Unknown",
//           email: user.email || "Unknown",
//           photo: user.photoURL || "Unknown",
//           gender,
//           role: "user",
//           dob: date,
//           _id: user.uid,
//           });


//           if("data" in res)
//             {
//               toast.success(res.data);

//             }
//               else{
//                 const error = res.error as FetchBaseQueryError;
//                 const message = (error.data as MessageResponse).message;
//                 toast.error(message);
                
//             }

//           console.log(user);

//         }

//         catch(error)
//         {
//           toast.error("Sign in Failed ");
          
//         }

//       };


  
//   return (
//     <div className="login">

//         <main>
//         <h1 className="heading">
//         Login   
//         </h1>
//         <div>
//             <label>Gender</label>
//             <select value ={gender}
//             onChange={(e) => setGender(e.target.value)}>
            
//             <option value ="">Select Gender</option>
//             <option value ="male">Male</option>
//             <option value ="female">Female</option>


//             </select>
//         </div>

//         <div>
//         <label>Date of Birth</label>

//         <input

//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}/>


//         </div>

//         <div>

//         <p> Already Signed In Once</p>

//         <button onClick={loginHandler}>
//             <FcGoogle/> <span> Sign in with Google</span>
//         </button>

//         </div>

//         </main>
      
//     </div>
//   )
// }

// export default Login




import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase";
import { useLoginMutation } from "../redux/api/userAPI";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { MessageResponse } from "../types/api-types";

const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  const [login] = useLoginMutation();

  const loginHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      console.log({
        name: user.displayName!,
        email: user.email!,
        photo: user.photoURL!,
        gender,
        role: "user",
        dob: date,
        _id: user.uid,
      });


      const res = await login({
        name: user.displayName!,
        email: user.email!,
        photo: user.photoURL!,
        gender,
        role: "user",
        dob: date,
        _id: user.uid,
      });


    

      console.log("Login Response:", res);
      if ("data" in res && res.data !== undefined) {
        toast.success(res.data.message);
      } else {
        const error = res.error as FetchBaseQueryError;
        const message = (error.data as MessageResponse).message;
        toast.error(message);
      }

      
    } catch (error) {
      toast.error("Sign in Failed ");
    }
  };

  return (
    <div className="login">
      <main>
        <h1 className="heading">Login</h1>
        <div>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <p>Already Signed In Once</p>
          <button onClick={loginHandler}>
            <FcGoogle /> <span> Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
