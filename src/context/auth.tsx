import { useEffect, useState, useContext, createContext } from "react";
import { authAxios } from "../utils/axios";

type Props = {
  children: React.ReactNode;
};

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  user: UserProps | null;
  setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    authAxios.defaults.headers.Authorization = `Bearer ${token}`;
    if (token) setIsLoggedIn(true);

    const getUser = async () => {
      try {
        await authAxios.get("/users/me").then((res) => {
          setIsLoggedIn(true);
          setUser(res.data);
        });
      } catch (error) {
        setIsLoggedIn(false);
      }
      setLoading(false);
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, loading, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
