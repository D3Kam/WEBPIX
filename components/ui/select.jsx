import * as React from "react"
import { clsx } from "clsx"

const Select = ({ children, value, onValueChange, ...props }) => {
  return (
    <div {...props}>
      {React.Children.map(children, child => {
        if (child?.type?.displayName === 'SelectTrigger') {
          return React.cloneElement(child, { value, onValueChange });
        }
        return child;
      })}
    </div>
  );
};
Select.displayName = "Select"

const SelectTrigger = React.forwardRef(({ className, children, value, onValueChange, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        ref={ref}
        type="button"
        className={clsx(
          "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onClick={() => setOpen(!open)}
        {...props}
      >
        {children}
      </button>
    </div>
  );
});
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }) => {
  return <span className="text-gray-500">{placeholder}</span>;
};
SelectValue.displayName = "SelectValue"

const SelectContent = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef(({ className, children, value, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      "relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }