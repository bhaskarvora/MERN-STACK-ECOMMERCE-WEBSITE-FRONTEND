

import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useNewOrderMutation } from '../redux/api/orderAPI';
import { resetCart } from '../redux/reducer/cartReducer';
import { RootState } from '../redux/store';
import { NewOrderRequest } from '../types/api-types';
import { responseToast } from '../utils/features';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

  const CheckOutForm =() => {

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const {user} = useSelector((state:RootState) => state.userReducer);

    const {shippingInfo,cartItems,subtotal,tax,discount,shippingCharges,total,} =  useSelector((state:RootState) => state.cartReducer);


    

    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const [newOrder] = useNewOrderMutation();

    const submitHandler =  async(e:FormEvent<HTMLFormElement>) =>{

      e.preventDefault();

      if(!stripe || !elements) return;
      setIsProcessing(true);


      const orderData:NewOrderRequest ={
        shippingInfo,
        orderItems:cartItems,
        subtotal,
        tax,
        discount,
        shippingCharges,
        total,
        user: user?._id!,
      };


      // Actual Payment is made here 

     const {paymentIntent,error} =  await stripe.confirmPayment({elements,confirmParams:{return_url:window.location.origin},redirect:"if_required",});


      // For error the below code is there

      if(error) {
        setIsProcessing(false);
        return toast.error(error.message || "Something Went Wrong");
      };


      // If the payment is succedded then show place order 


      if(paymentIntent.status ==="succeeded"){
        const res = await newOrder(orderData);
        dispatch(resetCart());
        responseToast(res,navigate, "/orders");
      }

      setIsProcessing(false);

      setTimeout(() =>{
        setIsProcessing(false);

      },2000);
    };
    return <div className="checkout-container">
      <form onSubmit={submitHandler}>
        <PaymentElement/>
    <button type ="submit" disabled={isProcessing}>{isProcessing?"Processing...":"Pay"}
    </button>

      </form>
    </div>;
  };

const Checkout = () => {


  const location = useLocation();

  const clientSecret: string| undefined =location.state;

  if(!clientSecret)  return <Navigate to ={"/shipping"}/>
  return (
    <Elements options={{clientSecret,}} stripe ={stripePromise}>
    
      <CheckOutForm/>
    </Elements>);
  
};

export default Checkout;


//pi_3PRNwZCusbmjk3pP1pcPYG9o_secret_QXGbNklaaFxattG8EJGGph31V