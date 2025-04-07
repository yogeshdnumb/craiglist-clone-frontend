import { LoginForm } from "@/components/custom/LoginForm";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router";
export default function LoginPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  // if (auth.isAuthenticated) {
  //   navigate("/");
  // }
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}
