import * as React from "react";

const Dialog = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      <div {...props}>{children}</div>
    </DialogContext.Provider>
  );
};

const DialogContext = React.createContext({
  open: false,
  setOpen: () => {},
});

const DialogTrigger = ({ children, className, ...props }) => {
  const { setOpen } = React.useContext(DialogContext);

  return (
    <div
      className={className}
      onClick={() => setOpen(true)}
      {...props}
    >
      {children}
    </div>
  );
};

const DialogContent = ({ children, className, ...props }) => {
  const { open, setOpen } = React.useContext(DialogContext);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={() => setOpen(false)}
    >
      <div
        className={`relative max-w-4xl w-full mx-4 ${className || ""}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <button
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export { Dialog, DialogTrigger, DialogContent };
