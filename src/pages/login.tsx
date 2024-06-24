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



// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { FcGoogle } from "react-icons/fc";
// import { auth } from "../firebase";
// import { getUser, useLoginMutation } from "../redux/api/userAPI";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
// import { MessageResponse } from "../types/api-types";
// import { userExist, userNotExist } from "../redux/reducer/userReducer";
// import { useDispatch } from "react-redux";

// const Login = () => {
//   const dispatch = useDispatch();
//   const [gender, setGender] = useState("");
//   const [date, setDate] = useState("");

//   const [login] = useLoginMutation();

//   const loginHandler = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const { user } = await signInWithPopup(auth, provider);

//       console.log({
//         name: user.displayName!,
//         email: user.email!,
//         photo: user.photoURL!,
//         gender,
//         role: "user",
//         dob: date,
//         _id: user.uid,
//       });

//       const res = await login({
//         name: user.displayName!,
//         email: user.email!,
//         photo: user.photoURL!,
//         gender,
//         role: "user",
//         dob: date,
//         _id: user.uid,
//       });

//       if ("data" in res) {
//         toast.success(res.data.message);
//         const data = await getUser(user.uid);
//         dispatch(userExist(data?.user!));
//       } else {
//         const error = res.error as FetchBaseQueryError;
//         const message = (error.data as MessageResponse).message;
//         toast.error(message);
//         dispatch(userNotExist());
//       }
//     } catch (error) {
//       toast.error("Sign In Fail");
//     }
//   };

//   return (
//     <div className="login">
//       <main>
//         <h1 className="heading">Login</h1>

//         <div>
//           <label>Gender</label>
//           <select value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>

//         <div>
//           <label>Date of birth</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>

//         <div>
//           <p>Already Signed In Once</p>
//           <button onClick={loginHandler}>
//             <FcGoogle /> <span>Sign in with Google</span>
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Login;


// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { FcGoogle } from "react-icons/fc";
// import { auth } from "../firebase";
// import { getUser, useLoginMutation } from "../redux/api/userAPI";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
// import { MessageResponse } from "../types/api-types";
// import { userExist, userNotExist } from "../redux/reducer/userReducer";
// import { useDispatch } from "react-redux";

// const Login = () => {
//   const dispatch = useDispatch();
//   const [gender, setGender] = useState("");
//   const [date, setDate] = useState("");

//   const [login] = useLoginMutation();

//   const loginHandler = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const { user } = await signInWithPopup(auth, provider);

//       console.log({
//         name: user.displayName!,
//         email: user.email!,
//         photo: user.photoURL!,
//         gender,
//         role: "user",
//         dob: date,
//         _id: user.uid,
//       });

//       const res = await login({
//         name: user.displayName!,
//         email: user.email!,
//         photo: user.photoURL!,
//         gender,
//         role: "user",
//         dob: date,
//         _id: user.uid,
//       });

//       if (res.data) {
//         toast.success(res.data.message);
//         const data = await getUser(user.uid);
//         dispatch(userExist(data?.user!));
//       } else if (res.error) {
//         const error = res.error as FetchBaseQueryError;
//         const message = (error.data as MessageResponse).message;
//         toast.error(message);
//         dispatch(userNotExist());
//       }
//     } catch (error) {
//       toast.error("Sign In Fail");
//     }
//   };

//   return (
//     <div className="login">
//       <main>
//         <h1 className="heading">Login</h1>

//         <div>
//           <label>Gender</label>
//           <select value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>

//         <div>
//           <label>Date of birth</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>

//         <div>
//           <p>Already Signed In Once</p>
//           <button onClick={loginHandler}>
//             <FcGoogle /> <span>Sign in with Google</span>
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Login;
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase";
import { getUser, useLoginMutation } from "../redux/api/userAPI";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { MessageResponse } from "../types/api-types";
import { userExist, userNotExist } from "../redux/reducer/userReducer";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  const [login] = useLoginMutation();

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const { user } = result;

          const loginPayload = {
            name: user.displayName || "Unknown",
            email: user.email || "Unknown",
            photo: user.photoURL || "Unknown",
            gender,
            role: "user",
            dob: date,
            _id: user.uid,
          };

          const res = await login(loginPayload);

          if ("data" in res) {
            const responseData = res.data as MessageResponse;
            toast.success(responseData.message);
            const data = await getUser(user.uid);
            dispatch(userExist(data?.user!));
          } else {
            const error = res.error as FetchBaseQueryError;
            const message = (error.data as MessageResponse).message;
            toast.error(message);
            dispatch(userNotExist());
          }
        }
      } catch (error) {
        toast.error("Sign In Failed");
      }
    };

    handleRedirectResult();
  }, [dispatch, login, gender, date]);

  const loginHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
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
          <label>Date of birth</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <p>Already Signed In Once</p>
          <button onClick={loginHandler}>
            <FcGoogle /> <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
