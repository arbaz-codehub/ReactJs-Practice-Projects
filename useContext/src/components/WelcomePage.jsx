import { useContext } from "react";
import { AuthContext } from "../contexts/AuthStore";

function WelcomePage() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to Our Page</h1>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <p>Please Login to continue...</p>
      )}
    </div>
  );
}

export default WelcomePage;
