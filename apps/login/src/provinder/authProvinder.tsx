import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  accessToken: string | null;
  redirectToGoogleLogin: () => void;
  resetAccessToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      exchangeCodeForToken(code);
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  const exchangeCodeForToken = async (code: string) => {
    try {
      const response = await axios.post("https://oauth2.googleapis.com/token", {
        client_id:
          "340648911797-crpd397fg6qspo75n0enora7qv01ng6b.apps.googleusercontent.com",
        client_secret: "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",
        redirect_uri: "http://localhost:3000",
        grant_type: "authorization_code",
        code: code,
      });

      const { access_token } = response.data;
      setAccessToken(access_token);
    } catch (error) {
      console.error("Erro ao trocar código por token:", error);
    }
  };

  const redirectToGoogleLogin = () => {
    const clientId =
      "340648911797-crpd397fg6qspo75n0enora7qv01ng6b.apps.googleusercontent.com";
    const redirectUri = "http://localhost:3000";
    const scope = "openid email profile";
    const responseType = "code";
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    window.location.href = googleAuthUrl;
  };

  const resetAccessToken = () => {
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, redirectToGoogleLogin, resetAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
