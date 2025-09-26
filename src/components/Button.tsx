import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
}

export const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
    const baseStyles = "px-6 py-3 rounded-xl text-lg font-medium transition-all";

    const variants = {
        primary: "bg-[#aa0000] hover:bg-red-700 text-white", // color rojo de tu logo
        outline: "border border-[#aa0000] text-[#aa0000] hover:bg-[#aa0000] hover:text-white",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
};
