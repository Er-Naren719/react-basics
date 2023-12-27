import { ReactNode } from "react"

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${children}`} >
    { children } Button
    </button >
  )
}

export default Button