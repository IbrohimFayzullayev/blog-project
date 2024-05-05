import { useAuth } from "../context/auth";

const Admin: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
        <p className="text-gray-700 text-lg">Welcome, {user?.name}!</p>
      </div>
    </div>
  );
};

export default Admin;
