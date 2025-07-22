import { createContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

interface User {
  id: number;
  email: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  created_at?: Date;
}

interface Token {
  token: string;
}

interface AuthContextType {
  user: User | null;
  token: Token | null;
  setUser: (user: User | null) => void;
  setToken: (token: Token | null) => void;
  login: (user: User, token: Token) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProviderContext: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setTokenState] = useState<Token | null>(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? JSON.parse(storedToken) : null;
  });

  // Setters that persist to localStorage
  const setUser = useCallback((user: User | null) => {
    setUserState(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, []);

  const setToken = useCallback((token: Token | null) => {
    setTokenState(token);
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  }, []);

  // Login helper: sets both user and token
  const login = useCallback(
    (user: User, token: Token) => {
      setUser(user);
      setToken(token);
    },
    [setUser, setToken]
  );

  // Logout helper: clears both
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
  }, [setUser, setToken]);

  return (
    <AuthContext.Provider
      value={{ user, token, setUser, setToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProviderContext };
