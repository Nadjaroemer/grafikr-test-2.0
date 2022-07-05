import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    navn: yup.string().required(),

    email: yup
      .string()
      .email()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "invalid email")
      .required(),
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
      <div className="App mt-10 w-1/3 mx-auto">
        <form
          onSubmit={handleSubmit(validation)}
          className="flex justify-center flex-col items-center"
        >
          {errors.navn && <p>{errors.navn.message}</p>}
          <input
            {...register("Navn")}
            type="text"
            placeholder="Navn"
            className="mt-2
                        block
                        w-full

                        bg-gray-100
                        border-transparent
                        focus:border-gray-500 focus:bg-white focus:ring-0
    "
          />
          {errors.navn && <p>{errors.navn.message}</p>}
          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            className="mt-2
                        block
                        w-full
                        bg-gray-100
                        border-transparent
                        focus:border-gray-500 focus:bg-white focus:ring-0
    "
          />
          <input
            type="submit"
            value="Tilmed vores nyhedsbrev -->"
            className="bg-white  w-full rounded-md mt-10 cursor-pointer pt-1 pb-1 pl-10 pr-10 text-black"
          />
        </form>
      </div>
    </>
  );
}
