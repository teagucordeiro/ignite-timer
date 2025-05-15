import { ButtonContainer, ButtonVariant } from "./Button.stytes";

interface ButtonsProps {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonsProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
