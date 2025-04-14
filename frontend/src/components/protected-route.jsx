/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

  // Prevent rendering until Clerk is fully loaded
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color="#3498db" width={200} />
      </div>
    );
  }

  // If user is not signed in, redirect to login page
  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  // Allow access to library without role restriction
  if (pathname === "/library") {
    return children;
  }

  // Redirect to '/my-page' only if user has no role and is not accessing '/my-page'
  if (!user?.unsafeMetadata?.role && pathname !== "/my-page") {
    return <Navigate to="/my-page" />;
  }

  return children;
};

export default ProtectedRoute;

