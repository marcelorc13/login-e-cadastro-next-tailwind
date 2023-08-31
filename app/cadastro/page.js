export const metadata = {
    title: {
        absolute : 'Cadastre-se'
    }
  }

import Image from "next/image"
import IlustracaoCadastro from '@/public/ilustracao-registro.svg'
import Link from "next/link"


export default function Home() {
    return (
        <body className="bg-no-repeat bg-gradient-radial from-teal-300 to-sky-500 h-screen overflow-y-hidden">
            <div className=" mt-8 bg-white shadow-xl shadow-gray mx-4 md:mx-20 lg:mx-40 rounded-xl flex flex-row relative overflow-hidden">
                <form className="flex flex-col lg:w-1/2 w-full px-8 md:px-16 py-20 md:py-28 gap-4 text-sky-800 font-medium">
                    <div className="flex flex-col">
                        <h1 className="mx-auto pb-10 font-bold text-3xl text-sky-500">CADASTRE-SE</h1>
                        <label htmlFor="user">Nome do Usuário:</label>
                        <input
                            id="user"
                            type="text"
                            placeholder="Exemplo123"
                            className="border border-sky-800 border-solid rounded-xl ps-2 py-1" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="user">Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="exemplo123@gmail.com"
                            className="border border-sky-800 border-solid rounded-xl ps-2 py-1" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="pass">Senha:</label>
                        <input
                            id="pass"
                            type="password"
                            placeholder="Senha"
                            className="border border-sky-800 border-solid rounded-xl ps-2 py-1" />
                    </div>
                    <input
                        value='Criar Conta'
                        id="btn-submit"
                        type="submit" /*onSubmit={}*/
                        className="rounded-full cursor-pointer py-2 font-bold text-white bg-sky-500 border-sky-500 
            hover:text-sky-500 hover:bg-white border hover:border-sky-800 transition duration-300" />

                    <p><Link href='/' className="underline text-sky-700">Já tenho uma conta</Link></p>
                </form>

                <div className="w-1/2 hidden lg:flex lg:items-center lg:justify-center">
                    <Image
                        src={IlustracaoCadastro}
                        alt="foto"
                        className="my-auto h-max" />
                </div>
            </div>
        </body>
    )
}