export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="w-0 lg:w-2/3">
        <img
          className="h-full object-cover"
          src="assets/img/background.png"
          alt="Background"
        />
      </div>
      <div className="w-full lg:w-1/3 flex items-center justify-center">
        <div className="grid gap-4">
          <div className="font-bold text-xl ">
            <img
              className="h-full object-cover"
              src="assets/img/logo.png"
              alt="logo"
            />
          </div>

          <div className="text-2xl mt-4">Seja bem-vindo!</div>
          <div className="font-extralight">Faça login em sua conta.</div>

          <div>
            <label className="block required" htmlFor="input-email">
              Login
            </label>
            <input
              id="input-email"
              className="border rounded p-2 w-full"
              type="text"
              placeholder="Digite seu login"
            />
          </div>

          <div>
            <label className="block required" htmlFor="input-password">
              Senha
            </label>
            <input
              id="input-password"
              className="border rounded p-2 w-full"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ml-2">
              Lembre-se
            </label>
          </div>

          <div>
            <button className="bg-[#9268E5] text-white py-2 rounded w-full text-md">
              Entrar com e-mail
            </button>
          </div>

          <div className="text-center">
            Novo em nossa plataforma? Crie sua conta
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-4 text-gray-500">ou</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <button className="bg-gray-300 text-black py-2 rounded w-full">
            Entre com o Google
          </button>
          <button className="bg-gray-300 text-black py-2 rounded w-full">
            Entre com a Apple
          </button>
        </div>
      </div>
    </main>
  );
}
