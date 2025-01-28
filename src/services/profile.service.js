import axios from "axios";
import { useSelector } from "react-redux";

export const getProfile = async (id) => {
  const { user } = useSelector((state) => state.auth);
  id = user?.data._id;
  return axios.get(AUTH_URL.PROFILE.replace(":id", id));
};
