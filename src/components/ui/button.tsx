import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronLeft } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/50 dark:bg-primary/30 hover:dark:bg-primary/30 hover:dark:text-secondary-foreground ",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input border-foreground bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary bg-background underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const FormSubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <Button
      ref={ref}
      type="submit"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);

FormSubmitButton.displayName = "FormSubmitButton";

const BackButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <Button
      ref={ref}
      variant="ghost"
      onClick={() => window.history.back()}
      className="p-0 h-fit w-fit transition-all duration-200 hover:scale-110 hover:-translate-x-1"
      {...props}
    >
      <ChevronLeft style={{ width: "27px", height: "27px" }} />
    </Button>
  )
);

BackButton.displayName = "BackButton";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants, FormSubmitButton, BackButton };
