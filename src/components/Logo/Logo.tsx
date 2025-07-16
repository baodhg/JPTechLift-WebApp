import { Link } from "react-router-dom";
import colorLogo from "../../assets/images/header/Logo_RemoveBackground.png";
import whiteLogo from "../../assets/images/header/Logo_White_Removebackground.png";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export default function Logo({ variant = "default", className }: LogoProps) {
  const src = variant === "white" ? whiteLogo : colorLogo;
  return (
    <Link to="/">
      <img src={src} alt="JP TECHLIFT" className={className} />
    </Link>
  );
}