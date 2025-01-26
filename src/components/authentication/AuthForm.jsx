import React from "react";
import { useForm } from "react-hook-form";
import { Card, Input, Button } from "../common";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from "../../validations/authValidation";

function AuthForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [islogin, setIsLogin] = React.useState(true);
  const [error, setError] = React.useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    setError("");
    console.log(data);
    if (islogin) {
      // login logic
    } else {
      // signup logic
    }
  }

  return (
    <Card className="w-[90%] md:w-[400px]">
      <div className="flex flex-col space-y-6 p-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold leading-none text-foreground tracking-tight">
            {islogin ? "Login" : "Sign Up"}
          </h1>
          <h2 className="text-sm text-muted-foreground">
            {islogin ? "Welcome back" : "Create an account"}
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col space-y-4">
            {!islogin && (
              <Input
                name="name"
                control={control}
                label="Name"
                placeholder="Enter your name"
                type="text"
                rules={nameValidation}
              />
            )}
            <Input
              name="email"
              control={control}
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              rules={emailValidation}
            />
            <Input
              name="password"
              control={control}
              label="Password"
              placeholder="Enter your password"
              type="password"
              rules={passwordValidation}
            />
          </div>

          <div className="flex flex-col space-y-2 mt-6">
            <Button type="submit">{islogin ? "Login" : "Sign Up"}</Button>
            <p className="text-sm text-foreground">
              {islogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => setIsLogin(!islogin)}
              >
                {islogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default AuthForm;
