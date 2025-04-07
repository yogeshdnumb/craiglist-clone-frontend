import { SidebarProvider } from "@/components/ui/sidebar";
import AuthProvider from "@/providers/AuthProvider";
import ThemeProvider from "@/providers/ThemeProvider";

interface ProviderProps {
  children: React.ReactNode;
}
export default function Provider({ children }: ProviderProps) {
  return (
    // <AuthProvider>
    <SidebarProvider
      defaultOpen={document.cookie.includes("sidebar_state=true")}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </SidebarProvider>
    // </AuthProvider>
  );
}
