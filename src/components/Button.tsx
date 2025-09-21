import Typo from "./Typo";

export const Button = ({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) => {
  return (
    <button
      className={`w-fit md:pr-10 pr-6 md:pl-4 pl-3 md:py-2 py-1 group border overflow-hidden rounded-full flex justify-center items-center relative mt-3 capitalize ${className} 
        ${dark ? "text-black border-black/50" : "text-white border-white/50"}
      `}
    >
      {/* hover background */}
      <div
        className={`w-full h-full absolute top-0 left-full group-hover:left-0 duration-500 
          ${dark ? "bg-black" : "bg-white"}
        `}
      />

      {/* text */}
      <Typo
        fixed
        className={`duration-500 font-[500] md:text-sm text-xs relative z-10
          ${dark ? "group-hover:text-white" : "group-hover:text-black"}
        `}
      >
        {children}
      </Typo>

      {/* circle */}
      <div
        className={`md:w-4 w-3 aspect-square rounded-full border flex absolute md:right-3 right-2 duration-300 origin-center  z-10
          ${
            dark
              ? "border-black/50 group-hover:scale-50 group-hover:border-none group-hover:bg-white"
              : "border-white/50 group-hover:scale-50 group-hover:border-none group-hover:bg-black"
          }
        `}
      />
    </button>
  );
};
