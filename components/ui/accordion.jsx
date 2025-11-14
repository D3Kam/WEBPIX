import * as React from "react"
import { clsx } from "clsx"

const Accordion = ({ children, type = "single", collapsible = true, ...props }) => {
  return <div {...props}>{children}</div>
}

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={clsx(
      "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
      className
    )}
    {...props}
  >
    {children}
  </button>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("pb-4 pt-0", className)}
    {...props}
  >
    {children}
  </div>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }