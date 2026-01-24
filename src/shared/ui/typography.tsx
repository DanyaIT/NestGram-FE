import React, { FC, ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "large" | "body" | "small";
  className?: string;
};

export const Typography: FC<TypographyProps> = ({
  children,
  variant = "body",
  className = "",
}) => {
  const variants: Record<string, string> = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-semibold",
    small: "text-sm",
    base: "text-base",
    large: "test-lg",
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
};
