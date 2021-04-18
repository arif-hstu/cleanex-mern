import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';

const CheckoutForm = ({fetchedService, error, setError, inputInfo, sendToDatabase }) => {
  const stripe = useStripe();
  const elements = useElements();

    console.log(fetchedService);


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();


    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    if (inputInfo.buyerName, inputInfo.buyerEmail, inputInfo.serviceName) {
      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setError({
        error: 'generalError'
      });
      } else {
        sendToDatabase();
        setError({});
      }
    } else {
      setError({
        error: 'generalError'
      });
    }

  };

  return (
    <form className='CardElement' onSubmit={handleSubmit}>
      <CardElement />

      <button className="primaryBtn" type="submit" disabled ={!stripe ||fetchedService.length===0}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;