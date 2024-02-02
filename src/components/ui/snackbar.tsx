import { cn } from "@/src/utils";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

export default function Snackbar({
  emailStatus,
}: {
  emailStatus: "" | "success" | "error";
}) {
  return (
    <AnimatePresence
      initial={false}
      mode="wait"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={cn(
          "fixed bottom-4 left-4 flex items-center gap-4 border-t-2 bg-[#F1EFE7] px-6 py-4 text-center",
          emailStatus === "success"
            ? "border-green-500"
            : emailStatus === "error"
            ? "border-red-500"
            : ""
        )}
      >
        {emailStatus === "success" && (
          <>
            <h2>Email Sent!</h2>
          </>
        )}

        {emailStatus === "error" && (
          <>
            <h2>Please try again later.</h2>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
