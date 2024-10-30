import { UserLogin } from "@/interfaces/user-login.interface";
import { useLogin } from "@/mutation/use-login";
import { useAuth } from "@/provinder/authProvinder";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const [token, setToken] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    reset: resetForm,
    formState: { errors },
  } = useForm<UserLogin>();
  const { mutateAsync: login } = useLogin();
  const {
    accessToken: tokenGoogle,
    redirectToGoogleLogin,
    resetAccessToken,
  } = useAuth();

  const loginHandler = async (data: UserLogin) => {
    try {
      const responseToken = await login(data);
      if (responseToken && responseToken.access_token) {
        setToken(responseToken.access_token);
      } else {
        console.error("Resposta inesperada do login:", responseToken);
      }
    } catch (error) {
      console.error("Erro fazer login:", error);
      setError("root.user", {
        type: "manual",
        message: "Usuário não cadastrado.",
      });
    }
  };

  const reset = () => {
    setToken(null);
    resetAccessToken();
    resetForm();
  };

  return (
    <main className="contents">
      <div className="w-0 lg:w-2/3">
        <img
          className="h-full object-cover"
          src="assets/img/background.png"
          alt="Background"
        />
      </div>

      {!tokenGoogle && !token && (
        <div className="w-full lg:w-1/3 flex items-center justify-center m-10">
          <form
            onSubmit={handleSubmit(loginHandler)}
            className="grid gap-4 text-[#6F6B7D]"
          >
            <div className="font-bold text-xl ">
              <img
                className="h-full object-cover"
                src="assets/img/logo.png"
                alt="logo"
              />
            </div>

            <div className="text-2xl mt-4 font-medium">Seja bem-vindo!</div>
            <div className="font-extralight">Faça login em sua conta.</div>

            <div>
              <label className="block required" htmlFor="input-email">
                Login
              </label>
              <input
                id="input-email"
                className={`border rounded p-2 w-full ${errors.login ? "border-red-500" : ""}`}
                type="text"
                placeholder="Digite seu login"
                {...register("login", { required: "Login é obrigatório." })}
              />
              {errors.login && (
                <p className="text-red-500 text-xs">{errors.login.message}</p>
              )}
            </div>

            <div>
              <label className="block required" htmlFor="input-password">
                Senha
              </label>
              <input
                id="input-password"
                className={`border rounded p-2 w-full ${errors.password ? "border-red-500" : ""}`}
                type="password"
                placeholder="Digite sua senha"
                {...register("password", { required: "Senha é obrigatória." })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2">
                Lembre-se
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#9268E5] text-white py-2 rounded w-full text-md"
              >
                Entrar com e-mail
              </button>

              {errors.root?.user && (
                <p className="text-red-500 text-xs">
                  {errors.root.user.message}
                </p>
              )}
            </div>

            <div className="text-center">
              Novo em nossa plataforma? Crie sua conta
            </div>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-4 text-gray-500">ou</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <button
              className="bg-gray-300 text-black py-2 rounded w-full flex items-center justify-center"
              onClick={redirectToGoogleLogin}
            >
              <img
                className="h-6 w-6 mr-2 bg-transparent"
                src="assets/img/logo-google.png"
                alt="Google logo"
              />
              Entre com o Google
            </button>
            <button className="bg-gray-300 text-black py-2 rounded w-full flex items-center justify-center">
              <img
                className="h-6 w-6 mr-2 bg-transparent"
                src="assets/img/logo-apple.png"
                alt="Apple logo"
              />
              Entre com o Apple
            </button>
          </form>
        </div>
      )}
      {(token || tokenGoogle) && (
        <div className="flex w-full lg:w-1/3">
          <div className="justify-center items-center flex text-5xl font-bold p-4">
            {token ? "Logado" : tokenGoogle ? "Logado com Google" : ""}
          </div>
          <div>
            <button
              className="bg-gray-300 text-black rounded-md p-4"
              onClick={reset}
            >
              Logar novamente
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
