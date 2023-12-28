import serviceUtil from "../../utils";

const loginService = async (payload) => {
  try {
    const { data } = await serviceUtil.post(`/user/login`, payload);
    return { data };
  } catch (error) {
    return { error };
  }
};

const registerService = async (payload) => {
  try {
    const { data } = await serviceUtil.post(`/user/register`, payload);
    return { data };
  } catch (error) {
    return { error };
  }
};

const forgotPasswordService = async (payload) => {
  try {
    const { data } = await serviceUtil.put(`/user/resetPassword`, payload);
    return { data };
  } catch (error) {
    return { error };
  }
};

const verifyOTPservice = async (payload) => {
  try {
    const { data } = await serviceUtil.post(`/user/verifyotp`, payload);
    return { data };
  } catch (error) {
    return { error };
  }
};




export { loginService, registerService, verifyOTPservice,forgotPasswordService };
