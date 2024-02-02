import { formValues } from "@/src/pages/contact";
import { cn } from "@/src/utils";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type FormInpuTypes = {
  title: string;
  value: string;
  type: string;
  errors: FieldErrors<formValues>;
  register: UseFormRegister<formValues>;
};

export default function FormInput({
  title,
  value,
  type,
  errors,
  register,
}: FormInpuTypes) {
  return (
    <div
      key={value}
      className={cn(
        "flex grow flex-col gap-2 ",
        type === "textarea" ? "col-span-2" : ""
      )}
    >
      <label className=" text-sm font-semibold sm:text-base">{title}</label>

      {type === "textarea" ? (
        <textarea
          placeholder={errors[value as keyof typeof errors]?.message}
          className=" h-40 resize-none border-2 border-black/50 bg-transparent px-3 py-2 sm:h-44"
          {...register(value as "name" | "email" | "message", {
            required: `Please provide your ${value}`,
          })}
        />
      ) : (
        <input
          type={type}
          placeholder={errors[value as keyof typeof errors]?.message}
          className="border-2 border-black/50 bg-transparent px-3 py-2"
          {...register(value as any, {
            required: `Please provide your ${value}`,
          })}
        />
      )}
    </div>
  );
}
