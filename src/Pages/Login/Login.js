import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const { loginUser, forgotPassword, loginWithGoogle, setLoading } =
    useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");

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
    loginUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoginError("");
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
        toast.error("Login unsuccessful");
      });
  };

  const handleForgotPassword = () => {
    forgotPassword(email);
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
      <h1 className="text-4xl">Login</h1>
      <div className="py-4">
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-2">
          <div className="form-control w-full max-w-xs mx-auto">
            {/* <label className="label">
              <span className="label-text font-bold">Email</span>
            </label> */}
            <input
              {...register("email", { required: true })}
              className="input input-bordered w-full max-w-xs"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-700 mt-2 font-bold text-left">
                Email is required
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mx-auto">
            {/* <label className="label">
              <span className="label-text font-bold">Password</span>
            </label> */}
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password at least 6 character",
                },
              })}
              className="input input-bordered w-full max-w-xs"
              type="password"
              placeholder="Password"
            />

            {loginError && (
              <p className="text-red-600 font-bold">{loginError}</p>
            )}
            <label
              onClick={handleForgotPassword}
              className="label font-bold cursor-pointer text-secondary"
            >
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

export default Login;
