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
      className={`w-fit pr-10 pl-4 py-2 text-sm group border overflow-hidden rounded-full flex justify-center items-center relative mt-3 capitalize ${className} 
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
        className={`duration-500 font-[500] relative z-10
          ${dark ? "group-hover:text-white" : "group-hover:text-black"}
        `}
      >
        {children}
      </Typo>

      {/* circle */}
      <div
        className={`w-4 aspect-square rounded-full border flex absolute right-3 duration-300 origin-center  z-10
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
