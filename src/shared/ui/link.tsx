import Link from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "underline";
  className?: string;
};

export const AppLink = ({
  href,
  children,
  variant = "primary",
  className = "",
}: LinkProps) => {
  const variants: Record<string, string> = {
    primary: "text-blue-600 hover:text-blue-700",
    secondary: "text-gray-700 hover:text-gray-900",
    underline: "text-blue-600 hover:underline",
  };

  return (
    <Link
      href={href}
      className={`${variants[variant]} transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};
