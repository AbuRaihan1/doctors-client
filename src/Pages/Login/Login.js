import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="text-center shadow-xl w-full sm:w-[400px] mx-auto mt-5 rounded-2xl py-5">
      <h1 className="text-4xl">Login</h1>
      <div className="py-4">
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-2">
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              {...register("example")}
              className="input input-bordered w-full max-w-xs"
              type="email"
            />
          </div>

          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              className="input input-bordered w-full max-w-xs"
              type="password"
            />
            <label className="label font-bold cursor-pointer text-secondary">
              Forgot Password ?
            </label>
          </div>

          <input
            type="submit"
            value="Login"
            className="btn primary-button w-full max-w-xs"
          />

          <div className="withoutLogin">
            <p>
              New to Doctors portal?{" "}
              <Link to="/signup" className="text-primary font-bold">
                Create New Account
              </Link>
            </p>
            <div className="divider max-w-xs mx-auto">OR</div>
            <button className="btn btn-outline max-w-xs w-full">
              Continue with google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
