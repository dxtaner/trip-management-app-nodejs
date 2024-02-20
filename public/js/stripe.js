import axios from "axios";
import { showAlert } from "./alert";

const stripePublicKey =
  "pk_test_51JDxJeK1OYYaKmJQVlP2lrDz0lANPzyCbdeKbfnKRA37wSFEwfKsav3Je6A9ZrLombW82kCWDcmN4jND5STgOsd9008Pd3yEAJ";
const stripe = Stripe(stripePublicKey);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/bookings/checkout-session/${tourId}`);
    if (session.data.status === "success") {
      await stripe.redirectToCheckout({
        sessionId: session.data.session.id,
      });
    } else {
      showAlert("error", "Failed to create session.");
    }
  } catch (err) {
    showAlert("error", err.message);
  }
};
