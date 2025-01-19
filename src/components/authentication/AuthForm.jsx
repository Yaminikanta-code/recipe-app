import React from "react";
import { useForm } from "react-hook-form";
import { Card, Input, Button } from "../common";
import {
  emailValidation,
  passwordValidation,
} from "../../validations/authValidation";

function AuthForm() {
  const [islogin, setIsLogin] = React.useState(true);
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
    console.log(data);
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[90%] md:w-[350px] py-6">
        <div className="flex flex-col space-y-1.5 p-6">
          <h1 className="text-3xl font-semibold leading-none text-foreground tracking-tight">
            {islogin ? "Login" : "Sign Up"}
          </h1>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col space-y-6 p-6">
            {!islogin && (
              <Input
                name="name"
                control={control}
                label="Name"
                placeholder="Enter your name"
                type="text"
                rules={{ required: "Name is required" }}
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
            <div className="flex flex-col space-y-2">
              <Button type="submit">{islogin ? "Login" : "Sign Up"}</Button>
              <p className="text-sm text-foreground ">
                {islogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <span>
                  {islogin ? (
                    <button
                      type="button"
                      className="text-blue-500 hover:underline"
                      onClick={() => setIsLogin(false)}
                    >
                      Sign Up
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="text-blue-500 hover:underline"
                      onClick={() => setIsLogin(true)}
                    >
                      Login
                    </button>
                  )}
                </span>
              </p>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AuthForm;
