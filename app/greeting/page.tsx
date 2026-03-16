"use client";

import { Footer } from "@/lib/components/Footer";
import InputField from "@/lib/components/ux/InputField";
import { Main } from "@/lib/components/ux/Main";
import { RootDiv } from "@/lib/components/ux/RootDiv";
import { SubmitButton } from "@/lib/components/ux/SubmitButton";
import TextareaField from "@/lib/components/ux/TextareaField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty({ message: "What should I call you?" }),
  phone: z
    .string()
    .optional()
    .or(z.literal(""))
    .transform((val = "") => {
      if (!/\d/.test(val)) return val;
      return val.replace(/[^a-zA-Z0-9]/g, "");
    })
    .refine((val) => val === "" || /^[0-9]{10,15}$/.test(val ?? ""), {
      message: "10 digits (local US) or 11-15 digits (international)",
    }),
  email: z.string().email({ message: "This doesn't look right" }),
  message: z.string().nonempty({ message: "Any thoughts?" }),
});

export type FormValues = z.input<typeof schema>;

export default function Greeting() {
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setPending(true);
      await fetch("/api/greeting", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      });
      reset();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setPending(false);
    }
  };

  return (
    <RootDiv>
      <Main className="">
        <h1 className="text-5xl font-extrabold dark:text-white">
          I would love to hear from you.
          <br />
          <small className="text-base font-semibold text-gray-500 dark:text-gray-400">
            Thoughts, questions, criticisms welcome
          </small>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <InputField
            {...register("name")}
            label="Name"
            error={errors.name?.message}
            disabled={pending}
          />
          <InputField
            id="email"
            {...register("email", {})}
            label="Email"
            error={errors.email?.message}
            disabled={pending}
          />
          <InputField
            {...register("phone")}
            label="Phone"
            error={errors.phone?.message}
            disabled={pending}
          />
          <TextareaField
            {...register("message")}
            label="Message"
            error={errors.message?.message}
            disabled={pending}
          />
          <SubmitButton disabled={pending} activity={pending} />
          {pending && (
            <div className="w-full text-center tracking-widest">
              Hold on, we&apos;re doing computery things...
            </div>
          )}
        </form>
      </Main>
      <Footer />
    </RootDiv>
  );
}
