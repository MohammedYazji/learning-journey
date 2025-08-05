/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    // 1) Initialize Stripe
    const stripe = Stripe('pk_test_51RskSa0UJbxUQiMWLPancq46gh0EUiTEwm3mDif8k6cfIsfg2rJW9csaaD50rK0xQtgYfRcJlBglwIE6ECXR919Z00BPetHW5y');
    
    // 2) Get checkout session from API
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`,
    );

    // 3) Redirect to checkout
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.error('Stripe error:', err);
    showAlert('error', err.response?.data?.message || 'Something went wrong with the payment');
  }
};
