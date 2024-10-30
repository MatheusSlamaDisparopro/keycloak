import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useGoogleLogin() {
  return useMutation({
    mutationFn: async (code: string) => {
      const response = await axios.post("https://oauth2.googleapis.com/token", {
        client_id:
          "340648911797-crpd397fg6qspo75n0enora7qv01ng6b.apps.googleusercontent.com",
        client_secret: "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",
        redirect_uri: "http://localhost:3000/auth-callback",
        grant_type: "authorization_code",
        code: code,
      });

      const { accessToken } = response.data;
      return accessToken;
    },
    onError: (error) => {
      console.error("Error", error);
    },
  });
}
