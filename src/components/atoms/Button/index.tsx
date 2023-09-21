import * as S from "./button.style";

interface ButtonProps {
  width?: string;
  height?: number;
  size?: string;
  color: string;
  type: "button" | "submit" | "reset" | undefined;
  label?: string;
  onClick?: any;
  form?: string;
  children?: any;
  disabled?: boolean;
  rotate?: string;
  className?: any;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <S.Button {...props} className={props.className}>
      {props.label && props.label}
    </S.Button>
  );
};
