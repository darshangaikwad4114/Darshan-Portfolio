import React from "react";
import { useClickSound } from "../hooks/useClickSound";

interface ClickableElementProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: "button" | "a" | "div" | "span";
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  disableClickSound?: boolean;
}

const ClickableElement: React.FC<ClickableElementProps> = ({
  children,
  as = "button",
  onClick,
  disableClickSound = false,
  ...props
}) => {
  const { playClickSound } = useClickSound();

  const handleClick = async (e: React.MouseEvent) => {
    if (!disableClickSound) {
      await playClickSound();
    }

    if (onClick) {
      onClick(e);
    }
  };

  const Component = as;

  return (
    <Component {...props} onClick={handleClick}>
      {children}
    </Component>
  );
};

export default ClickableElement;
