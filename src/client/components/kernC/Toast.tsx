import { cn } from "../../cn";
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

interface ToastProps {
  message: string;
  status: boolean;
}

const Toast = ({ message, status }: ToastProps) => {

  const Icon = status ? FaCheckCircle : MdError;
  const accentColor = status ? "before:bg-green-500" : "before:bg-red-500";
  const iconColor = status ? "text-green-500" : "text-red-500"; 

  return (
    <div
      className={cn(
        
        "h-12 w-fit px-4 shadow bg-white relative overflow-hidden",
        "flex items-center",
        "before:absolute before:top-0 before:left-0 before:h-full before:w-2",
        accentColor
      )}
    >
      <p className="flex items-center gap-2 text-black font-medium">
        <Icon className={cn("text-lg", iconColor)} />
        {message}
      </p>
    </div>
  );
};

export default Toast;