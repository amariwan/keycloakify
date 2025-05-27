import React from "react";
import clsx from "clsx";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "caption"
  | "subheading";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "body",
  children,
  className,
  ...props
}: TypographyProps) => {
  let Component: React.ElementType = "p";

  switch (variant) {
    case "h1":
      Component = "h1";
      break;
    case "h2":
      Component = "h2";
      break;
    case "h3":
      Component = "h3";
      break;
    case "h4":
      Component = "h4";
      break;
    case "subheading":
      Component = "h5";
      break;
    case "caption":
      Component = "span";
      break;
    case "body":
    default:
      Component = "p";
      break;
  }

  const variantClasses: Record<TypographyVariant, string> = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-medium",
    subheading: "text-lg font-medium",
    body: "text-base",
    caption: "text-sm text-gray-600"
  };

  const classes = clsx(variantClasses[variant], className);

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
