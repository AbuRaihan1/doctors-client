import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-hot-toast";

const Signup = () => {
  const { createUser, updateUserProfile, loginWithGoogle } =
    useContext(AuthContext);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        toast.success("User created successfully.", {
          duration: 2000,
          position: "top-right",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("User can't create", {
          duration: 2000,
          position: "top-right",
        });
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="text-center shadow-xl w-full sm:w-[400px] mx-auto mt-5 rounded-2xl py-5">
      <h1 className="text-4xl">Sign up</h1>
      <div className="py-4">
        <form className="mx-auto space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs mx-auto">
            <input
              {...register("name", {
                // required: true,
                required: "Must use the name",
              })}
              className="input input-bordered w-full max-w-xs"
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-600 text-left font-bold">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="form-control w-full max-w-xs mx-auto">
            <input
              {...register("email", {
                required: "Must use email address",
                // message: ,
              })}
              className="input input-bordered w-full max-w-xs"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-600 text-left font-bold">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="form-control w-full max-w-xs mx-auto">
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              placeholder="Password"
              {...register("password", {
                // required: true,
                required: "Must use password",
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-left font-bold">
                {errors.password.message}
              </span>
            )}
          </div>

          <input
            type="submit"
            value="Sign up"
            className="btn primary-button w-full max-w-xs"
          />

          <div className="withoutLogin">
            <p>
              Already Have an account?{" "}
              <Link to="/login" className="text-primary font-bold">
                please login
              </Link>
            </p>
            <div className="divider max-w-xs mx-auto">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline max-w-xs w-full"
            >
              Continue with google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
