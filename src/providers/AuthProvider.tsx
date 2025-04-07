import AuthContext from "@/contexts/AuthContext";
import { api } from "@/lib/utils";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ isAuthenticated: false, user: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    let response;
    async function get() {
      try {
        response = await api.get("/auth/status");
        setAuth(response.data);
        setLoading(false);
      } catch (error) {
        console.log("ERROR", error);

        if (error instanceof AxiosError) {
          if (error.status == 403) {
            console.log(403);

            setLoading(false);
            return;
          }
        }
        setError(true);
        setLoading(false);
      }
    }
    get();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Something wend wrong</div>;
  }
  return <AuthContext value={auth}>{children}</AuthContext>;
}
