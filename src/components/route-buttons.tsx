import { cn } from "@/src/utils";
import { useRouter } from "next/router";
import { Button } from "./ui/button";

export default function RouteButtons({
  routes,
  closeMenu,
}: {
  routes: string[];
  closeMenu?: () => void;
}) {
  const router = useRouter();

  return (
    <>
      {routes.map((eachRoute) => (
        <Button
          key={eachRoute}
          variant="basic"
          className={cn(
            router.pathname === `/${eachRoute}`
              ? "text-primary-main md:text-black md:border-primary-main"
              : "border-transparent",
            "button_transition flex items-center border-b-2 py-4 font-mono md:h-full md:hover:border-primary-main hover:text-primary-main md:text-lg"
          )}
          href={`/${eachRoute}`}
          onClick={closeMenu}
        >
          {eachRoute}
        </Button>
      ))}
    </>
  );
}
