import React, { useEffect } from "react";
import { authAxios } from "../utils/axios";

const Admin: React.FC = () => {
  authAxios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`;
  useEffect(() => {
    const getUser = async () => {
      try {
        await authAxios.get("/users/me").then((res) => {
          console.log(res.data);
        });
      } catch (error) {}
    };
    getUser();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
        <p className="text-gray-700 text-lg">Welcome, Admin!</p>
        {/* Add your admin functionality/components here */}
      </div>
    </div>
  );
};

export default Admin;
