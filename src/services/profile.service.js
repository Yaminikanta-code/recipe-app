import axios from "axios";
import { useSelector } from "react-redux";

export const getProfile = async (id) => {
  // const { user } = useSelector((state) => state.auth);
  // id = user?.data._id;
  // do this in component
  return axios.get(AUTH_URL.PROFILE.replace(":id", id));
};
