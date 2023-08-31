export const metadata = {
  title : {
    absolute : 'Login'
  }
}

import IlustracaoLogin from '@/public/ilustracao-login.svg'
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <body className='bg-no-repeat bg-gradient-radial from-teal-200 to-sky-300 h-screen overflow-y-hidden'>
      <div className=" mt-8 bg-white shadow-xl shadow-gray mx-4 md:mx-20 lg:mx-40 rounded-xl flex flex-row relative overflow-hidden">
        <form className="flex flex-col lg:w-1/2 w-full px-8 md:px-16 py-20 md:py-28 gap-4 text-sky-900 font-medium">
          <div className="flex flex-col">
            <h1 className="mx-auto pb-10 font-bold text-3xl text-sky-500">LOGIN</h1>
            <label htmlFor="user">Usuário:</label>
            <input
              id="user"
              type="text"
              placeholder="Email / Nome do Usuário"
              className="border border-sky-900 border-solid rounded-xl ps-2 py-1" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="pass">Senha:</label>
            <input
              id="pass"
              type="password"
              placeholder="Senha"
              className="border border-sky-900 border-solid rounded-xl ps-2 py-1" />
          </div>
          <input
            value='Entrar'
            id="btn-submit"
            type="submit" /*onSubmit={}*/
            className="rounded-full cursor-pointer py-2 font-bold text-white bg-sky-500 border-sky-500 
                hover:text-sky-500 hover:bg-white border hover:border-sky-800 transition duration-300" />

          <p><Link href='/cadastro' className="underline text-sky-700">Cadastre-se</Link></p>
        </form>

        <div className="w-1/2 hidden lg:flex lg:items-center lg:justify-center">
          <Image
            src={IlustracaoLogin}
            alt="foto"
            className="my-auto h-max" />
        </div>
      </div>
    </body>
  )
}
