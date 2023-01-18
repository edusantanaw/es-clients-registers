import { createContext, useContext, useLayoutEffect, useState } from "react";
import { AuthContextData, data, providerProp } from "../../types/auth";
import { authService } from "../../services/auth.service";
import { tokenKey } from "../../util/keys";
import { httpReponse } from "../../types/httpReponse";

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: providerProp) => {
  const [tokenAuth, setToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isLoading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const tokenStorage = localStorage.getItem(tokenKey);

    if (tokenStorage) {
      setIsLogged(true);
      setToken(tokenStorage);
    }
    setLoading(false);
  }, [isLogged]);

  const resetStates = () => {
    setToken(null);
    setIsLogged(false);
    setLoading(false);
  };

  async function auth(data: data): Promise<httpReponse> {
    const response = await authService(data);
    if (response.success) {
      setIsLogged(true);
      setToken(response.data);
    }
    return response;
  }

  function signout(): void {
    localStorage.removeItem(tokenKey);
    resetStates();
  }

  return (
    <AuthContext.Provider
      value={{ auth, isLoading, tokenAuth, isLogged, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
