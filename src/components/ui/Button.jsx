import React from "react";
import classNames from "classnames";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary/30",
  secondary:
    "bg-primary-soft text-primary hover:bg-primary/10 focus-visible:ring-primary/20",
  ghost:
    "bg-transparent text-ink hover:bg-bg-subtle focus-visible:ring-primary/20",
  danger:
    "bg-error text-white hover:bg-error/90 focus-visible:ring-error/30",
  outline:
    "border border-line-strong bg-bg-elevated text-ink hover:bg-bg-subtle focus-visible:ring-primary/20",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) => (
  <button
    className={classNames(
      "inline-flex items-center justify-center gap-2 rounded-md2 font-medium transition-colors focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-60",
      variants[variant],
      sizes[size],
      className,
    )}
    {...rest}
  >
    {children}
  </button>
);

export default Button;