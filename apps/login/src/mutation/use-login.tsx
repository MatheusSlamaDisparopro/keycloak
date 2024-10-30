import { UserLogin } from "@/interfaces/user-login.interface";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useLogin() {
  return useMutation({
    mutationKey: ["use-login"],
    mutationFn: async (userLogin: UserLogin) => {
      const payload = {
        client_id: "teste-client",
        grant_type: "password",
        username: userLogin.login,
        password: userLogin.password,
      };

      const response = await axios.post(
        `http://localhost:8080/realms/teste-realm/protocol/openid-connect/token`,
        new URLSearchParams(payload).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data;
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
}
