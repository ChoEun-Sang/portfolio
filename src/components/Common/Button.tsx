import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full `}
    >
      {children}
    </button>
  );
};

export default Button;
