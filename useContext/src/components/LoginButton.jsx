import { useContext } from "react";
import { AuthContext } from "../contexts/AuthStore";

function LoginButton() {
  const { isLoggedIn, login } = useContext(AuthContext);

  return !isLoggedIn ? <button onClick={login}>Login to Account</button> : null;
}

export default LoginButton;
