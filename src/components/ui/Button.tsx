import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "navy";
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  primary:
    "bg-primary text-white hover:bg-primary/90",
  secondary:
    "bg-transparent text-black dark:text-white border border-stroke-stroke dark:border-stroke-dark hover:bg-gray-light dark:hover:bg-bg-color-dark",
  navy: "bg-navy text-white hover:bg-navy/90",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
