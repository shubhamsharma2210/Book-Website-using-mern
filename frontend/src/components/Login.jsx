import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();



  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
                </form>

            <h3 className="font-bold text-lg">LOgin !</h3>
            <div className="flex gap-4 flex-col mt-2">
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", { required: true })}
                  className="py-3 px-2 rounded-md text-xl border"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                 {errors.email && <span className="text-red-500 text-xl">This Email is required</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-xl" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  className="py-3 px-2 rounded-md text-xl border"
                  type="password"
                  name="password"
                  placeholder="password"
                />
                {errors.password && <span className="text-red-500 text-xl">This Password is required</span>}
              </div>
            </div>

            <div className="flex justify-around mt-4">
              <button
                onClick={handleSubmit}
                className="bg-pink-500 cursor-pointer hover:bg-pink-800 rounded-md px-4 py-2"
              >
                Login
              </button>
              <p>
                Not registered{" "}
                <Link
                  to={"/signup"}
                  className=" underline text-pink-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
