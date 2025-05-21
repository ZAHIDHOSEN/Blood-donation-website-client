// import React, { useContext, useEffect, useState } from 'react';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { AuthContext } from '../Provider/AuthProvider';
// import { useNavigate } from 'react-router-dom';
// import UseAxiosSecure from '../Hook/UseAxiosSecure';

// const CheckoutForm = () => {
//     const [error, setError] = useState('')
//     const [clientSecret, setClientSecret] = useState('')
//     const [transactionId, setTransactionId] = useState('')

//     const stripe = useStripe()
//     const elements = useElements();
//     const axiosSecure = UseAxiosSecure();
//     const {user} = useContext(AuthContext)
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);

 

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);
//          await axiosSecure.post('/create-payment-intent',{price: 10})
//          .then(res =>{
//             console.log(res.data.clientSecret);
//             setClientSecret(res.data.clientSecret)
//          })
         
    
      
    
//         const result = await stripe.confirmCardPayment(clientSecret, {
//           payment_method: {
//             card: elements.getElement(CardElement),
//           },
//         });
    
//         if (result.error) {
//           alert(result.error.message);
//         } else {
//           if (result.paymentIntent.status === 'succeeded') {
//             alert('Payment succeeded!');
//           }
//         }
//         setLoading(false);
//       };

//     return (
//         <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe || loading}>
//           {loading ? 'Processing…' : 'Pay Now'}
//         </button>
//       </form>
//     );
// };

// export default CheckoutForm;




import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import axios from 'axios';

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Create Payment Intent on component mount
  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: 10 })
      .then(res => {
        console.log('Client Secret:', res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch(err => {
        console.error('Error creating payment intent:', err);
      });
  }, [axiosSecure]);

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError('Stripe not loaded properly.');
      setLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setError('Card Element not found.');
      setLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName || 'Anonymous',
          email: user?.email || 'unknown@example.com',
        },
      },
    });

    if (result.error) {
      console.error(result.error);
      setError(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment Intent:', result.paymentIntent);
        setTransactionId(result.paymentIntent.id);
        alert('Payment succeeded!');
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || !clientSecret || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {loading ? 'Processing…' : 'Pay Now'}
      </button>
      {error && <p className="text-red-600">{error}</p>}
      {transactionId && (
        <p className="text-green-600">Transaction completed: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
