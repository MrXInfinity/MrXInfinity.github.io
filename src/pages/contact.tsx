import emailjs from "@emailjs/browser";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FramerButton } from "../components/ui/button";
import FormInput from "../components/ui/form-input";
import Snackbar from "../components/ui/snackbar";
import { motion } from "framer-motion";

export type formValues = {
  name: string;
  email: string;
  message: string;
};

function LoadingIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 animate-spin fill-white text-slate-400"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
}

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"" | "success" | "error">("");

  const formInputs = [
    { title: "Your Name", type: "text", value: "name" },
    { title: "Your Email", type: "email", value: "email" },
    { title: "Your Message", type: "textarea", value: "message" },
  ];

  const submitForm = async (data: formValues) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY as string
      );
      setIsLoading(false);
      setEmailStatus("success");
    } catch (err) {
      setIsLoading(false);
      setEmailStatus("error");
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (emailStatus !== "") {
        setEmailStatus("");
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [emailStatus]);

  return (
    <>
      <Head>
        <title>jm.dev - contact</title>
      </Head>
      <>
        <Snackbar emailStatus={emailStatus} />
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-8 pt-8 sm:gap-6 sm:pt-12 md:pb-6 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true, amount: "all" }}
            className="flex flex-col gap-3"
          >
            <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Send Me a Message.
            </h1>
            <p className="text-sm  md:text-base">
              Do you have any offers, proposals, and opportunities? Send me a
              message and I&apos;ll do my best to get back at you. Question and
              messages are also welcome!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            viewport={{ once: true, amount: "all" }}
            className="flex grow flex-col gap-4"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="flex flex-1 flex-col gap-4 md:grid md:grid-cols-2">
              {formInputs.map((data) => (
                <FormInput
                  {...data}
                  key={data.value}
                  {...{ errors, register }}
                />
              ))}
            </div>

            <FramerButton
              whileTap={{ scale: 0.9 }}
              variant="contained"
              className=" flex items-center gap-2 self-end px-7 py-3"
              type="submit"
              disabled={isLoading}
            >
              <h1>{isLoading ? "Loading" : "Submit"}</h1>
              {isLoading ? (
                <LoadingIcon />
              ) : (
                <EnvelopeOpenIcon className="h-5 w-5 text-white" />
              )}
            </FramerButton>
          </motion.form>
        </div>
      </>
    </>
  );
}
