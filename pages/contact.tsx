import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitForm = (e: any) => {
    console.log(e);
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-9 px-8 pt-12 sm:gap-6 sm:pt-12">
      <div className="flex flex-col gap-3">
        <h1 className="font-playfairDisplay text-xl sm:text-5xl">
          Send Me a Message!
        </h1>
        <p className="font-roboto text-xs opacity-80 sm:text-sm">
          Do you have any offers, proposals, and opportunities? Send me a
          message and I&apos;ll do my best to get back at you. Question and
          messages are also welcome!
        </p>
      </div>

      <form
        className="flex grow flex-col gap-4"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-1 flex-col gap-4 sm:flex-row">
          <div className="flex grow flex-col gap-2 ">
            <label className="font-robotoSlab font-semibold">Your Name</label>
            <input
              type="text"
              placeholder={errors.name?.message}
              className="border-2 border-white bg-transparent px-3 py-2"
              {...register("name", {
                required: "Please provide your name",
              })}
            />
          </div>
          <div className="flex grow flex-col gap-2">
            <label className="font-robotoSlab font-semibold">Your Email</label>
            <input
              className="border-2 border-white bg-transparent px-3 py-2"
              type="email"
              placeholder={errors.email?.message}
              {...register("email", {
                required: "Please provide your email",
              })}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label className="font-robotoSlab font-semibold">Your Message</label>
          <textarea
            placeholder={errors.message?.message}
            className="h-40 resize-none border-2 border-white bg-transparent px-3 py-2 sm:h-44"
            {...register("message", {
              required: "Please provide a message",
            })}
          />
        </div>
        <button
          className="button_transition flex items-center gap-2 self-end bg-blue-500 px-4 py-2 hover:bg-blue-600"
          type="submit"
        >
          <h1>Submit</h1>
          <EnvelopeOpenIcon className="h-5 w-5 text-white" />
        </button>
      </form>
    </div>
  );
}
