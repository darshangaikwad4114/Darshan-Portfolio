import React from "react";

interface ClickableElementProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: "button" | "a" | "div" | "span";
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const ClickableElement: React.FC<ClickableElementProps> = ({
  children,
  as = "button",
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent) => {
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
