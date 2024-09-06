import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";

const MyForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <FormLabel>First Name</FormLabel>
        <FormField name="firstName" {...register("firstName")} />
        <FormDescription>Enter your first name</FormDescription>
        {errors?.firstName && <FormMessage>{errors.firstName.message}</FormMessage>}
      </FormItem>

      <FormItem>
        <FormLabel>Last Name</FormLabel>
        <FormField name="lastName" {...register("lastName")} />
        <FormDescription>Enter your last name</FormDescription>
        {errors?.lastName && <FormMessage>{errors.lastName.message}</FormMessage>}
      </FormItem>

      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormField name="email" {...register("email")} />
        <FormDescription>Enter your email address</FormDescription>
        {errors?.email && <FormMessage>{errors.email.message}</FormMessage>}
      </FormItem>

      <FormItem>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </FormItem>
    </Form>
  );
};

export default MyForm;