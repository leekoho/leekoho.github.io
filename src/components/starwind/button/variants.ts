import { tv } from "tailwind-variants"

export const button = tv({
  base: [
    "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "shrink-0 border border-transparent no-underline select-none transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background pointer-coarse:min-h-11",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "aria-invalid:border-error aria-invalid:focus-visible:ring-error/40",
  ],
  variants: {
    variant: {
      default: "bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-outline/50",
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/50",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:ring-secondary/50",
      outline:
        "border-border bg-background text-foreground shadow-xs hover:bg-accent focus-visible:border-outline focus-visible:ring-outline/30 dark:bg-muted",
      ghost:
        "text-foreground-soft hover:bg-accent hover:text-accent-foreground focus-visible:ring-outline/50",
      info: "bg-info text-info-foreground hover:bg-info/90 focus-visible:ring-info/50",
      success:
        "bg-success text-success-foreground hover:bg-success/90 focus-visible:ring-success/50",
      warning:
        "bg-warning text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning/50",
      error: "bg-error text-error-foreground hover:bg-error/90 focus-visible:ring-error/50",
    },
    size: {
      sm: "h-8 px-3 text-sm [&_svg:not([class*='size-'])]:size-4",
      md: "h-9 px-4 text-sm [&_svg:not([class*='size-'])]:size-4",
      lg: "h-11 px-6 text-sm [&_svg:not([class*='size-'])]:size-4",
      "icon-sm": "size-8 p-0 pointer-coarse:min-w-11 [&_svg:not([class*='size-'])]:size-4",
      icon: "size-9 p-0 pointer-coarse:min-w-11 [&_svg:not([class*='size-'])]:size-4",
      "icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})
