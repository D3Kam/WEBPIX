import * as React from "react"
import { clsx } from "clsx"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("rounded-lg border bg-white text-black shadow-sm", className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={clsx("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const BackgroundCard = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg", className)}
    {...props}
  />
))
BackgroundCard.displayName = "BackgroundCard"

export { Card, CardHeader, CardTitle, CardContent, BackgroundCard }