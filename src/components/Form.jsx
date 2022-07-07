import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    navn: yup.string().required("Venligst indtast et navn"),
    email: yup
      .string()
      .email()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ikke en email adresse")
      .required("Venligst indtast en email adresse"),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const validation = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(validation)}
          className="flex justify-center flex-col items-center"
        >
          {errors.navn && <p>{errors.navn.message}</p>}
          <input
            {...register("Navn")}
            type="text"
            placeholder="Navn"
            className="mt-2 block w-80 h-12 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            className="mt-2
                        block
                        w-80
                        h-12
                        bg-gray-100
                        border-transparent
                        focus:border-gray-500 focus:bg-white focus:ring-0"
          />
          <input
            type="submit"
            value="Tilmed dig vores nyhedsbrev"
            className="bg-black text-left pl-4 w-80 h-12 mt-10 cursor-pointer text-white border border-white"
          />
        </form>
      </div>
    </>
  );
}
