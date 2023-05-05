"use client";

import { useRouter } from "next/navigation";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


const schema = Yup.object()
  .shape({
    email: Yup.string()
      .email("Digite um E-mail válido")
      .required("Digite um E-mail válido"),
    password: Yup.string().required("Por Favor Digite Sua Senha "),
  })
  .required();


export default function LoginPage() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function handleSignIn(data: any): Promise<void> {
    console.log(data)
  }

  return (
    <div className="w-full  h-full content-center grid h-screen place-items-center " >
      <form className="bg-white max-w-xs shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleSignIn)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Usuário
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            {...register("email")}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            {...register("password")}
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">&copy;2023 School.</p>
    </div>
  );
}
