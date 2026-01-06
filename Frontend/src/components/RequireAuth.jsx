import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect({
        appState: { returnTo: location.pathname },
      });
    }
  }, [isAuthenticated, isLoading, loginWithRedirect, location]);

  if (!isAuthenticated) return null;

  return children;
}