// src/components/UserProfile.jsx
import { useAuth0 } from "@auth0/auth0-react";

export default function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return null;

  return (
    <div className="flex items-center gap-3">
      <img src={user?.picture} alt={user?.name} className="w-8 h-8 rounded-full" />
      <div>
        <p className="font-medium">{user?.name}</p>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>
    </div>
  );
}