import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input type="email" {...register("email")} />
        <input type="password" {...register("password")} />
      </form>
    </>
  );
}
