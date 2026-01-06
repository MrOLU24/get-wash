import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent";
    size?: "md" | "lg";
    children: ReactNode;
}

const Button = ({
    variant = "primary",
    size = "md",
    children,
    className,
    ...props
}: ButtonProps) => {
    const variantClasses = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        accent: "btn-accent",
    };

    const sizeClasses = {
        md: "",
        lg: "btn-lg",
    };

    return (
        <button
            className={cn(
                "btn",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
