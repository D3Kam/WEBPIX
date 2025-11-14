import * as React from "react"
import { clsx } from "clsx"

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("grid gap-2", className)} {...props} />
))
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => (
  <input
    type="radio"
    ref={ref}
    className={clsx(
      "h-4 w-4 rounded-full border-gray-300 text-black focus:ring-2 focus:ring-black focus:ring-offset-2",
      className
    )}
    {...props}
  />
))
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }