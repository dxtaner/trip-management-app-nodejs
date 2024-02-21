import axios from "axios";
import { showAlert } from "./alert";

export const resetPassword = async (password, passwordConfirm, resetToken) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `/api/users/resetpassword/${resetToken}`,
      data: {
        password: password,
        passwordConfirm: passwordConfirm,
      },
    });
    if (res.data.status === "success") {
      showAlert("success", "Password changed successfully");
      window.setTimeout(() => {
        location.assign("/me");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
