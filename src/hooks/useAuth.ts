import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";

export default function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be used within a AuthProvider");

  return context;
}
