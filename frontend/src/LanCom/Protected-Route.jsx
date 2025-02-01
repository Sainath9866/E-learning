import { Navigate } from "react-router-dom";

// isAuthenticated function to check if the token exists
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  // if (!isAuthenticated()) {
  //   // Redirect to signin page with a state message
  //   return <Navigate to="/signin" state={{ message: "You need to sign in first!" }} />;
  // }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
