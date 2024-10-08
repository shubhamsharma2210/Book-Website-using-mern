import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
   
    const userInfo = {
      fullname : data.fullname,
      email : data.email,
      password: data.password
    }
     await axios.post('http://localhost:4001/user/signup', userInfo).then((res) => {
      console.log(res)
      if(res.data) {
        toast.success("Registered Successfully")
        navigate('/')
      }
      localStorage.setItem("users" , JSON.stringify(res.data.user))
     }).catch((err) => {
      if(err.response){
        console.log(err.message)
        toast.error("ERROR :" + err.response.data.message )
      }
     })

  }

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white ">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link
            to={"/"}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
       
        <h3 className="font-bold text-lg">Signup !</h3>
        <div className="flex flex-col">
          <label htmlFor="fullname">Full Name</label>
          <input
            className="py-3 px-2 rounded-md text-xl border"
            type="text"
            name="fullname"
            placeholder="Your name"
            {...register("fullname", {required:true})}
          />
          {errors.name && <span className="text-red-500 text-xl">Name is required </span>}
        </div>
        <div className="flex gap-4 flex-col mt-2">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="py-3 px-2 rounded-md text-xl border"
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {required:true})}
            />
            {errors.email && <span className="text-red-500 text-xl">Email is required</span>}
          </div>
          <div className="flex flex-col">
            <label className="text-xl" htmlFor="password">
              Password
            </label>
            <input
              className="py-3 px-2 rounded-md text-xl border"
              type="password"
              name="password"
              placeholder="password"
              {...register("password", {required:true})}
            />
            {errors.password && <span className="text-red-500 text-xl">Password is required </span>}
          </div>
        </div>

        <div className="flex justify-around mt-4">
          <button className="bg-pink-500 cursor-pointer hover:bg-pink-800 rounded-md px-4 py-2">
            Signup
          </button>
          <p>
            Not registered{" "}
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className=" underline text-pink-500 cursor-pointer"
            >
              login
            </button>
            <Login />
          </p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
