import { useSelector } from "react-redux";
import { currentUser } from "../store/user/getCurrentUserSlice";

export const useCurrentUser = () => {
  const user = useSelector(currentUser);

  return {
    id: user?.id,
    name: user?.name,
    email: user?.email,
    location: user?.location,
    profilepicture: user?.profilepicture,
  };
};
